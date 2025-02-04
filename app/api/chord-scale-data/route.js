import { NextResponse } from 'next/server';

import {
  SCALE_COLLECTION,
  CHORD_COLLECTION,
} from '../../components/ChordScaleExplorer/constants';

const DATA = [...CHORD_COLLECTION, ...SCALE_COLLECTION];

const convertToCSV = (data) => {
  const headers = 'root,name,notes,tags,type';
  const rows = data
    .map(
      (item) =>
        `${item.root},${item.name},"${item.notes.join(' ')}","${item.tags.join(' ')}",${item.type}`,
    )
    .join('\n');

  return `${headers}\n${rows}`;
};

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const format = searchParams.get('format');
  const roots = searchParams.get('all');

  let chordScaleData = DATA.filter(({ root }) => root === 'C');

  if (roots === 'all') {
    chordScaleData = DATA;
  }

  if (format === 'csv') {
    const csvData = convertToCSV(chordScaleData);
    return new NextResponse(csvData, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
      },
    });
  }

  return NextResponse.json(chordScaleData, { status: 200 });
}

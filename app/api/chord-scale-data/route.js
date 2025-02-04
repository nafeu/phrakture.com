import { NextResponse } from 'next/server';

import {
  SCALE_COLLECTION,
  CHORD_COLLECTION,
} from '../../components/ChordScaleExplorer/constants';

export async function GET() {
  return NextResponse.json([...CHORD_COLLECTION, ...SCALE_COLLECTION], {
    status: 200,
  });
}

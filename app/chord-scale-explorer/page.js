import ChordScaleExplorer from '../components/ChordScaleExplorer';
import { CopyrightIcon } from '../components/Icons';

import styles from './page.module.css';

export const metadata = {
  title: "Phrakture's Chord & Scale Explorer",
  icons: {
    icon: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎹</text></svg>`,
  },
  description: `Explore chords & scales through tags and export MIDI`,
  keywords: ['phrakture', 'chord', 'scale', 'interactive', 'midi'],
};

export default function ChordScaleExplorerPage() {
  return (
    <div className={styles.main}>
      <ChordScaleExplorer />
      <div className={styles.footer}>
        <span>
          <CopyrightIcon /> 2025
        </span>{' '}
        <a href="https://phrakture.com">phrakture.com</a>{' '}
        <a href="https://nafeu.com">nafeu.com</a>{' '}
        <a href="mailto:phrakturemusic@proton.me?subject=Chord%20Scale%20Explorer%20Feedback">
          Send Feedback or Report an Issue
        </a>
      </div>
    </div>
  );
}

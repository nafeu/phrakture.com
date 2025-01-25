import ChordScaleExplorer from '../components/ChordScaleExplorer'

import styles from './page.module.css'

export const metadata = {
  title: 'Phrakture\'s Chord & Scale Explorer',
  icons: {
    icon: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎹</text></svg>`,
  },
  description: `Explore invoked emotions from different chords and scales`,
  keywords: ["phrakture", "chord", "scale", "interactive", "midi"]
}

export default function ChordScaleExplorerPage() {
  return <div className={styles.main}>
    <ChordScaleExplorer />
  </div>
}

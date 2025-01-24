import ChordScaleExplorer from '../components/ChordScaleExplorer'

import styles from './page.module.css'

export const metadata = {
  title: 'Phrakture | Chord Scale Emotion',
  description: `Explore invoked emotions from different chords and scales`,
  keywords: ["phrakture", "chord", "scale", "interactive", "midi"]
}

export default function ChordScaleEmotion() {
  return <div className={styles.main}>
    <ChordScaleExplorer />
  </div>
}

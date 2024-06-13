import Image from 'next/image'
import styles from './page.module.css'

import {
  InstagramIcon,
  YoutubeIcon,
  TwitterIcon,
  SoundcloudIcon,
  FacebookIcon,
  SpotifyIcon,
  BandcampIcon,
  LinkIcon
} from './components/Icons'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.links}>
        <div className={`${styles.item} ${styles.follow}`}>
          <div className={styles.header}>follow</div>

          <div className={styles.linkList}>
            <a className={styles.link} href="https://youtube.com/phrakture">
              <YoutubeIcon /> youtube
            </a>
            <a className={styles.link} href="https://twitter.com/phrakturemusic">
              <TwitterIcon /> twitter
            </a>
            <a className={styles.link} href="https://instagram.com/phrakture">
              <InstagramIcon /> instagram
            </a>
            <a className={styles.link} href="https://www.facebook.com/phrakturemusic/">
              <FacebookIcon /> facebook
            </a>
          </div>
        </div>
        <div className={`${styles.item} ${styles.discography}`}>
          <div className={styles.header}>listen</div>

          <div className={styles.linkList}>
            <a className={styles.link} href="https://open.spotify.com/artist/4AlnXoFGT5zl3v85ScIOzK?si=PjI_wsPsTemoD_BiQf8esA">
              <SpotifyIcon /> spotify
            </a>
            <a className={styles.link} href="https://phrakture.bandcamp.com/">
              <BandcampIcon /> bandcamp
            </a>
            <a className={styles.link} href="https://www.beatport.com/artist/phrakture/99726">
              <LinkIcon /> beatport
            </a>
            <a className={styles.link} href="https://soundcloud.com/phrakture">
              <SoundcloudIcon /> soundcloud
            </a>
          </div>
        </div>
        <div className={`${styles.item} ${styles.packs}`}>
          <div className={styles.header}>download</div>

          <div className={styles.linkList}>
            <a className={styles.link} href="https://freesound.org/people/Phrakture">
              <LinkIcon /> Free Sample Packs
            </a>
          </div>
        </div>
        <div className={`${styles.item} ${styles.tutorials}`}>
          <div className={styles.header}>watch</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.spotlight}></div>
        <div className={styles.about}></div>
      </div>
      <div className={styles.footer}>

      </div>
    </main>
  )
}

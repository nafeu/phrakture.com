import Image from 'next/image'
import styles from './page.module.css'

import Spotify from './components/Spotify'
import Twitch from './components/Twitch'

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
      <div className={styles.grid}>
        <div className={`${styles.item} ${styles.links}`}>
          <div className={styles.title}>links</div>
          <a className={styles.link} href="https://instagram.com/phrakture">
            <InstagramIcon /> instagram.com/phrakture
          </a>
          <a className={styles.link} href="https://youtube.com/phrakture">
            <YoutubeIcon /> youtube.com/phrakture
          </a>
          <a className={styles.link} href="https://twitter.com/phrakturemusic">
            <TwitterIcon /> twitter.com/phrakturemusic
          </a>
          <a className={styles.link} href="https://soundcloud.com/phrakture">
            <SoundcloudIcon /> soundcloud.com/phrakture
          </a>
          <a className={styles.link} href="https://www.facebook.com/phrakturemusic/">
            <FacebookIcon /> facebook.com/phrakturemusic
          </a>
        </div>
        <div className={`${styles.item} ${styles.discography}`}>
          <div className={styles.title}>discography</div>
          <div className={styles.content}>
            <a className={styles.link} href="https://open.spotify.com/artist/4AlnXoFGT5zl3v85ScIOzK?si=PjI_wsPsTemoD_BiQf8esA">
              <SpotifyIcon /> spotify
            </a>
            <a className={styles.link} href="https://phrakture.bandcamp.com/">
              <BandcampIcon /> bandcamp
            </a>
            <a className={styles.link} href="https://www.beatport.com/artist/phrakture/99726">
              <LinkIcon /> beatport
            </a>
          </div>
        </div>
        <div className={`${styles.item} ${styles.packs}`}>
          <div className={styles.title}>sample packs</div>
          <div className={styles.content}>
            <a className={styles.link} href="https://freesound.org/people/Phr4kture/packs">
              <LinkIcon /> Freesound
            </a>
            <a className={styles.link} disabled>
              (more to come...)
            </a>
          </div>
        </div>
        <div className={`${styles.item} ${styles.tutorials}`}>
          <div className={styles.title}>music tutorials</div>
          <div className={styles.content}>
            <a className={styles.link} href="https://www.youtube.com/playlist?list=PLJy-2vXnWEZ9QvAj7-4zSyHoOInXiRO4V">
              <YoutubeIcon /> Music Production
            </a>
            <a className={styles.link} href="https://www.youtube.com/playlist?list=PLJy-2vXnWEZ8NURxmSDbTjFtYTYDIxNam">
              <YoutubeIcon /> AKAI MPKmini
            </a>
          </div>
        </div>
        <div className={`${styles.embeds}`}>
          <Spotify className={styles.spotify}/>
          <Twitch className={styles.twitch}/>
        </div>
      </div>
    </main>
  )
}

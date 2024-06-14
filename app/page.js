import Image from 'next/image'

import styles from './page.module.css'

import {
  AlbumCollectionIcon,
  AlbumIcon,
  BandcampIcon,
  ChalkboardUserIcon,
  DiskIcon,
  FacebookIcon,
  InstagramIcon,
  LinkIcon,
  MapIcon,
  PianoKeyboardIcon,
  SoundcloudIcon,
  SpotifyIcon,
  TwitterIcon,
  YoutubeIcon
} from './components/Icons'

import { PhraktureLogo } from './components/Logos'

import headshotImage from '../public/headshot.jpeg'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.links}>
        <div className={`${styles.item} ${styles.packs}`}>
          <div className={styles.header}>download</div>

          <div className={styles.linkList}>
            <a className={styles.link} href="https://freesound.org/people/Phrakture">
              <DiskIcon /> freesound
            </a>
            <a className={styles.link} href="https://phrakture.itch.io/">
              <AlbumIcon /> itch.io
            </a>
            <a className={styles.link} href="https://phrakture.gumroad.com">
              <AlbumCollectionIcon /> gumroad
            </a>
          </div>
        </div>
        <div className={`${styles.item} ${styles.tutorials}`}>
          <div className={styles.header}>watch</div>

          <div className={styles.linkList}>
            <a className={styles.link} href="https://www.youtube.com/phrakture">
              <ChalkboardUserIcon /> tutorials
            </a>
            <a className={styles.link} href="https://www.youtube.com/playlist?list=PLJy-2vXnWEZ8UPSP0Wk-cJskPRqeX_u7a">
              <PianoKeyboardIcon /> performances
            </a>
            <a className={styles.link} href="https://www.youtube.com/phrakture">
              <MapIcon /> walkthroughs
            </a>
          </div>
        </div>
        <div className={`${styles.item} ${styles.discography}`}>
          <div className={styles.header}>listen</div>

          <div className={styles.linkList}>
            <a className={styles.link} href="https://phrakture.bandcamp.com/">
              <BandcampIcon /> bandcamp
            </a>
            <a className={styles.link} href="https://open.spotify.com/artist/4AlnXoFGT5zl3v85ScIOzK?si=PjI_wsPsTemoD_BiQf8esA">
              <SpotifyIcon /> spotify
            </a>
            <a className={styles.link} href="https://www.beatport.com/artist/phrakture/99726">
              <LinkIcon /> beatport
            </a>
            <a className={styles.link} href="https://soundcloud.com/phrakture">
              <SoundcloudIcon /> soundcloud
            </a>
          </div>
        </div>
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
      </div>
      <div className={styles.content}>
        <div className={styles.about}>
          <div className={styles.headshot}>
            <div style={{ backgroundImage: `url(${headshotImage.src})` }} className={styles.headshotCircle}></div>
            <div className={styles.logo}>
              <PhraktureLogo />
            </div>
          </div>
          <div className={styles.bio}>
            Hey there! My name is Nafeu and I have been producing progressive breakbeats, trance, IDM and glitch since 2005.
            <br/>
            <br/>
            I also make sample packs, tutorial videos, and compose soundtrack for videogames.
            <br/>
            <br/>
            If you would like to collaborate, license my music or inquire about potential soundtrack work, please reach out at:
            <br/>
            <br/>
            <a href="mailto:phrakturemusic@proton.me">phrakturemusic@proton.me</a>
          </div>
        </div>
        <div className={styles.spotlight}>
          <div className={styles.announcements}>Announcements</div>
        </div>
      </div>
      <div className={styles.footer}>
        Copyright 2024 Nafeu Nasir - phrakturemusic@proton.me
      </div>
    </main>
  )
}

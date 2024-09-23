import { Fragment } from 'react'

export const announcements = [
  {
    id: 2,
    date: "September 20th, 2024",
    title: "Lorn's Lure Soundtrack",
    image: "announcement-2.png",
    alt: "Lorn's Lure Cover",
    description: (
      <Fragment>
        <a href="https://store.steampowered.com/app/1417930/Lorns_Lure/">Lorn&apos;s Lure</a> is out now! The soundtrack is available on <a href="https://phrakture.bandcamp.com">Bandcamp</a> as well as <a href="https://distrokid.com/hyperfollow/phrakture/lorns-lure-original-soundtrack">Spotify, and all major platforms</a>
      </Fragment>
    ),
    url: "https://store.steampowered.com/app/1417930/Lorns_Lure/",
    cta: "View Steam Page"
  },
  {
    id: 1,
    date: "April 5th, 2024",
    title: "Claes Rosen - Stellarity (Phrakture Remix)",
    image: "announcement-1.png",
    alt: "Claes Rosen Stellarity Remixes",
    description: (
      <Fragment>
        Check out my breakbeat remix of Claes Rosen&apos;s Stellarity, out now on all major platforms.
      </Fragment>
    ),
    url: "https://soundcloud.com/springtube/claes-rosen-stellarity-phrakture-remix",
    cta: "Listen On Soundcloud"
  }
]

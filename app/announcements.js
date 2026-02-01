import { Fragment } from 'react';

export const announcements = [
  {
    id: 4,
    date: 'Feb 1st, 2026',
    title: 'Primordialis Soundtrack Is Out Now!',
    image: 'announcement-4.png',
    alt: 'Primordialis Soundtrack Cover',
    description: (
      <Fragment>
        The full OST for Primordialis is now available on all platforms!{' '}
        You can stream it <a href="https://www.youtube.com/watch?v=m4I9uIV1HvU">here.</a>{' '}
        We have also put the game and soundtrack together in a discounted bundle on Steam.{' '}
      </Fragment>
    ),
    url: 'https://store.steampowered.com/bundle/64662/Primordialis__Soundtrack/',
    cta: 'View Bundle On Steam',
  },
  {
    id: 3,
    date: 'January 20th, 2025',
    title: 'Primordialis Soundtrack + Patreon Launch',
    image: 'announcement-3.png',
    alt: 'Primordialis Logo',
    description: (
      <Fragment>
        I&apos;m excited to announce that I&apos;ve signed on to do the original
        soundtrack for{' '}
        <a href="https://www.youtube.com/watch?v=m4I9uIV1HvU">Primordialis</a>!
        In celebration of a wicked year of soundtrack production, I&apos;ve also
        launched a patreon,{' '}
        <a href="https://patreon.com/phrakture">check it out here.</a>
      </Fragment>
    ),
    url: 'https://store.steampowered.com/app/3011360/Primordialis/',
    cta: 'Wishlist Primordialis Now',
  },
  {
    id: 2,
    date: 'September 20th, 2024',
    title: "Lorn's Lure Soundtrack",
    image: 'announcement-2.png',
    alt: "Lorn's Lure Cover",
    description: (
      <Fragment>
        <a href="https://store.steampowered.com/app/1417930/Lorns_Lure/">
          Lorn&apos;s Lure
        </a>{' '}
        is out now! The soundtrack is available on{' '}
        <a href="https://phrakture.bandcamp.com">Bandcamp</a> as well as{' '}
        <a href="https://distrokid.com/hyperfollow/phrakture/lorns-lure-original-soundtrack">
          Spotify, and all major platforms
        </a>
      </Fragment>
    ),
    url: 'https://store.steampowered.com/app/1417930/Lorns_Lure/',
    cta: 'View Steam Page',
  },
  {
    id: 1,
    date: 'April 5th, 2024',
    title: 'Claes Rosen - Stellarity (Phrakture Remix)',
    image: 'announcement-1.png',
    alt: 'Claes Rosen Stellarity Remixes',
    description: (
      <Fragment>
        Check out my breakbeat remix of Claes Rosen&apos;s Stellarity, out now
        on all major platforms.
      </Fragment>
    ),
    url: 'https://soundcloud.com/springtube/claes-rosen-stellarity-phrakture-remix',
    cta: 'Listen On Soundcloud',
  },
];

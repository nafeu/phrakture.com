import React from 'react';

const Spotify = ({ className }) => {
  return (
    <div className={className}>
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/artist/4AlnXoFGT5zl3v85ScIOzK?utm_source=generator&theme=0"
        width="100%"
        height="500"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      >
      </iframe>
    </div>
  )
}

export default Spotify

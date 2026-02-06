export default function WhatIveWrittenForGamesRightContent() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: '2rem 0',
        gap: '1.5rem',
        overflowY: 'auto',
      }}
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/i2uYe8nRIwI?si=uSofWw-Y528QguXw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{
          maxWidth: '100%',
          width: '560px',
          aspectRatio: '16/9',
          maxHeight: '30vh',
          borderRadius: '1.25rem',
          boxShadow: '0 6px 36px rgba(0,0,0,0.3)',
          flexShrink: 1,
        }}
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/WAwg8ro5PP0?si=ymKkcFiDZ6aOCmeQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{
          maxWidth: '100%',
          width: '560px',
          aspectRatio: '16/9',
          maxHeight: '30vh',
          borderRadius: '1.25rem',
          boxShadow: '0 6px 36px rgba(0,0,0,0.3)',
          flexShrink: 1,
        }}
      ></iframe>
    </div>
  );
}

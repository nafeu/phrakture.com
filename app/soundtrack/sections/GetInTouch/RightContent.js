export default function GetInTouchRightContent() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.75rem',
        alignItems: 'flex-start',
        width: '100%',
      }}
    >
      <h3 style={{ fontSize: '1.25rem', marginBottom: 0, color: 'var(--st-accent-2)', fontWeight: 700 }}>
        Behind The Scenes
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', width: '100%' }}>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.12)' }}>
          <iframe
            src="https://www.youtube.com/embed/0QkstGXIaJ0?si=J_VtMiDUjVmB4BI_"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
              borderRadius: 8,
            }}
          />
        </div>
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.12)' }}>
          <iframe
            src="https://www.youtube.com/embed/mSQEDbkcGX8?si=hsXh717-YVebhmTB"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
              borderRadius: 8,
            }}
          />
        </div>
      </div>
    </div>
  );
}

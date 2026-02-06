export default function IntroRightContent() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <img
        src="/soundtrack-1.png"
        alt="Soundtrack visual"
        style={{
          maxWidth: '100%',
          maxHeight: '80vh',
          objectFit: 'contain',
          borderRadius: '1.25rem',
          boxShadow: '0 6px 36px rgba(0,0,0,0.3)',
        }}
      />
    </div>
  );
}

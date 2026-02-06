import Image from 'next/image';

export default function IntroRightContent() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        position: 'relative',
        maxWidth: '100%',
        maxHeight: '80vh',
      }}
    >
      <Image
        src="/soundtrack-1.png"
        alt="Soundtrack visual"
        fill
        style={{
          objectFit: 'contain',
          borderRadius: '1.25rem',
          boxShadow: '0 6px 36px rgba(0,0,0,0.3)',
        }}
      />
    </div>
  );
}

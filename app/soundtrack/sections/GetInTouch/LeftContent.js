export default function GetInTouchLeftContent() {
  return (
    <>
      <h2 style={{ fontSize: '3rem' }}>Get in touch</h2>
      <p style={{ fontSize: '1.5rem' }}>You can reach me in one of the following ways:</p>

      <h3>Email</h3>
      <p style={{ fontSize: '1.5rem' }}>
        📧 <a href="mailto:phrakturemusic@proton.me">phrakturemusic@proton.me</a>
      </p>

      <h3>Discord</h3>
      <p>Join my Discord community and send me a DM @ PhraktureMusic</p>
      <p>
        🔗{' '}
        <a
          href="https://discord.gg/d9M9CQhhmS"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '1.5rem' }}
        >
          Phrakture Community Discord
        </a>
      </p>

      <h3>When reaching out, please include:</h3>
      <ul>
        <li>Team size</li>
        <li>A brief description of your game</li>
        <li>Steam or itch.io page (if available)</li>
        <li>The type of music you&apos;re looking for</li>
        <li>Your estimated release timeline (TBD is totally fine)</li>
      </ul>
    </>
  );
}

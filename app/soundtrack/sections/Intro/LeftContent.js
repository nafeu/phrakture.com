export default function IntroLeftContent() {
  return (
    <>
      <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Hey There!</h2>
      <p style={{ fontSize: '2rem', marginBottom: '1.5rem' }} className="lead">
        My name is Nafeu and I want to help you craft the OST that your game{' '}
        <strong>deserves.</strong>
      </p>
      <div style={{ fontSize: '1.5rem' }}>
        <p>
          I&apos;ve been writing music since 2004 and in the last two years
          I&apos;ve composed the full original soundtrack for two amazing indie
          titles on Steam:
        </p>
        <ul className="gameLinks">
          <li>
            <a
              href="https://store.steampowered.com/app/1417930/Lorns_Lure/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lorn&apos;s Lure
            </a>{' '}
            (Very Positive with 2000+ reviews)
          </li>
          <li>
            <a
              href="https://store.steampowered.com/app/3011360/Primordialis/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Primordialis
            </a>{' '}
            (Very Positive with 700+ reviews in Early Access)
          </li>
        </ul>
        <p style={{ fontSize: '1rem' }}>
          I've also done a popular VGM remix of Unreal Tournament's "Foregone
          Destruction" through the OCRemix community and I've got an expansive
          portfolio of commercial releases on Beatport and Spotify under the
          artist name <em>Phrakture</em>, with support from DJs like Jaytech,
          Solarstone, Matt Darey, Andy Moor, and more.
        </p>
      </div>
    </>
  );
}

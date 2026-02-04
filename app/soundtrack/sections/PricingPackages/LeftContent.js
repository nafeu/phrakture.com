export default function PricingPackagesLeftContent() {
  return (
    <>
      <h2>Pricing packages</h2>

      <article className="package">
        <h3>Indie package</h3>
        <span className="badge">Recommended for Solo Devs and Indie Studios</span>
        <p className="price">FREE — I receive 100% of soundtrack revenue</p>
        <h4>Qualifications</h4>
        <ul>
          <li>Must be an independent team (or solo dev)</li>
          <li>Must convince me to believe in the success of your project and share some passion for it</li>
        </ul>
        <h4>Details</h4>
        <p>
          I retain rights to sell and distribute the music on my own (via Steam,
          Bandcamp, Spotify and all major platforms) and receive 100% of the
          soundtrack revenue, but we work under a contract which specifies
          preservation details around the intellectual property before any
          commercial release (e.g. you must sign off on the final version of
          anything that gets shipped to digital stores and streaming platforms).
        </p>
        <p className="note">
          This package was used by the Lorn&apos;s Lure dev team and Primordialis dev team.
        </p>
      </article>

      <article className="package">
        <h3>Standard package</h3>
        <p className="price">$150 USD per minute of track ($9,000 for 1 hour of finished audio)</p>
        <h4>Qualifications</h4>
        <ul>
          <li>Any size team</li>
          <li>Must convince me to believe in the commercial success of your project</li>
        </ul>
        <h4>Details</h4>
        <p>I retain no rights to sell or distribute the music on my own.</p>
        <p className="note">
          This package has been used mostly by independent filmmakers, tech
          startups for promotional videos, dance groups, etc.
        </p>
      </article>
    </>
  );
}

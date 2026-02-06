export default function PricingPackagesRightContent() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <h3
        style={{
          fontSize: '1rem',
          fontWeight: 600,
          color: 'var(--st-accent-2)',
          margin: 0,
        }}
      >
        <em>"How are you able to work for free? What&apos;s the catch?"</em>
      </h3>
      <p
        style={{
          fontSize: '0.95rem',
          lineHeight: 1.65,
          color: 'var(--st-text)',
          margin: 0,
          opacity: 0.95,
        }}
      >
        I don&apos;t work for free on every project. I only accept projects with
        the &quot;indie package&quot; when I believe the game has a strong
        chance of commercial success and that soundtrack sales can reasonably
        replace my standard rate (typically around $150 per finished minute).
      </p>
      <p
        style={{
          fontSize: '0.95rem',
          lineHeight: 1.65,
          color: 'var(--st-text)',
          margin: 0,
          opacity: 0.95,
        }}
      >
        In these cases, I earn my income from selling the game&apos;s soundtrack
        instead of charging the development team directly. Historically, this
        has worked well for me. Soundtrack sales have often exceeded what I
        would have earned through a flat fee.
      </p>
      <p
        style={{
          fontSize: '0.95rem',
          lineHeight: 1.65,
          color: 'var(--st-text)',
          margin: 0,
          opacity: 0.95,
        }}
      >
        The trade-off is simple: the developer doesn&apos;t earn revenue from
        the soundtrack, but also doesn&apos;t need to make any upfront financial
        investment in music. This can be especially helpful for indie teams
        looking to reduce early production costs while still getting a fully
        produced, release-ready soundtrack.
      </p>
    </div>
  );
}

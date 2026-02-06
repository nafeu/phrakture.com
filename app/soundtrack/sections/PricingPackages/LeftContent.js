export default function PricingPackagesLeftContent() {
  return (
    <>
      <h2 style={{ marginTop: '-1.5rem' }}>Pricing packages</h2>
      <div
        className="pricingTable"
        style={{
          width: '100%',
          borderCollapse: 'separate',
          borderSpacing: 0,
          borderRadius: 12,
          overflow: 'hidden',
          border: '1px solid rgba(248, 244, 227, 0.15)',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th
                style={{
                  padding: '1rem 1.25rem',
                  textAlign: 'left',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--st-text)',
                  opacity: 0.8,
                  background: 'rgba(112, 108, 97, 0.2)',
                  borderBottom: '2px solid rgba(248, 244, 227, 0.15)',
                }}
              >
               
              </th>
              <th
                style={{
                  padding: '1rem 1.25rem',
                  textAlign: 'left',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--st-accent-2)',
                  background: 'rgba(255, 137, 102, 0.12)',
                  borderBottom: '2px solid rgba(248, 244, 227, 0.15)',
                  borderLeft: '1px solid rgba(248, 244, 227, 0.1)',
                }}
              >
                Indie Package
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    marginTop: '0.25rem',
                    color: 'var(--st-accent-1)',
                  }}
                >
                  Recommended for Solo Devs & Indie Studios
                </span>
              </th>
              <th
                style={{
                  padding: '1rem 1.25rem',
                  textAlign: 'left',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--st-text)',
                  background: 'rgba(112, 108, 97, 0.2)',
                  borderBottom: '2px solid rgba(248, 244, 227, 0.15)',
                  borderLeft: '1px solid rgba(248, 244, 227, 0.1)',
                }}
              >
                Standard Package
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  padding: '1rem 1.25rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--st-accent-1)',
                  background: 'rgba(112, 108, 97, 0.15)',
                  borderBottom: '1px solid rgba(248, 244, 227, 0.1)',
                  verticalAlign: 'top',
                  width: '28%',
                }}
              >
                Price
              </td>
              <td
                style={{
                  padding: '1rem 1.25rem',
                  fontSize: '1rem',
                  color: 'var(--st-text)',
                  borderBottom: '1px solid rgba(248, 244, 227, 0.1)',
                  borderLeft: '1px solid rgba(248, 244, 227, 0.1)',
                  verticalAlign: 'top',
                  background: 'rgba(255, 137, 102, 0.06)',
                }}
              >
                <strong style={{ color: 'var(--st-accent-2)' }}>FREE</strong>
                <br />
                <span style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                  I receive 100% of soundtrack revenue
                </span>
              </td>
              <td
                style={{
                  padding: '1rem 1.25rem',
                  fontSize: '1rem',
                  color: 'var(--st-text)',
                  borderBottom: '1px solid rgba(248, 244, 227, 0.1)',
                  borderLeft: '1px solid rgba(248, 244, 227, 0.1)',
                  verticalAlign: 'top',
                }}
              >
                <strong style={{ color: 'var(--st-accent-2)' }}>$150 USD</strong> per minute
                <br />
                <span style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                  ($9,000 for 1 hour of finished audio)
                </span>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: '1rem 1.25rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--st-accent-1)',
                  background: 'rgba(112, 108, 97, 0.15)',
                  borderBottom: '1px solid rgba(248, 244, 227, 0.1)',
                  verticalAlign: 'top',
                }}
              >
                Qualifications
              </td>
              <td
                style={{
                  padding: '1rem 1.25rem',
                  fontSize: '0.95rem',
                  color: 'var(--st-text)',
                  borderBottom: '1px solid rgba(248, 244, 227, 0.1)',
                  borderLeft: '1px solid rgba(248, 244, 227, 0.1)',
                  verticalAlign: 'top',
                  background: 'rgba(255, 137, 102, 0.06)',
                }}
              >
                Independent team (or solo dev)
              </td>
              <td
                style={{
                  padding: '1rem 1.25rem',
                  fontSize: '0.95rem',
                  color: 'var(--st-text)',
                  borderBottom: '1px solid rgba(248, 244, 227, 0.1)',
                  borderLeft: '1px solid rgba(248, 244, 227, 0.1)',
                  verticalAlign: 'top',
                }}
              >
                Any size team
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: '1rem 1.25rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--st-accent-1)',
                  background: 'rgba(112, 108, 97, 0.15)',
                  borderBottom: '1px solid rgba(248, 244, 227, 0.1)',
                  verticalAlign: 'top',
                }}
              >
                Rights
              </td>
              <td
                style={{
                  padding: '1rem 1.25rem',
                  fontSize: '0.9rem',
                  color: 'var(--st-text)',
                  borderBottom: '1px solid rgba(248, 244, 227, 0.1)',
                  borderLeft: '1px solid rgba(248, 244, 227, 0.1)',
                  verticalAlign: 'top',
                  lineHeight: 1.25,
                  background: 'rgba(255, 137, 102, 0.06)',
                }}
              >
                I retain rights to sell &amp; distribute (Steam, Bandcamp, Spotify, etc.).
                Contract specifies IP preservation before commercial release (you sign off
                on final versions shipped to stores.)
              </td>
              <td
                style={{
                  padding: '1rem 1.25rem',
                  fontSize: '0.9rem',
                  color: 'var(--st-text)',
                  borderBottom: '1px solid rgba(248, 244, 227, 0.1)',
                  borderLeft: '1px solid rgba(248, 244, 227, 0.1)',
                  lineHeight: 1.25,
                  verticalAlign: 'top',
                }}
              >
                You retain rights to sell and distribute with agreements on credit attribution.
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: '1rem 1.25rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--st-accent-1)',
                  background: 'rgba(112, 108, 97, 0.15)',
                  verticalAlign: 'top',
                }}
              >
                Used by
              </td>
              <td
                style={{
                  padding: '1rem 1.25rem',
                  fontSize: '0.9rem',
                  fontStyle: 'italic',
                  color: 'var(--st-text)',
                  opacity: 0.9,
                  borderLeft: '1px solid rgba(248, 244, 227, 0.1)',
                  verticalAlign: 'top',
                  background: 'rgba(255, 137, 102, 0.06)',
                }}
              >
                Lorn&apos;s Lure, Primordialis
              </td>
              <td
                style={{
                  padding: '1rem 1.25rem',
                  fontSize: '0.9rem',
                  fontStyle: 'italic',
                  color: 'var(--st-text)',
                  opacity: 0.9,
                  borderLeft: '1px solid rgba(248, 244, 227, 0.1)',
                  verticalAlign: 'top',
                }}
              >
                Filmmakers, tech startups, dance groups, etc.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

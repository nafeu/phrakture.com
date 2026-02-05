const iconStyle = { width: 22, height: 22, stroke: 'currentColor', strokeWidth: 2, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' };

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle} aria-hidden>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const BoardIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle} aria-hidden>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle} aria-hidden>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle} aria-hidden>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const FileIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle} aria-hidden>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const BanIcon = () => (
  <svg viewBox="0 0 24 24" style={iconStyle} aria-hidden>
    <circle cx="12" cy="12" r="10" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
  </svg>
);

const items = [
  { icon: CalendarIcon, label: 'Two Week Trial' },
  { icon: BoardIcon, label: 'Private Collaboration Board' },
  { icon: MessageIcon, label: 'Give Unlimited Feedback' },
  { icon: ShieldIcon, label: "NDA's Accepted (Optional)" },
  { icon: FileIcon, label: 'Create Contract for Continued Work' },
  { icon: BanIcon, label: 'NO AI-generated Sound Assets', highlight: true },
];

export default function HowIWorkRightContent() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}
    >
      <h3
        style={{
          fontSize: '1.1rem',
          fontWeight: 600,
          marginBottom: '0.5rem',
          color: 'var(--st-accent-2)',
        }}
      >
        At a glance
      </h3>
      {items.map(({ icon: Icon, label, highlight }) => (
        <div
          key={label}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '0.65rem 1rem',
            borderRadius: 8,
            background: highlight ? 'rgba(229, 68, 109, 0.15)' : 'rgba(112, 108, 97, 0.25)',
            borderLeft: highlight ? '3px solid var(--st-accent-1)' : '3px solid transparent',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              borderRadius: 8,
              background: 'var(--st-bg)',
              color: highlight ? 'var(--st-accent-1)' : 'var(--st-accent-2)',
              flexShrink: 0,
            }}
          >
            <Icon />
          </div>
          <span
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.3,
              fontWeight: highlight ? 600 : 400,
              color: 'var(--st-text)',
            }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

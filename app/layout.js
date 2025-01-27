import './globals.css';

export const metadata = {
  title: 'Phrakture | Music, Sample Packs, Soundtrack and More',
  description: `Explore music, download sample packs and watch tutorials for melodic electronica, breakbeats and trance.`,
  keywords: ['phrakture', 'soundtrack', 'breakbeats', 'sample packs'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

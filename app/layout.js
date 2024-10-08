import './globals.css'
import backgroundImage from '../public/background.png'

export const metadata = {
  title: 'Phrakture | Music, Sample Packs, Soundtrack and More',
  description: `Explore music, download sample packs and watch tutorials for melodic electronica, breakbeats and trance.`,
  keywords: ["phrakture", "soundtrack", "breakbeats", "sample packs"]
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundImage: `url(${backgroundImage.src})` }}>{children}</body>
    </html>
  )
}

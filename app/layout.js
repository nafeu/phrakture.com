import './globals.css'
import backgroundImage from '../public/background.png'

export const metadata = {
  title: 'Phrakture | Music, Sample Packs, Soundtrack and More',
  description: `Explore music and sample packs for melodic progressive breaks, trance, soundtrack production and more.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundImage: `url(${backgroundImage.src})` }}>{children}</body>
    </html>
  )
}

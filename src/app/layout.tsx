import '../styles/globals.css'

export const metadata = {
  title: 'Get random user',
  description: 'Code challenge for Artura by Tobias Wiklund',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import './globals.css'

export const metadata = {
  title: 'Jcodev Portfolio',
  description: 'The web development portfolio for Jcodev',
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

import './globals.css'

export const metadata = {
  title: 'Brocode',
  description: 'brocode',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#121316]" >{children}</body>
      {/* #0e1129*/}
    </html>
  )
}

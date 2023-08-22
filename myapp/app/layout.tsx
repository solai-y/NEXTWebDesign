
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <main>
          <nav>
            <a href="/">Home</a>
            <a href="/">Notes</a>
          </nav>
        </main>
        {children}
        </body>
    </html>
  )
}

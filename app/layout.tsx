import { Sidebar } from '@/components/Sidebar'
import './globals.css'

export const metadata = {
  title: 'Geckodonia',
  description: 'Geckodonia site in Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  )
}

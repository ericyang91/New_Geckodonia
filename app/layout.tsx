import './globals.css'
import { Sidebar } from '@/components/Sidebar'

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
        {children}
      </body>
    </html>
  )
}

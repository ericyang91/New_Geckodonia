import { Footer } from './Footer'
import { Sidebar } from './Sidebar'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar />
      <main>
        {children}
        <Footer />
      </main>
    </>
  )
}

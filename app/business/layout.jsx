import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
export default function businessLayout({ children }) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  )
}

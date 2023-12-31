import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
export default function userLayout({ children }) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  )
}

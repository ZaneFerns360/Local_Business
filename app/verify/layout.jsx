import Footer from '@components/Footer'
export default function verifyLayout({ children }) {
  return (
    <section>
      {children}
      <Footer />
    </section>
  )
}

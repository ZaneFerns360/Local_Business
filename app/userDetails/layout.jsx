import Footer from '@components/Footer'
export default function userLayout({ children }) {
  return (
    <section>
      {children}
      <Footer />
    </section>
  )
}

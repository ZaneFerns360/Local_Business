import Footer from '@components/Footer'
export default function loginLayout({ children }) {
  return (
    <section>
      {children}
      <Footer />
    </section>
  )
}

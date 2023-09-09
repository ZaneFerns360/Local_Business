import Footer from '@components/Footer'
export default function newUserLayout({ children }) {
  return (
    <section>
      {children}
      <Footer />
    </section>
  )
}

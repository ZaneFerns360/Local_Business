import Courses from '@/components/Courses'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Teachers from '@/components/Teachers'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Courses />
      <Teachers />
      <Footer />
    </>
  )
}
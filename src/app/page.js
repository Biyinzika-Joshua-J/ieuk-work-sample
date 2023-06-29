import Image from 'next/image'
import Hero from '../../components/hero/Hero'
import Discover from '../../components/discover/Discover'
import Testimonials from '../../components/testimonials/Testimonials'
import Destiny from '../../components/destinations/Destiny'
import Accordion from '../../components/faq/Faq'

export default function Home() {
  return (
    <main className="">
        <Hero/>
        <Discover/>
        <Testimonials/>
        <Destiny/>
        <Accordion/>
    </main>
  )
}

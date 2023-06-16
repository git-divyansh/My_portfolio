import { Inter } from '@next/font/google'
import BodyHome from '@/components/BodyHome'
import Portfolio from '@/pages/Portfolio'
import About from '@/pages/About'
import ContactMe from '@/pages/ContactMe'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <BodyHome />
      <About />
      <Portfolio />
      <ContactMe />
    </div>
  )
}

import { LoadingScreen } from "@/components/loading-screen"
import { ScrollProgress } from "@/components/scroll-progress"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Portfolio } from "@/components/sections/portfolio"
import { Testimonials } from "@/components/sections/testimonials"
import { InstagramFeed } from "@/components/sections/instagram-feed"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

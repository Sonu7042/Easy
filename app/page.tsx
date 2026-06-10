import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { BookedServices } from '@/components/booked-services'
import { HowItWorks } from '@/components/how-it-works'
import { PartnerCTA } from '@/components/partner-cta'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <BookedServices />
      <HowItWorks />
      <PartnerCTA />
      <Footer />
    </main>
  )
}

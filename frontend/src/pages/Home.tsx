import Header from '../component/Header'
import Footer from '../component/Footer'
import Hero from '../component/Hero'
import UpcomingMatches from '../component/UpcomingMatches'
import HowItWorks from '../component/HowItWorks'
// import LatestNews from '../component/LatestNews'
import SubscriptionForm from '../component/SubscriptionForm'
import Testimonials from '../component/Testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <UpcomingMatches />
      <HowItWorks />
      {/* <LatestNews /> */}
      <SubscriptionForm />
      <Testimonials />
      <Footer />
    </>
  )
}


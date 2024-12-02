import Header from '../component/Header'
import Footer from '../component/Footer'
import Hero from '../component/Hero'
// import UpcomingMatches from '../component/UpcomingMatches'
// import HowItWorks from '../component/HowItWorks'
// import Usp from '../component/Usp'
// import LatestNews from '../component/LatestNews'
// import SubscriptionForm from '../component/SubscriptionForm'
// import Testimonials from '../component/Testimonials'
import WhyInstinct from '../component/WhyInstinct'
// import Languages from '../component/Languages'
// import InstintWorks from '../component/InstinctWorks';
import Last from './last';
import Sticky from '../component/Sticky'
import TrendingCategories from '../component/TrendingCategories'
import SecLast from '../component/SecLast'

export default function Home() {
  return (
    <>
      <Header />
      <Sticky />
      <Hero />
      <WhyInstinct />
      <TrendingCategories />
      {/* <UpcomingMatches /> */}
      {/* <HowItWorks /> */}
      {/* <InstintWorks /> */}
      
      {/* <Usp /> */}
      {/* <Languages /> */}
      {/* <LatestNews /> */}
      <SecLast />
      <Last />
      {/* <SubscriptionForm />
      <Testimonials /> */}
      <Footer />
    </>
  )
}


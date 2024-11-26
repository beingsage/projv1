import Header from '../component/Header'
import Footer from '../component/Footer'
import Hero from '../component/Hero'
import UpcomingMatches from '../component/UpcomingMatches'
// import HowItWorks from '../component/HowItWorks'
import Usp from '../component/Usp'
// import LatestNews from '../component/LatestNews'
// import SubscriptionForm from '../component/SubscriptionForm'
// import Testimonials from '../component/Testimonials'
import WhyInstinct from '../component/WhyInstinct'
import Languages from '../component/Languages'
import InstintWorks from '../component/InstinctWorks';
import Last from './last';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyInstinct />
      <UpcomingMatches />
      {/* <HowItWorks /> */}
      <InstintWorks />
      
      <Usp />
      <Languages />
      {/* <LatestNews /> */}
      <Last />
      {/* <SubscriptionForm />
      <Testimonials /> */}
      <Footer />
    </>
  )
}


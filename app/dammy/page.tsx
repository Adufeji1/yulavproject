import Link from 'next/link'
import Navigation from '@/components/Navbar/nav'
import Checkout from '@/components/Checkoutpage/checkout'
// import Footer from '@/components/Footer/footer'
import Footer from '@/components/Footer'
import Waitlist from '@/components/Waitlist/waitlist'


function page() {
  return (
    <div>
      <Navigation />
      <Checkout />
      <Footer />
      <Waitlist />
      
      
      
    </div>
  )
}

export default page
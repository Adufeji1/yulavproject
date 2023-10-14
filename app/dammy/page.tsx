import Link from 'next/link'
import Navigation from '@/components/Navbar/nav'
import Checkout from '@/components/Checkoutpage/checkout'
import Footer from '@/components/Footer/footer'


function page() {
  return (
    <div>
      <Navigation />
      <Checkout />
      <Footer />
      
      
    </div>
  )
}

export default page
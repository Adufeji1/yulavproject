import React from 'react'
import '../Styles/style.css'
import Image from 'next/image'
// import Image from 'next/image'

export default function Waitlist() {
  return (
    <div>
      {/* side bar navigation */}
      <div className='waitlistbg'>

        {/* waitlistbg */}
        <div className='waitlistnav-bg'>
            <img className='waitlistlogo' src="/Images/logo1.png" alt="" />
            <div className='waitlist-home'>Home</div>
        </div>

        <div className='bgcominwaitlist'>
          <p className='comingwaitlist'>Coming soon....</p>
          <p className='yulavwaitlistext'>Yulav: Unleash Your Curiosity, Embrace Limitless Learning!"</p>
          <p className='waitlistjoin'>Join our wait-list to get updates, first hand information and amazing discounts</p>
          <p className='emailwaittext'>Input your email to get notified when we launch.</p>
          <button className='imputsectionwaitlist'>
            <input className='inputtextproper' placeholder='Your email' type="text" />
            <img className='inputarrowicon' src="/Images/musicarrow.png" alt="" />
          </button>
          <div className='allIcons'>
              <img className='whatsappIcon' src="/Images/brand-whatsapp.png" alt="" />
              <img className='facebookIcon' src="/Images/facebooklogo.png" alt="" />
              <img className='twitterIcon' src="/Images/Twitterlogo.png" alt="" />
              <img className='linkedinIcon' src="/Images/linkedinlogo.png" alt="" />
          </div>

        </div>

        <div className='imageman'>
          <img src="/Images/man.png" alt="" />
        </div>
      </div>
    </div>
  )
}

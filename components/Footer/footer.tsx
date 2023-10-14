import React from 'react'
import '../Styles/style.css'
import Image from 'next/image'


export default function Footer() {
  return (
    <div>
        <div className='footer_bg'>
            <div>
                <img className='footer_logo' src="/Images/logo1.png" alt="" />
                {/* class of logos */}
                <div className='classofLogos'>
                    <img className='logoimg' src="/Images/facebooklogo.png" alt="Facebook" />
                    <img className='logoimg' src="/Images/Twitterlogo.png" alt="" />
                    <img className='logoimg' src="/Images/linkedinlogo.png" alt="" />
                    <img className='logoimg' src="/Images/instagramlogo.png" alt="" />
                </div>

                <div className='paragraphfooterdiv'>
                    <p>Different solutions to distinguish your brand.</p>
                </div>

                {/* centred footer texts */}
                <div className='bgcentredPage'>
                    <h3 className='pages'>Pages</h3>
                    <span className='footerworks'>How it works</span> 
                    <span className='pricing'>Pricing </span>
                    <span className='blog'>Blog</span>
                </div>

                <div className='bgcentredPagetwo'>
                    <h3 className='pages'>Services</h3>
                    <span className='footerworks'>Branding</span> 
                    <span className='pricing'>Marketing</span>
                    <span className='blog'>E-learning</span>
                </div>


                {/* div that can house every other texts */}
            </div>



            {/* background div */}
        </div>



    </div>
  )
}

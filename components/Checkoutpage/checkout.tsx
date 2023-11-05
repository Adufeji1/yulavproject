import React from 'react'
import '../Styles/style.css'
import Image from 'next/image'


// import files
import Offers from './educationaloffers'


export default function Checkout() {
  return (
  <div>
      <div className='checkout_container'>  
        <div className='check_bg'>
          <h3 className='checkoutheading'>Checkout</h3>
          <p className='checkoutCartType'>Cart type</p>

          <div className='paymentchannel'>
            <Image className='paymentImageone' src="Images/Paypal.png" alt="Paypal_image" />
            <Image className='paymentImagetwo' src="Images/am_amex_06 1.png" alt="" />
            <Image className='paymentImagethree' src="Images/download 1.png" alt="" />
            <Image className='paymentImageFour' src="Images/Frame 2093.png" alt="" />
          </div>

      {/* Forms */}
        <div className='formbg'>
          <form className='formstyles' action="text">
            <label className='formlabel' htmlFor="">Card Number</label>
            <input className='cardnumberinput' type="text" placeholder='Enter Card number'/>

            <label className='nameofCardLabel' htmlFor="">Name of card</label>
            <input className='nameofcardInput' type="text" placeholder='Name of card' />

            <label className='expirationLabel' htmlFor="">Expiration Date MM/YY</label>
            <label className='cvcLabel' htmlFor="">CVC</label>

            <div className='inputexpirationbg'>
            <input className='expirationInput' type="text"  placeholder='Enter Expiration Date'/>
            <input className='cvcInput' type="text" placeholder='Enter CVC' />
            </div>

          <div className='inlinecheckboxingobg'>
            <input className='checkBoxInfobg' type="checkbox" placeholder='save my information for faster checkout'/>
            <span className='paragraphsave'>Save my information for faster checkout</span>
          </div>

        <div>
          <button className='submitBtn'>Submit</button>
        </div>
          </form>
        </div>
      </div>



        {/* Summary Section */}
        <div className='summary_bg'>

          <p className='summaryp'>Summary</p>

          <div className='bgImageSummary'>
            <Image className='summaryImg' src="/Images/confident-teacher-explaining-lesson-pupils 1.png" alt="" />
            <div className='summaryparagraph'>
              <p className='summaryfirstp'>adipising elit, sed do eiusmod tempor</p>
              <p className='summarysecondp'>Lorem ipsum dollar...</p>
              <p className='summarythirdp'>$24.69</p>
            </div>
          </div>

          {/* second summary image */}

          <div className='bgImageSummarytwo'>
            <Image className='summaryImg' src="/Images/confident-teacher-explaining-lesson-pupils 1.png" alt="" />
            <div className='summaryparagraph'>
              <p className='summaryfirstp'>adipising elit, sed do eiusmod tempor</p>
              <p className='summarysecondp'>Lorem ipsum dollar...</p>
              <p className='summarythirdp'>$24.69</p>
            </div>
          </div>

        {/* subtotal summary section */}
      <div className='subtotalbg'>
          <div className='subtotalone'>
            <span>Subtotal</span>
            <span>$51.38</span>
          </div>
          <hr className='hrsubtotal' />

          <div className='subtotaltwo'>
            <span>Coupon Discount</span>
            <span>$51.38</span>
          </div>
          <hr className='hrsubtotal' />

          <div className='subtotalthree'>
            <span>Tax</span>
            <span>$51.38</span>
          </div>
          <hr className='hrsubtotal' />

          <div className='subtotalfour'>
            <span>Total</span>
            <span>$51.38</span>
          </div>
          <hr className='hrsubtotal' />
        </div>

      </div>

      </div>

      {/* top education offer section */}

        <div className='educational_bg'>
          <p className='paragrapheducational'>Top Education offers and deals are listed here</p>
        
          <div className='bgImgEducationOffers'>
              <span className='educationalpercent'>50%</span>

              <div className='loremipsumTexts'>
                <span className='educationalfirstlorem'>Lorem ipsum dolor</span>

              <span className='secondlorem'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>

              <span className='thirdlorem'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>
              </div>
          </div>

          {/* second one */}
          <div className='bgImgEducationOffersTwo'>
              <span className='educationalpercent'>50%</span>

              <div className='loremipsumTexts'>
                <span className='educationalfirstlorem'>Lorem ipsum dolor</span>

              <span className='secondlorem'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>

              <span className='thirdlorem'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>
              </div>
          </div>
         

          {/* third educational offer */}

          <div className='bgImgEducationOffersThree'>
              <span className='educationalpercent'>50%</span>

              <div className='loremipsumTexts'>
                <span className='educationalfirstlorem'>Lorem ipsum dolor</span>

              <span className='secondlorem'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>

              <span className='thirdlorem'>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</span>
              </div>
          </div>

      </div>     


  </div>
  )
}

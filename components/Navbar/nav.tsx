import React from 'react'
import '../Styles/style.css'
import Image from 'next/image'

// fontawesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


export default function Navigation() {
  return (
    <div className='nav_background'>
       <Image className='img_logo' src="/Images/logo1.png" alt="logo"/>

       <ul className='listed_item'>
        <li>Home</li>
        <li className='second_navlist'>Degree <FontAwesomeIcon className='navlist_fontawesome_style' icon={faChevronDown} /></li>
       </ul>

    <div className='nav_bell_bg'>
      <Image  className='nav_bell' src="/Images/bell.png" alt="bell" />
    </div>

    <div className='profile_bg'>
      <Image className='profile_img' src="/Images/user-circle.png" alt="" />
      <p className='profilename'>Francis Adelaja</p>
    </div>

    </div>
  )
}

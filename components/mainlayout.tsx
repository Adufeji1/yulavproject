import SearchBar from './searchBar';
import UserProfile from './userProfile';
import OnGoing from './onGoing';
import ProgressBar from './progressBar';
import Calendar from './calendar'
import CompletedCourses from './completedCourses';
import OtherCourses from './otherCourses';
import BookMarked from './bookMarked';

import {GoHomeFill} from 'react-icons/go'
import {AiFillProject} from 'react-icons/ai'
import {FaCalendarAlt} from 'react-icons/fa'
import {BsFillGridFill} from 'react-icons/bs'
import {HiEnvelope} from 'react-icons/hi2'
import {MdDarkMode, MdToggleOff} from 'react-icons/md'
import {MdMonitorHeart} from 'react-icons/md'
import {RiUserSmileLine} from 'react-icons/ri'
import Link from 'next/link';

const Mainlayout = () => {
  return (
    <div className='bg-[#ECECEC] w-screen min-h-screen flex'>

      <div className='flex justify-start items-start min-h-screen'>
        <aside className='bg-white w-60 h-[730px] p-4 absolute left-0 top-0 bottom-0'>
          <h3 className='font-san ml-8 mt-5 flex'>
            <RiUserSmileLine className= 'mt-2 mr-2'/>
            yulav.io
          </h3>
          <ul className='mt-8 ml-5 font-semibold'>
            <li className='flex justify-start item-center p-2  '>
              <div className='bg-[#dfdfdf] pl-1 pr-1 rounded'>
                <GoHomeFill className='mt-1'/>
              </div>
              <Link href="/" className='ml-3'>Dashboard</Link>
            </li>

            <li className='flex justify-start item-center p-2 mt-1'>
              <div className='bg-[#dfdfdf] pl-1 pr-1 rounded'>
                <AiFillProject className='mt-1'/>
              </div>
              <Link href="Project" className='ml-3'>Project</Link>
            </li>

            <li className='flex justify-start item-center p-2 mt-1'>
              <div className='bg-[#dfdfdf] pl-1 pr-1 rounded'>
                <FaCalendarAlt className='mt-1'/>
              </div>
              <Link href="To-Do-List" className='ml-3'>To-Do-List</Link>
            </li>

            <li className='flex justify-start item-center p-2 mt-1'>
              <div className='bg-[#dfdfdf] pl-1 pr-1 rounded'>
                <BsFillGridFill className='mt-1'/>
              </div>
              <Link href="Team" className='ml-3'>Team</Link>
            </li>

            <li className='flex justify-start item-center p-2 mt-1'>
              <div className='bg-[#dfdfdf] pl-1 pr-1 rounded'>
                <HiEnvelope className='mt-1'/>
              </div>
              <Link href="Message" className='ml-3'>Message</Link>
            </li>

            <li className='flex justify-start item-center p-2 mt-1'>
              <div className='bg-[#dfdfdf] pl-1 pr-1 rounded'>
                <MdMonitorHeart className='mt-1'/>
              </div>
              <Link href="Activities" className='ml-3'>Activities</Link>
              <p className='bg-[purple] w-6 h-6 text-center text-white rounded-3xl ml-10'>4</p>
            </li>

            <li className='flex justify-start item-center p-2 mt-1'>
              <div className='bg-[#dfdfdf] pl-1 pr-1 rounded'>
                <MdDarkMode className='mt-1'/>
              </div>
              <Link href="" className='ml-3'>Dark Mode</Link>
              <MdToggleOff className= 'ml-7 w-6 h-6 text-[#ababab]'/>
            </li>
          </ul>
        </aside>
      </div> 


      <div className='flex items-center gap-5 absolute inset-x-0 top-3 left-[250px]'>
        <SearchBar/>
        <UserProfile/>
      </div>
      
      <div className='items-center gap-5 flex absolute inset-x-0 left-[250px]'>
        <OnGoing/>
        <ProgressBar/>
        <Calendar/>
      </div>

      <div className='items-center gap-5 flex absolute inset-x-0 left-[280px] top-[535px]'>
        <CompletedCourses/>
        <OtherCourses/>
        <BookMarked/>
      </div>

    </div>
  );
};

export default Mainlayout
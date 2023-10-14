import { BsArrowRightShort } from 'react-icons/bs'
import {FiMoreVertical} from 'react-icons/fi'

const onGoing = () => {
  return (
    <div className="bg-white ml-8 w-[340px] h-[340px] mt-[80px]">
      <div className="ml-8 mt-6">
        <div className='flex justify-between items-center mt-3'>
          <p className="font-medium text-[16px]">Ongoing Courses</p>
          <FiMoreVertical className='w-5 h-5 mr-5 mt-1'/>
        </div>

        <div className='flex mt-4'>
         <div className='flex'>
            <div className='bg-[#57388E] w-[2px] h-8'></div>
            <div className='ml-2'>
              <h5 className='font-bold text-[12px]'>HTML, CSS & JAVASCRIPT</h5>
              <p className='text-[8px]'>Last viewed: Today 01:35pm</p>
            </div>  
          </div>
        </div>

        <div className='flex mt-6'>
         <div className='flex'>
            <div className='bg-[#57388E] w-[2px] h-8'></div>
            <div className='ml-2'>
              <h5 className='font-bold text-[12px]'>PHP 101</h5>
              <p className='text-[8px]'>Last viewed: Today 01:35pm</p>
            </div>
          </div>
        </div>

        <div className='flex mt-6'>
         <div className='flex'>
            <div className='bg-[#57388E] w-[2px] h-8'></div>
            <div className='ml-2'>
              <h5 className='font-bold text-[12px]'>WEBFLOW: Crash Course</h5>
              <p className='text-[8px]'>Last viewed: Today 01:35pm</p>
            </div>
          </div>
        </div>

        <div className='flex mt-6'>
         <div className='flex'>
            <div className='bg-[#57388E] w-[2px] h-8'></div>
            <div className='ml-2'>
              <h5 className='font-bold text-[12px]'>PHP 101</h5>
              <p className='text-[8px]'>Last viewed: Today 01:35pm</p>
            </div>
          </div>
        </div>

       <div className='text-[#7a57bd] flex justify-center mt-8'>
          <p className='text-[12px] mr-2 font-medium'>See More</p>
          <BsArrowRightShort className='text-[20px] mt-[1px]'/>
       </div>
      </div>
    </div>
  )
}

export default onGoing
import { BsArrowRightShort, BsCheckCircleFill } from "react-icons/bs"

const otherCourses = () => {
  return (
    <div className="bg-white w-[348px] h-[340px] mb-5 mt-[-140px]">
      <div className="ml-8 mt-6">
        <p className="font-semibold text-[16px] whitespace-nowrap">Other courses you might like</p>

        <div className='flex mt-4 justify-between'>
         <div className='flex'>
            <div className='bg-[#57388E] w-[2px] h-8'></div>
            <div className='ml-2'>
              <h5 className='font-bold text-[12px]'>WEBFLOW: Crash Course</h5>
              <p className='text-[8px]'>No Code</p>
            </div> 
          </div>
          <BsCheckCircleFill className='text-[#57388E] w-5 h-5 mr-8'/> 
        </div>

        <div className='flex mt-4 justify-between'>
         <div className='flex'>
            <div className='bg-[#57388E] w-[2px] h-8'></div>
            <div className='ml-2'>
              <h5 className='font-bold text-[12px]'>PHOTOGRAPHY: Basic 1</h5>
              <p className='text-[8px]'>Photograhy</p>
            </div>
          </div>
          <BsCheckCircleFill className='text-[#57388E] w-5 h-5 mr-8'/>
        </div>

        <div className='flex mt-4 justify-between'>
         <div className='flex'>
            <div className='bg-[#57388E] w-[2px] h-8'></div>
            <div className='ml-2'>
              <h5 className='font-bold text-[12px]'>UI/UX Design: Interface ...</h5>
              <p className='text-[8px]'>UI/UX Design</p>
            </div>
          </div>
          <BsCheckCircleFill className='text-[#57388E] w-5 h-5 mr-8'/>
        </div>

        <div className='flex mt-4 justify-between'>
         <div className='flex'>
            <div className='bg-[#57388E] w-[2px] h-8'></div>
            <div className='ml-2'>
              <h5 className='font-bold text-[12px]'>DIGITAL MARKETING 101</h5>
              <p className='text-[8px]'>Digital Marketing</p>
            </div>
          </div>
          <BsCheckCircleFill className='text-[#57388E] w-5 h-5 mr-8'/>
        </div>

        <div className='flex mt-4 justify-between'>
         <div className='flex'>
            <div className='bg-[#57388E] w-[2px] h-8'></div>
            <div className='ml-2'>
              <h5 className='font-bold text-[12px]'>DIGITAL MARKETING 101</h5>
              <p className='text-[8px]'>Digital Marketing</p>
            </div>
          </div>
          <BsCheckCircleFill className='text-[#57388E] w-5 h-5 mr-8'/>
        </div>

       <div className='text-[#7a57bd] flex justify-center mt-4'>
          <p className='text-[12px] mr-2 font-medium'>See More</p>
          <BsArrowRightShort className='text-[20px] mt-[1px]'/>
       </div>
      </div>
    </div>
   
  )
}

export default otherCourses
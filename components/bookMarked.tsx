import { FiMoreVertical } from "react-icons/fi"

const bookMarked = () => {
  return (
    <div className="bg-white w-[300px] h-[180px] mb-5 mt-[25px]">
        <div className="ml-8 mt-5">
          <p className="font-semibold text-[16px] whitespace-nowrap">Bookmarked courses</p>

          <div className='flex justify-between items-center mt-2'>
            <p className="font-medium text-[11px]">UI/UX Crash Courses</p>
            <FiMoreVertical className='w-4 h-4 mr-12 mt-1'/>
          </div>

          <div className='flex justify-between items-center mt-2'>
            <p className="font-medium text-[11px]">UI/UX Crash Courses</p>
            <FiMoreVertical className='w-4 h-4 mr-12 mt-1'/>
          </div>

          <div className='flex justify-between items-center mt-2'>
            <p className="font-medium text-[11px]">UI/UX Crash Courses</p>
            <FiMoreVertical className='w-4 h-4 mr-12 mt-1'/>
          </div>

          <div className='flex justify-between items-center mt-2'>
            <p className="font-medium text-[11px]">UI/UX Crash Courses</p>
            <FiMoreVertical className='w-4 h-4 mr-12 mt-1'/>
          </div>
        </div>
    </div>
  )
}

export default bookMarked
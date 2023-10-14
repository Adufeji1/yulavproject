import {BiSearch} from 'react-icons/bi'
const searchBar = () => {
  return (
    <div className=" items-center">
      <div className=" flex bg-white justify-start items-center w-[700px] h-[40px] mt-0 ml-8">
        <BiSearch className='m-3 w-6 h-6'/>
        <p className='text-[#747474] font-medium text-[14px]'>Search by topics, tutors, or categories</p>
      </div>
    </div>
  )
}

export default searchBar
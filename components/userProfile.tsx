import { BsFillFileEarmarkSpreadsheetFill } from "react-icons/bs"
import Image from "next/image"
import { AiOutlineDown } from "react-icons/ai"

const userProfile = () => {
  return (
    <div className='flex bg-white w-[300px] h-[65px]'>
      <div className=" flex items-center gap-5 ml-7 ">
        <BsFillFileEarmarkSpreadsheetFill className='bg-[#e5d7f7] w-7 h-7 pl-2 pr-2 text-[#57388e] rounded-2xl'/>
        <BsFillFileEarmarkSpreadsheetFill className='bg-[#e5d7f7] w-7 h-7 pl-2 pr-2 text-[#57388e] rounded-2xl'/>

        <div className=" flex relative w-6 h-6 ml-4">
          <Image src={"/man2.jpg"} alt={"img"} layout="fill" objectFit="contain" className=" w-[20px] h-[20px] rounded-2xl"/>
          <div className="ml-8">
            <p className="text-[12px] font-medium whitespace-nowrap ">Ekom Essiet</p>
            <p className="text-[8px]">@ekomessiet</p>
          </div>
        </div>

        <AiOutlineDown className='ml-[80px]'/>
      </div>
    </div>
  )
}

export default userProfile
import Image from 'next/image'

 import { VscProject } from 'react-icons/vsc';
 import {  GoHomeFill } from 'react-icons/go';
 import {  RiCalendarTodoFill,RiAppsFill, RiArrowDropDownLine } from 'react-icons/ri';
 import { MdDarkMode } from 'react-icons/md';
 import { BiFile,BiNotepad } from 'react-icons/bi';
 import { BsPerson } from 'react-icons/bs';
 import { FiSearch } from 'react-icons/fi';
 import { IoIosArrowDroprightCircle,IoIosArrowDropleftCircle } from 'react-icons/io';




export default function Home() {
  return (
    <>

<main className = "flex ">

{/* side-Nav */}
<section className="sidebar w-[20%] bg-white min-h-[100vh]">

  <div className ="pb-[1rem] pt-[.5rem]">LOGO</div>
  <ul className = ''>



  <div className= "flex pl-[1rem]  space-x-2  pb-[.5rem] mb-4">
  <span className =" pt-[.5rem] text-[1.5rem] "><GoHomeFill className ="bg-slate-200 p-[.35rem] rounded-[5px]" />
  </span>
  <li className = 'pt-3'>Dashboard</li>
  </div>

  <div className= "flex pl-[1rem] bg-purple-900  space-x-2  pb-[.5rem] mb-4">
  <span className =" text-[1.5rem] pt-[.5rem]"><VscProject className ="bg-slate-200 p-[.35rem] rounded-[5px]" />
  </span>
  <li className = 'pt-3 text-white'>Project</li>
  </div>
  <div className= "flex pl-[1rem]  space-x-2  pb-[.5rem] mb-4">
  <span className ="pt-[.5rem] text-[1.5rem] "><RiCalendarTodoFill className ="bg-slate-200 p-[.35rem] rounded-[5px]" />
  </span>
  <li className = 'pt-3'>To-do list</li>
  </div>

  <div className= "flex pl-[1rem]  space-x-2 pb-[.5rem] mb-4">
  <span className ="pt-[.5rem] text-[1.5rem] "><RiAppsFill className ="bg-slate-200 p-[.35rem] rounded-[5px]" />
  </span>
  <li className = 'pt-3'>Teams</li>
  </div>

  <div className= "flex pl-[1rem]  space-x-2  pb-[.5rem] mb-4">
  <span className =" pt-[.5rem] text-[1.5rem] "><VscProject className ="bg-slate-200 p-[.35rem] rounded-[5px]" />
  </span>
  <li className = 'pt-3'>Messages</li>

  <span className='pt-[.5rem] text-[1rem] ml-[2rem] bg-purple-900 text-white py-[.1rem] px-1 rounded-full'>4</span>
  </div>

  <div className= "flex pl-[1rem]  space-x-2  pb-[.5rem] mb-4">
  <span className =" pt-[.5rem] text-[1.5rem] "><VscProject className ="bg-slate-200 p-[.35rem] rounded-[5px]" />
  </span>
  <li className = 'pt-3'>Activity</li>
  </div>

  <div className= "flex pl-[1rem]  space-x-2  pb-[.5rem] mb-4">
  <span className =" pt-[.5rem] text-[1.5rem] "><MdDarkMode className ="bg-slate-200 p-[.35rem] rounded-[5px]" />
  </span>
  <li className = 'pt-3'>Dark Mood</li>
  </div>

 
 
  </ul>
  
</section>


<section className="Contents min-h-full w-[80%] px-[2rem]">
  <div className="dashB-header ">
<div className="dashB-headerContent flex pt-[1rem]">
<div className="searchbar  w-[60%] h-[10rem]  mr-4 relative">
  <span className= 'absolute top-[.9rem] left-[1rem]'><FiSearch /></span>
    <input placeholder ="search by tutor, topics or categories"  type="text"  className =" w-[100%] pl-10 py-[.5rem] "/>

  </div>

  <div className="profile w-[40%] h-[4rem] bg-white">

    <section className ="flex justify-center space-x-10 pt-[1rem]">


     <span className = ' w-[1.8rem] h-[1.8rem] pl-[.4rem] pt-[.4rem] text-purple-900 rounded-full bg-purple-200'><BiFile /></span>
     <span className = ' w-[1.8rem] h-[1.8rem] pl-[.4rem] pt-[.4rem] text-purple-900 rounded-full bg-purple-200'><BiFile /></span>
    
     <div className="flex space-x-2">
<div className="profile_img w-[2.4rem] h-[2.4rem] bg-slate-400 rounded-full mt-[-.2rem]">
  <img src="" alt="" />
</div>
<div className="ptext pt-[.2rem] ">

<h4 className ="text-[10px]">Ekom Essiet</h4>
<h4 className ='text-[8px]'>@ekomessiet009</h4>
</div>
     </div>
     <span><RiArrowDropDownLine className = 'text-[2rem]' /></span>
     </section>
    
  </div>
</div>
   <div className="ratings mt-[-4rem] flex space-x-4">
    <div className = "h-[4rem] w-[50%] bg-white  rounded-[10px] flex justify-between px-[1rem] py-[.5rem]">

      <div>
        <h4 className = 'mb-[0rem] text-[12px]'>Project</h4>
        <h4 className = 'text-[1.2rem] font-semibold'>50</h4>
      </div>
      <span className =" "><VscProject className ="bg-blue-500 text-[2.5rem] p-1 text-white rounded-[8px]" />
  </span>
    </div>
    
    <div className = "h-[4rem] w-[50%] bg-white  rounded-[10px] flex justify-between px-[1rem] py-[.5rem]">

<div>
  <h4 className = 'mb-[0rem] text-[12px]'>Total raised for sponsporship project</h4>
  <h4 className = 'text-[1.2rem] font-semibold'>$500K</h4>
</div>
<span className =" "><VscProject className ="bg-blue-500 text-[2.5rem] p-1 text-white rounded-[8px]" />
</span>
</div>

<div className = "h-[4rem] w-[50%] bg-white  rounded-[10px] flex justify-between px-[1rem] py-[.5rem]">

<div>
  <h4 className = 'mb-[0rem] text-[12px]'>Total  sponsporship project</h4>
  <h4 className = 'text-[1.2rem] font-semibold'>4,000</h4>
</div>
<span className =" "><VscProject className ="bg-blue-500 text-[2.5rem] p-1 text-white rounded-[8px]" />
</span>
</div>
   </div>
  </div>
  <section className="dashCont   min-h-[100vh] mt-[2rem]">
<h1 className = 'py-[.8rem] text-[1.4rem]'>All projects</h1>


<div className = "h-[8rem] w-[100%] bg-white   flex justify-between px-[1rem] py-[.5rem]">
   <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Project Name/creator</h4>
        <span className =" "><VscProject className ="bg-blue-500 text-[4.5rem] p-5 text-white rounded-[8px]" />
  </span>
      </div>
      <div className = 'ml-[-2.9rem] pt-[2.8rem]'>
        <h4 className = 'text-[14px] font-medium text-slate-600'>Project Name/creator</h4>                     
        <h4 className = 'text-[12px] capitalize text-slate-400'>By peter johnson</h4>                     
        </div>   
        </section>

        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Members</h4>
        <span className =" ">
        <div className = 'flex mt-[1.5rem]'>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-1rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-1rem] bg-slate-400 rounded-full'></div>
        </div>
  </span>
      </div>
     
        </section>

        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Sponsors</h4>
        <span className =" ">
        <div className = 'flex mt-[1.5rem]'>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-2.2rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
        </div>
  </span>
      </div>
    
        </section>


        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Date <br />Created</h4>
  
      </div>
      <div className = 'ml-[-2.9rem] pt-[3rem]'>
        <h4 className = 'text-[14px] font-medium text-slate-600'>June 2,<br /> 2024</h4>                     
                            
        </div>   
        </section>


        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Progress</h4>
   
      </div>
      <div className = 'ml-[-2.9rem] pt-[2.8rem]'>
            
        <h4 className = 'text-[12px]    font-extrabold capitalize  text-slate-800'>60% done</h4>    
      
          <input type="range" name="" id=""  min="0" max="1" value="0.5" step="0.001" class="progress-bar"/>
        </div>   
        </section>
    </div>



    <div className = "h-[8rem] w-[100%] bg-white   my-[1.5rem] flex justify-between px-[1rem] py-[.5rem]">
   <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Project Name/creator</h4>
        <span className =" "><VscProject className ="bg-blue-500 text-[4.5rem] p-5 text-white rounded-[8px]" />
  </span>
      </div>
      <div className = 'ml-[-2.9rem] pt-[2.8rem]'>
        <h4 className = 'text-[14px] font-medium text-slate-600'>Project Name/creator</h4>                     
        <h4 className = 'text-[12px] capitalize text-slate-400'>By peter johnson</h4>                     
        </div>   
        </section>

        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Members</h4>
        <span className =" ">
        <div className = 'flex mt-[1.5rem]'>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-1rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-1rem] bg-slate-400 rounded-full'></div>
        </div>
  </span>
      </div>
     
        </section>

        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Sponsors</h4>
        <span className =" ">
        <div className = 'flex mt-[1.5rem]'>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-2.2rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
        </div>
  </span>
      </div>
    
        </section>


        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Date <br />Created</h4>
  
      </div>
      <div className = 'ml-[-2.9rem] pt-[3rem]'>
        <h4 className = 'text-[14px] font-medium text-slate-600'>June 2,<br /> 2024</h4>                     
                            
        </div>   
        </section>


        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Progress</h4>
   
      </div>
      <div className = 'ml-[-2.9rem] pt-[2.8rem]'>
            
        <h4 className = 'text-[12px]    font-extrabold capitalize  text-slate-800'>60% done</h4>    
      
          <input type="range" name="" id=""  min="0" max="1" value="0.5" step="0.001" class="progress-bar"/>
        </div>   
        </section>
    </div>


    
    <div className = "h-[8rem] w-[100%] bg-white   my-[1.5rem] flex justify-between px-[1rem] py-[.5rem]">
   <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Project Name/creator</h4>
        <span className =" "><VscProject className ="bg-blue-500 text-[4.5rem] p-5 text-white rounded-[8px]" />
  </span>
      </div>
      <div className = 'ml-[-2.9rem] pt-[2.8rem]'>
        <h4 className = 'text-[14px] font-medium text-slate-600'>Project Name/creator</h4>                     
        <h4 className = 'text-[12px] capitalize text-slate-400'>By peter johnson</h4>                     
        </div>   
        </section>

        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Members</h4>
        <span className =" ">
        <div className = 'flex mt-[1.5rem]'>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-1rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-1rem] bg-slate-400 rounded-full'></div>
        </div>
  </span>
      </div>
     
        </section>

        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Sponsors</h4>
        <span className =" ">
        <div className = 'flex mt-[1.5rem]'>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-2.2rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
        </div>
  </span>
      </div>
    
        </section>


        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Date <br />Created</h4>
  
      </div>
      <div className = 'ml-[-2.9rem] pt-[3rem]'>
        <h4 className = 'text-[14px] font-medium text-slate-600'>June 2,<br /> 2024</h4>                     
                            
        </div>   
        </section>


        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Progress</h4>
   
      </div>
      <div className = 'ml-[-2.9rem] pt-[2.8rem]'>
            
        <h4 className = 'text-[12px]    font-extrabold capitalize  text-slate-800'>60% done</h4>    
      
          <input type="range" name="" id=""  min="0" max="1" value="0.5" step="0.001" class="progress-bar"/>
        </div>   
        </section>
    </div>




    <div className = "h-[8rem] w-[100%] bg-white   my-[1.5rem] flex justify-between px-[1rem] py-[.5rem]">
   <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Project Name/creator</h4>
        <span className =" "><VscProject className ="bg-blue-500 text-[4.5rem] p-5 text-white rounded-[8px]" />
  </span>
      </div>
      <div className = 'ml-[-2.9rem] pt-[2.8rem]'>
        <h4 className = 'text-[14px] font-medium text-slate-600'>Project Name/creator</h4>                     
        <h4 className = 'text-[12px] capitalize text-slate-400'>By peter johnson</h4>                     
        </div>   
        </section>

        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Members</h4>
        <span className =" ">
        <div className = 'flex mt-[1.5rem]'>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-1rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-1rem] bg-slate-400 rounded-full'></div>
        </div>
  </span>
      </div>
     
        </section>

        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Sponsors</h4>
        <span className =" ">
        <div className = 'flex mt-[1.5rem]'>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-2.2rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
        </div>
  </span>
      </div>
    
        </section>


        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Date <br />Created</h4>
  
      </div>
      <div className = 'ml-[-2.9rem] pt-[3rem]'>
        <h4 className = 'text-[14px] font-medium text-slate-600'>June 2,<br /> 2024</h4>                     
                            
        </div>   
        </section>


        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Progress</h4>
   
      </div>
      <div className = 'ml-[-2.9rem] pt-[2.8rem]'>
            
        <h4 className = 'text-[12px]    font-extrabold capitalize  text-slate-800'>60% done</h4>    
      
          <input type="range" name="" id=""  min="0" max="1" value="0.5" step="0.001" class="progress-bar"/>
        </div>   
        </section>
    </div>





    <div className = "h-[5rem] w-[100%] bg-white   my-[1.5rem]  px-[1rem] py-[.5rem]">
   <section className = 'flex justify-center space-x-4 pt-[1rem]'>
   <span className='pt-1'><IoIosArrowDropleftCircle  className = ' bg-indigo-900 text-white rounded-full text-[1.4rem]'/></span>

   <div className = ' h-[2rem] rounded-[10px] px-[.7rem] py-[.2rem] border-2 border-indigo-900 bg-indigo-900 text-white'>1</div>
   <div className = ' w-[2rem] h-[2rem] rounded-[10px] px-[.7rem] py-[.2rem] border-2 border-indigo-900'>2</div>
   <div className = ' w-[2rem] h-[2rem] rounded-[10px] px-[.7rem] py-[.2rem] border-2 border-indigo-900'> 3</div>
   <div className = ' w-[2rem] h-[2rem] rounded-[10px] px-[.7rem] py-[.2rem] border-2 border-indigo-900'>4</div>
   <div className = ' w-[2rem] h-[2rem] rounded-[10px] px-[.7rem] py-[.2rem] border-2 border-indigo-900'>5</div>
   <span className='pt-1'><IoIosArrowDroprightCircle className = ' bg-indigo-900 text-white rounded-full text-[1.4rem]' /></span>
        </section>

      
       


        

    </div>


  </section>

{/* sponsored project */}
  <section>
  <h1 className = 'py-[.8rem] text-[1.4rem]'>sponsored project </h1>

<div className="spnsr_ctrl flex justify-center space-x-10">
  <section className="spnsContainer mt-[1.5rem]">
    <div className='bg-white w-[100%] h-[18rem] rounded-[10px] px-[1.5rem]  pt-[1.5rem] border-t-8 border-blue-500'>
 <h4 className='text-blue-500 text-[1.2rem] font-semibold'>Educating the Child </h4>
 <p className='py-[.5rem] text-[10px] text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
   Aspernatur quod impedi</p>

  <span className='flex'>
    <span className='pt-[.5rem] pr-[.2rem]'><BsPerson /></span><h6 className='py-[.5rem] text-[10px] text-gray-400'>Created by peter Johnson</h6></span>
 <span className='flex'>
  <span className='pt-[.5rem] pr-[.2rem]'> <BiNotepad /></span>
  <h6 className='py-[.5rem] text-[10px] text-gray-400'> Created Jun 2,2024</h6></span>

 <div className="spnsors mt-[1.5rem]">
 <h6 className='py-[.5rem] text-[10px] text-gray-400'> Sponsors</h6>
 <div>
       
        
        <div className = 'flex '>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-1rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-1rem] bg-slate-400 rounded-full'></div>
        </div>
 
      </div>
 </div>
    </div>
  </section>

  <section className="spnsContainer mt-[1.5rem]">
    <div className='bg-white w-[100%] h-[18rem] rounded-[10px] px-[1.5rem]  pt-[1.5rem] border-t-8 border-blue-500'>
 <h4 className='text-blue-500 text-[1.2rem] font-semibold'>Educating the Child </h4>
 <p className='py-[.5rem] text-[10px] text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
   Aspernatur quod impedi</p>

  <span className='flex'>
    <span className='pt-[.5rem] pr-[.2rem]'><BsPerson /></span><h6 className='py-[.5rem] text-[10px] text-gray-400'>Created by peter Johnson</h6></span>
 <span className='flex'>
  <span className='pt-[.5rem] pr-[.2rem]'> <BiNotepad /></span>
  <h6 className='py-[.5rem] text-[10px] text-gray-400'> Created Jun 2,2024</h6></span>

 <div className="spnsors mt-[1.5rem]">
 <h6 className='py-[.5rem] text-[10px] text-gray-400'> Sponsors</h6>
 <div>
       
        
        <div className = 'flex '>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-1rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-1rem] bg-slate-400 rounded-full'></div>
        </div>
 
      </div>
 </div>
    </div>
  </section>

  <section className="spnsContainer mt-[1.5rem]">
    <div className='bg-white w-[100%] h-[18rem] rounded-[10px] px-[1.5rem]  pt-[1.5rem] border-t-8 border-blue-500'>
 <h4 className='text-blue-500 text-[1.2rem] font-semibold'>Educating the Child </h4>
 <p className='py-[.5rem] text-[10px] text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
   Aspernatur quod impedi</p>

  <span className='flex'>
    <span className='pt-[.5rem] pr-[.2rem]'><BsPerson /></span><h6 className='py-[.5rem] text-[10px] text-gray-400'>Created by peter Johnson</h6></span>
 <span className='flex'>
  <span className='pt-[.5rem] pr-[.2rem]'> <BiNotepad /></span>
  <h6 className='py-[.5rem] text-[10px] text-gray-400'> Created Jun 2,2024</h6></span>

 <div className="spnsors mt-[1.5rem]">
 <h6 className='py-[.5rem] text-[10px] text-gray-400'> Sponsors</h6>
 <div>
       
        
        <div className = 'flex '>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-1rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-1rem] bg-slate-400 rounded-full'></div>
        </div>
 
      </div>
 </div>
    </div>
  </section>
  </div>
  </section>

  {/* Pending project */}
  

  <section className='pt-[1.2rem]'>

 

  <h1 className = 'py-[.8rem] text-[1.4rem]'>Pending project </h1>

  <div className = "h-[8rem] w-[100%] bg-white   my-[1.5rem] flex justify-between px-[1rem] py-[.5rem]">
   <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Project Name/creator</h4>
        <span className =" "><VscProject className ="bg-blue-500 text-[4.5rem] p-5 text-white rounded-[8px]" />
  </span>
      </div>
      <div className = 'ml-[-2.9rem] pt-[2.8rem]'>
        <h4 className = 'text-[14px] font-medium text-slate-600'>Project Name/creator</h4>                     
        <h4 className = 'text-[12px] capitalize text-slate-400'>By peter johnson</h4>                     
        </div>   
        </section>

        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Members</h4>
        <span className =" ">
        <div className = 'flex mt-[1.5rem]'>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-1rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-1rem] bg-slate-400 rounded-full'></div>
        </div>
  </span>
      </div>
     
        </section>

        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Sponsors</h4>
        <span className =" ">
        <div className = 'flex mt-[1.5rem]'>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-2.2rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
        </div>
  </span>
      </div>
    
        </section>


        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Date <br />Created</h4>
  
      </div>
      <div className = 'ml-[-2.9rem] pt-[3rem]'>
        <h4 className = 'text-[14px] font-medium text-slate-600'>June 2,<br /> 2024</h4>                     
                            
        </div>   
        </section>


        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Sponsors</h4>
   
      </div>
      <div className = 'ml-[-2.9rem] pt-[2.8rem] flex space-x-4'>
            
      <button className='bg-green-200  w-[70%] rounded-[5px] h-[2rem] px-[.5rem] text-[12px] font-medium text-green-600'>Approve</button>
      <button className='bg-red-200  w-[70%] rounded-[5px] h-[2rem] px-[.5rem] text-[12px] font-medium text-red-600'>Reject</button>
   
        </div>   
        </section>
    </div>

    <div className = "h-[8rem] w-[100%] bg-white   my-[1.5rem] flex justify-between px-[1rem] py-[.5rem]">
   <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Project Name/creator</h4>
        <span className =" "><VscProject className ="bg-blue-500 text-[4.5rem] p-5 text-white rounded-[8px]" />
  </span>
      </div>
      <div className = 'ml-[-2.9rem] pt-[2.8rem]'>
        <h4 className = 'text-[14px] font-medium text-slate-600'>Project Name/creator</h4>                     
        <h4 className = 'text-[12px] capitalize text-slate-400'>By peter johnson</h4>                     
        </div>   
        </section>

        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Members</h4>
        <span className =" ">
        <div className = 'flex mt-[1.5rem]'>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-1rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-1rem] bg-slate-400 rounded-full'></div>
        </div>
  </span>
      </div>
     
        </section>

        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Sponsors</h4>
        <span className =" ">
        <div className = 'flex mt-[1.5rem]'>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-2.2rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
        </div>
  </span>
      </div>
    
        </section>


        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Date <br />Created</h4>
  
      </div>
      <div className = 'ml-[-2.9rem] pt-[3rem]'>
        <h4 className = 'text-[14px] font-medium text-slate-600'>June 2,<br /> 2024</h4>                     
                            
        </div>   
        </section>


        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Sponsors</h4>
   
      </div>
      <div className = 'ml-[-2.9rem] pt-[2.8rem] flex space-x-4'>
            
      <button className='bg-green-200  w-[70%] rounded-[5px] h-[2rem] px-[.5rem] text-[12px] font-medium text-green-600'>Approve</button>
      <button className='bg-red-200  w-[70%] rounded-[5px] h-[2rem] px-[.5rem] text-[12px] font-medium text-red-600'>Reject</button>
   
        </div>   
        </section>
    </div>

    <div className = "h-[8rem] w-[100%] bg-white   my-[1.5rem] flex justify-between px-[1rem] py-[.5rem]">
   <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Project Name/creator</h4>
        <span className =" "><VscProject className ="bg-blue-500 text-[4.5rem] p-5 text-white rounded-[8px]" />
  </span>
      </div>
      <div className = 'ml-[-2.9rem] pt-[2.8rem]'>
        <h4 className = 'text-[14px] font-medium text-slate-600'>Project Name/creator</h4>                     
        <h4 className = 'text-[12px] capitalize text-slate-400'>By peter johnson</h4>                     
        </div>   
        </section>

        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Members</h4>
        <span className =" ">
        <div className = 'flex mt-[1.5rem]'>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-1rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-1rem] bg-slate-400 rounded-full'></div>
        </div>
  </span>
      </div>
     
        </section>

        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Sponsors</h4>
        <span className =" ">
        <div className = 'flex mt-[1.5rem]'>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-2.2rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
        </div>
  </span>
      </div>
    
        </section>


        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Date <br />Created</h4>
  
      </div>
      <div className = 'ml-[-2.9rem] pt-[3rem]'>
        <h4 className = 'text-[14px] font-medium text-slate-600'>June 2,<br /> 2024</h4>                     
                            
        </div>   
        </section>


        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Sponsors</h4>
   
      </div>
      <div className = 'ml-[-2.9rem] pt-[2.8rem] flex space-x-4'>
            
      <button className='bg-green-200  w-[70%] rounded-[5px] h-[2rem] px-[.5rem] text-[12px] font-medium text-green-600'>Approve</button>
      <button className='bg-red-200  w-[70%] rounded-[5px] h-[2rem] px-[.5rem] text-[12px] font-medium text-red-600'>Reject</button>
   
        </div>   
        </section>
    </div>


    <div className = "h-[8rem] w-[100%] bg-white   my-[1.5rem] flex justify-between px-[1rem] py-[.5rem]">
   <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Project Name/creator</h4>
        <span className =" "><VscProject className ="bg-blue-500 text-[4.5rem] p-5 text-white rounded-[8px]" />
  </span>
      </div>
      <div className = 'ml-[-2.9rem] pt-[2.8rem]'>
        <h4 className = 'text-[14px] font-medium text-slate-600'>Project Name/creator</h4>                     
        <h4 className = 'text-[12px] capitalize text-slate-400'>By peter johnson</h4>                     
        </div>   
        </section>

        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Members</h4>
        <span className =" ">
        <div className = 'flex mt-[1.5rem]'>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-1rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-1rem] bg-slate-400 rounded-full'></div>
        </div>
  </span>
      </div>
     
        </section>

        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Sponsors</h4>
        <span className =" ">
        <div className = 'flex mt-[1.5rem]'>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-2.2rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
        </div>
  </span>
      </div>
    
        </section>


        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Date <br />Created</h4>
  
      </div>
      <div className = 'ml-[-2.9rem] pt-[3rem]'>
        <h4 className = 'text-[14px] font-medium text-slate-600'>June 2,<br /> 2024</h4>                     
                            
        </div>   
        </section>


        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Sponsors</h4>
   
      </div>
      <div className = 'ml-[-2.9rem] pt-[2.8rem] flex space-x-4'>
            
      <button className='bg-green-200  w-[70%] rounded-[5px] h-[2rem] px-[.5rem] text-[12px] font-medium text-green-600'>Approve</button>
      <button className='bg-red-200  w-[70%] rounded-[5px] h-[2rem] px-[.5rem] text-[12px] font-medium text-red-600'>Reject</button>
   
        </div>   
        </section>
    </div>


    <div className = "h-[8rem] w-[100%] bg-white   my-[1.5rem] flex justify-between px-[1rem] py-[.5rem]">
   <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Project Name/creator</h4>
        <span className =" "><VscProject className ="bg-blue-500 text-[4.5rem] p-5 text-white rounded-[8px]" />
  </span>
      </div>
      <div className = 'ml-[-2.9rem] pt-[2.8rem]'>
        <h4 className = 'text-[14px] font-medium text-slate-600'>Project Name/creator</h4>                     
        <h4 className = 'text-[12px] capitalize text-slate-400'>By peter johnson</h4>                     
        </div>   
        </section>

        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Members</h4>
        <span className =" ">
        <div className = 'flex mt-[1.5rem]'>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-1rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-1rem] bg-slate-400 rounded-full'></div>
        </div>
  </span>
      </div>
     
        </section>

        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Sponsors</h4>
        <span className =" ">
        <div className = 'flex mt-[1.5rem]'>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-2.2rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
        </div>
  </span>
      </div>
    
        </section>


        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Date <br />Created</h4>
  
      </div>
      <div className = 'ml-[-2.9rem] pt-[3rem]'>
        <h4 className = 'text-[14px] font-medium text-slate-600'>June 2,<br /> 2024</h4>                     
                            
        </div>   
        </section>


        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Sponsors</h4>
   
      </div>
      <div className = 'ml-[-2.9rem] pt-[2.8rem] flex space-x-4'>
            
      <button className='bg-green-200  w-[70%] rounded-[5px] h-[2rem] px-[.5rem] text-[12px] font-medium text-green-600'>Approve</button>
      <button className='bg-red-200  w-[70%] rounded-[5px] h-[2rem] px-[.5rem] text-[12px] font-medium text-red-600'>Reject</button>
   
        </div>   
        </section>
    </div>


    <div className = "h-[8rem] w-[100%] bg-white   my-[1.5rem] flex justify-between px-[1rem] py-[.5rem]">
   <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Project Name/creator</h4>
        <span className =" "><VscProject className ="bg-blue-500 text-[4.5rem] p-5 text-white rounded-[8px]" />
  </span>
      </div>
      <div className = 'ml-[-2.9rem] pt-[2.8rem]'>
        <h4 className = 'text-[14px] font-medium text-slate-600'>Project Name/creator</h4>                     
        <h4 className = 'text-[12px] capitalize text-slate-400'>By peter johnson</h4>                     
        </div>   
        </section>

        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Members</h4>
        <span className =" ">
        <div className = 'flex mt-[1.5rem]'>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-1rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-1rem] bg-slate-400 rounded-full'></div>
        </div>
  </span>
      </div>
     
        </section>

        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Sponsors</h4>
        <span className =" ">
        <div className = 'flex mt-[1.5rem]'>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500 ml-[-2.2rem] border-2 bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
          <div className= 'w-[2.9rem] h-[2.9rem] border-blue-500  border-2 ml-[-2.2rem] bg-slate-400 rounded-full'></div>
        </div>
  </span>
      </div>
    
        </section>


        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Date <br />Created</h4>
  
      </div>
      <div className = 'ml-[-2.9rem] pt-[3rem]'>
        <h4 className = 'text-[14px] font-medium text-slate-600'>June 2,<br /> 2024</h4>                     
                            
        </div>   
        </section>


        <section className = 'flex'>
      <div>
        <h4 className = 'mb-[.8rem] text-[14px] font-medium text-slate-600'>Sponsors</h4>
   
      </div>
      <div className = 'ml-[-2.9rem] pt-[2.8rem] flex space-x-4'>
            
      <button className='bg-green-200  w-[70%] rounded-[5px] h-[2rem] px-[.5rem] text-[12px] font-medium text-green-600'>Approve</button>
      <button className='bg-red-200  w-[70%] rounded-[5px] h-[2rem] px-[.5rem] text-[12px] font-medium text-red-600'>Reject</button>
   
        </div>   
        </section>
    </div>
    </section>


    {/* pending pagination */}

    <div className = "h-[5rem] w-[100%] bg-white   my-[1.5rem]  px-[1rem] py-[.5rem]">
   <section className = 'flex justify-center space-x-4 pt-[1rem]'>
   <span className='pt-1'><IoIosArrowDropleftCircle  className = ' bg-indigo-900 text-white rounded-full text-[1.4rem]'/></span>

   <div className = ' h-[2rem] rounded-[10px] px-[.7rem] py-[.2rem] border-2 border-indigo-900 bg-indigo-900 text-white'>1</div>
   <div className = ' w-[2rem] h-[2rem] rounded-[10px] px-[.7rem] py-[.2rem] border-2 border-indigo-900'>2</div>
   <div className = ' w-[2rem] h-[2rem] rounded-[10px] px-[.7rem] py-[.2rem] border-2 border-indigo-900'> 3</div>
   <div className = ' w-[2rem] h-[2rem] rounded-[10px] px-[.7rem] py-[.2rem] border-2 border-indigo-900'>4</div>
   <div className = ' w-[2rem] h-[2rem] rounded-[10px] px-[.7rem] py-[.2rem] border-2 border-indigo-900'>5</div>
   <span className='pt-1'><IoIosArrowDroprightCircle className = ' bg-indigo-900 text-white rounded-full text-[1.4rem]' /></span>
        </section>

      
       


        

    </div>
</section>

</main>

    
    </>
  )
}

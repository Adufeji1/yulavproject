
"use client";

import { useState } from "react";
import Link from "next/link";
import { PiEyeBold, PiBookmark, PiBookmarkBold } from "react-icons/pi";

const PageLinks = () => {
    const [pgl, setPgl] = useState(false);

    const linkFunc = ()=>{
        setPgl(!pgl)
    }

    const linkObj = [
        {name: "Home", "link": "/"},
        {name: "Course Home", "link": "/course-pages"},
        {name: "Course Detail", link: "/course-pages/detail"},
        {name: "Registration", link: "/auth/register"},
        {name: "Login", link: "/auth/login"},
        {name: "Activation", link: "/auth/activate"},
        {name: "Contact Us", link: "/contact-us"},
        {name: "Admin", link: "/admin"},
        {name: "Team", link: "/treasure/teams"},
    ]
    
  return (
    <>
        {pgl ? 
            <div className={`dark:text-gray-900 duration-75 w-full bg-black/20 backdrop-blur-sm ${pgl ? 'h-screen overflow-auto' : 'h-0 overflow-hidden'} fixed z-50 flex justify-end`}>
                <h2 className="p-2 bg-slate-200 h-fit flex-1 m-1 text-center mx-2 shadow font-extrabold shadow-slate-700">Pages Done</h2>
                <button onClick={linkFunc} className="self-start my-2 mb-7 bg-red-700 text-slate-50 dark:text-gray-900 w-fit p-2 text-xl shadow shadow-slate-700 rounded float-right mx-4 hover:bg-slate-600">
                    <PiEyeBold className="hover:scale-105" />
                </button>
                {/* LINK SIDE */}
                <div className="link-bar backdrop-blur-sm flex flex-col gap-1 bg-slate-500/20 mt-4 w-72 shadow shadow-slate-700 rounded h-[80vh] p-2">
                    {/* MAPPING */}
                    {linkObj.map((item, index)=>{
                        return(   
                            <Link href={item.link} key={index} >
                                <div className="w-full h-12 font-semibold bg-slate-200 rounded-md border-b-2 border-black/70 shadow-md shadow-black/30 items-center flex gap-2 p-2">
                                    <PiBookmarkBold className="text-2xl" />
                                    <h2>{item.name}</h2>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div> :
            <div className={`duration-75 w-full h-screen pointer-events-none fixed z-50 flex justify-end`}>
                <button onClick={linkFunc} className="pointer-events-auto self-end my-2 mb-7 bg-stone-300 text-gray-900 w-fit p-2 text-xl shadow shadow-slate-700 rounded float-right mx-4 hover:bg-slate-600">
                    <PiEyeBold className="hover:scale-105" />
                </button>
            </div>
        }
    </>
  )
}

export default PageLinks;

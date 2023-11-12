'use client'
import {useState} from 'react'
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";

import GradientBtn from "@/components/ui/GradientBtn";
import OutlineGradientBtn from "@/components/ui/OutlineGradientBtn";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import NavLinks from './NavLinks';

const Switches = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
        <div className="flex gap-3">
            <div className="flex text-2xl md:text-3xl">
                <ThemeSwitcher />
                <HiOutlineMenuAlt3
                    className="cursor-pointer hidden max-1000px:flex dark:text-white text-black"
                    onClick={() => setOpenSidebar(true)}
                />
                {/* <HiOutlineUserCircle
                    className="cursor-pointer dark:text-white text-black"
                    onClick={() => setOpen(true)}
                /> */}
            </div>
            <div className='flex gap-5 max-1000px:hidden'>
                <OutlineGradientBtn style={'px-5'} link={'/auth/login'}>
                    <h2>Login</h2>
                </OutlineGradientBtn>
                <GradientBtn style={'px-5'} link={'/auth/register'}>
                    <h2>Create account</h2>
                </GradientBtn>
            </div>
        </div>
        {openSidebar && (
          <div
            className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024] backdrop-blur-sm"
            onClick={() => setOpenSidebar(false)}
            id="screen"
          >
            <div className="w-[80%] sm:w-[70%] fixed z-[999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0 flex flex-col justify-between">
                <div className="flex flex-col gap-9">
                    <NavLinks isMobile={true} />
                    {/* <HiOutlineUserCircle
                        size={25}
                        className="cursor-pointer ml-5 my-2 dark:text-white text-black"
                        onClick={() => setOpen(true)}
                    /> */}
                    <div className='flex gap-2 sm:gap-5 mx-1 items-center justify-center'>
                        <OutlineGradientBtn style={'w-[130px] text-sm font-medium sm:text-lg sm:w-[200px] flex justify-center'} link={'/auth/login'}>
                            <h2>Login</h2>
                        </OutlineGradientBtn>
                        <GradientBtn style={'w-[130px] text-sm font-medium sm:text-lg sm:w-[200px] flex justify-center'} link={'/auth/register'}>
                            <h2>Create account</h2>
                        </GradientBtn>
                    </div>
                </div>
              <p className="text-[16px] px-2 pl-5 text-black dark:text-white mb-10 text-center uppercase font-semibold">
                <hr /><br />
                <ThemeSwitcher /> <br />
                Copyright 2023 Yulav
              </p>
            </div>
          </div>
        )}
    </>
  )
}

export default Switches
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import NavLinks from "@/components/Headers/dispatch/NavLinks"
import Switches from "@/components/Headers/dispatch/Switches"

const LandingHeader = () => {
  return (
    <div className="h-24 flex items-center gap-10 justify-between px-5 shadow-sm shadow-slate-700/30 sticky top-0 backdrop-blur-2xl z-50">
        <div className="logo">
            <Link href={"/"}>
                <div className="flex items-center gap-1">
                    <div className="relative w-7 h-7">
                        <Image
                            src="/logo.png"
                            layout="fill"
                            objectFit="contain"
                            alt=""
                        />
                    </div>
                    <h2 className="text-xl font-Poppins font-[500] text-black dark:text-white">
                        yulav.io
                    </h2>
                </div>
            </Link>
        </div>

        {/* NAV LINKS */}
        <NavLinks />

        {/* SWITCHES */}
        <Switches />
    </div>
  )
}

export default LandingHeader
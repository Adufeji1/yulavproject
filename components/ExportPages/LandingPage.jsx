'use client'
import Image from "next/image";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import "@/app/course-pages/courseAll.css";
import { MdVerifiedUser } from "react-icons/md";
import { PiCodesandboxLogoDuotone } from "react-icons/pi";
import { AiOutlineTeam } from "react-icons/ai";

import GradientBtn from "../ui/GradientBtn";
import OutlineGradientBtn from "../ui/OutlineGradientBtn";
import Sponsor from "./clientSetion/Sponsor"
import ReviewCard from "./clientSetion/ReviewCard"
import Arrow from '../../public/arrow';
import LandingHeader from "@/components/Headers/LandingHeader"
import Footer from "@/components/Footer"


const LandingPage = () =>{
    return(
        <div className="min-h-screen text-gray-900 dark:text-slate-50">
            {/* HEADER */}
            <LandingHeader />

            {/* HERO SECTION */}
            <div className="sm:container gap-4 py-7 px-3 flex justify-evenly items-center md:px-7">
                {/* TEXT AREA */}
                <div className="hero-text flex flex-col gap-5 w-full sm:w-auto">
                    <h2 className="text-2xl sm:text-4xl md:text-4xl font-semibold">
                        Unleash Your{" "}
                        <span className="text-[#3c75d0]">
                            Curiosity
                        </span>
                        , Embrace Limitless
                        <span className="text-[#3c75d0]"> Learning!</span>
                    </h2>
                    <div className="text-lg flex flex-col gap-5">
                        <p>Habitasse ullamcorper morbi feugiat mattis sollicitudin maecenas.</p>
                        <div className="flex flex-col gap-1 font-medium">
                            <div className="relative w-36 h-10">
                                <Image src="/Group 2.png" alt="" contain fill />
                            </div>
                            <p className="font-Josefin">
                                Over 2,000 subcribers
                            </p>
                        </div>
                    </div>
                    <GradientBtn style={'p-2 sm:p-3 font-medium cursor-pointer'}>
                        <h2>How it works</h2><BsFillArrowRightCircleFill />
                    </GradientBtn>
                </div>
                {/* HERO IMAGE */}
                <div className="h-96 w-3/4 hidden md:flex gradientBorder overflow-hidden items-center justify-center">
                    <div className="relative w-[95%] h-[95%]">
                        <Image
                            src="/hero.png"
                            layout="fill"
                            objectFit="cover"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            {/* SPONSORS */}
            <Sponsor />

            {/* ACHIEVEMENTS */}
            <div className="container flex-wrap md:flex-nowrap flex text-lg sm:text-2xl gap-5 justify-evenly text-center p-4 py-5">
                <div className="flex flex-col items-center justify-center gap-3">
                    <MdVerifiedUser className="cursor-pointer text-[#57388E]" />
                    <h2>25+</h2>
                    <p className="text-lg text-gray-900 dark:text-slate-300">Brands that we have collaborated with</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                    <PiCodesandboxLogoDuotone className="cursor-pointer text-[#57388E]" />
                    <h2>30+</h2>
                    <p className="text-lg text-gray-900 dark:text-slate-300">Projects delivered successfully</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-3">
                    <AiOutlineTeam className="cursor-pointer text-[#57388E]" />
                    <h2>47+</h2>
                    <p className="text-lg text-gray-900 dark:text-slate-300">Brands that we have collaborated with</p>
                </div>
            </div>

            {/* OFFER PROPOSAL */}
            <div className="sm:container gap-4 py-7 px-3 md:px-7">
                <div className="text-xl flex item-center gap-2 my-3">
                    {/* <Arrow /> */}
                    <h2>What we offer</h2>
                </div>
                {/* OFFER SECTION */}
                <div className="sm:container gap-4 flex justify-evenly items-center flex-row-reverse flex-wrap md:flex-nowrap">
                    {/* TEXT AREA */}
                    <div className="hero-text flex flex-col gap-5">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                            Building the future of Brands
                        </h2>
                        <div className="text-lg flex flex-col gap-5">
                            <p>Habitasse ullamcorper morbi feugiat mattis sollicitudin maecenas.</p>
                        </div>
                        <OutlineGradientBtn style={'p-3 font-medium cursor-pointer'}>
                            <h2>See more</h2><BsFillArrowRightCircleFill />
                        </OutlineGradientBtn>
                    </div>
                    {/* OFFER IMAGE */}
                    <div className="h-72 sm:h-96 w-full md:w-3/4 overflow-hidden flex items-center justify-center">
                        <div className="relative w-full md:w-[95%] h-[95%]">
                            <Image
                                src="/offer1.png"
                                layout="fill"
                                objectFit="cover"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:container gap-4 py-7 px-3 md:px-7">
                {/* OFFER SECTION */}
                <div className="sm:container gap-4 flex justify-evenly items-center flex-row-reverse md:flex-row flex-wrap md:flex-nowrap">
                    {/* TEXT AREA */}
                    <div className="hero-text flex flex-col gap-5">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
                            Learn. Work. Get paid.
                        </h2>
                        <div className="text-lg flex flex-col gap-5">
                            <p>Habitasse ullamcorper morbi feugiat mattis sollicitudin maecenas.</p>
                        </div>
                        <OutlineGradientBtn style={'p-3 font-medium cursor-pointer'}>
                            <h2>See more</h2><BsFillArrowRightCircleFill />
                        </OutlineGradientBtn>
                    </div>
                    {/* OFFER IMAGE */}
                    <div className="h-72 sm:h-96 w-full md:w-3/4 overflow-hidden flex items-center justify-center">
                        <div className="relative w-full md:w-[95%] h-[95%]">
                            <Image
                                src="/offer2.png"
                                layout="fill"
                                objectFit="cover"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* CUSTOMER REVIEWS */}
            <div className="sm:container gap-4 py-7 px-3">
                <div className="text-xl flex item-center gap-2 my-3">
                    {/* <Arrow /> */}
                    <h2>What our clients says about us</h2>
                </div>
                    <ReviewCard />
            </div>

            {/* FOOTER */}
            <Footer />
        </div>
    )
}

export default LandingPage;
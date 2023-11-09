'use client';
import { useState } from 'react';

import Link from "next/link";
import Image from "next/image";

import BestCourseCard from './Section/BestCourseCard';
import CourseCard from './Section/CourseCard';
import CategoryBtn from './Section/CategoryBtn';
import GradientBtn from '@/components/ui/GradientBtn';

// ICONS
import { BiSearchAlt } from "react-icons/bi"
import { BsFillArrowRightCircleFill } from "react-icons/bs";

// import image from "./unsplash.jpg";
export default function Page() {
    // CATEGORY BTNS DATA
    const [categoryBtns, setCategoryBtns] = useState([
        { title: 'Web & Mobile', id: 1 },
        { title: 'Design', id: 2 },
        { title: 'No codes', id: 3 },
        { title: 'Cyber sec', id: 4 },
        { title: 'Digital markt.', id: 5 },
        { title: 'Video & photo', id: 6 },
    ]);

    // PROGRESS BTNS
    const [activePrb, setActivePrb] = useState({
        prbId: 0
    })

    // SEARCH INPUT
    const [ courseSearch, setCourseSeaarch ] = useState("");
    return (
        <div className="Home-list bg-gray-200 text-black">
            {/* HEADER */}
            <header className="home-header flex justify-between py-4 px-3 bg-white">
                <div className="logo w-24 relative">
                    <Image src="/neo-img/logo1.png" layout="fill" objectFit="contain" alt="logo" />
                </div>
                <div className="head-links flex">
                    <div className="link flex list-none gap-3">
                        <li className='active'>
                            <Link href='/'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/'>
                                Degree
                            </Link>
                        </li>
                    </div>
                    <div className="profile-link"></div>
                </div>
            </header>

            {/* WELCOME */}
            <div className="welcome-highlight h-32 flex py-3 px-7 container m-auto">
                <div className="welcome-text md:text-4xl text-3xl font-semibold self-end text-fuchsia-800 ">
                    <h1>Welcome back. <br />Lets continue!</h1>
                </div>
            </div>

            {/* CCOURSE AREA */}
            <div className="course-area bg-slate-50 text-lg">
                <div className="container m-auto py-8 max-[680px]:px-6">
                    <div className="progression-field flex gap-12 mb-7">
                        <div className="field-info">
                            <button className='active-pg'>In Progress</button>
                        </div>
                        <div className="field-info">
                            <button>Completed</button>
                        </div>
                    </div>
                    {/* COURSES LIST */}
                    <div className="course-list grid grid-cols-4 max-lg:grid-cols-3 max-[470px]:grid-cols-1 max-md:grid-cols-2 gap-3">
                        <CourseCard />

                        {/* JUMK EXTRA */}
                        <CourseCard />
                        <CourseCard />
                    </div>
                </div>
            </div>

            {/* BEST COURSE */}
            <div className="course-area best bg-slate-50 text-lg">
                <div className="container m-auto py-8 max-[680px]:px-6">
                    <div className="progression-field flex gap-12 mb-3">
                        <h3>Our best selling courses based on reviews</h3>
                    </div>
                    {/* COURSES LIST */}
                    <div className="course-list grid grid-cols-4 max-lg:grid-cols-3 max-[470px]:grid-cols-1 max-md:grid-cols-2 gap-3">
                        <CourseCard />
                        <CourseCard />
                    </div>
                </div>
            </div>

            {/* CATEGORIES TOGGLES */}
            <div className="toggle-category">
                <div className="toggle-btn-section container m-auto p-6">
                    <h1 className='text-2xl mb-1'>Categories</h1>
                    <CategoryBtn titles={categoryBtns} />
                </div>

                {/* RENDER */}
                <div className="toggle-render m-auto bg-slate-50 p-3">
                    <div className="search-bar flex gap-2 mb-9 w-3/4 m-auto p-2 text-base items-center">
                        <div className="search-icon text-xl">
                            <BiSearchAlt />
                        </div>
                        <input onChange={(e) => {setCourseSeaarch(e.target.value)}} className='bg-transparent w-full border-none outline-none placeholder:text-gray-900 text-gray-950' type="text" placeholder='Search by topics, tutor or category' />
                    </div>

                    {/* SEARCH / TOGGLE OUTPUT */}
                    <div className="course-area text-lg container m-auto">
                        <div className="course-list grid grid-cols-4 max-lg:grid-cols-3 max-[470px]:grid-cols-1 max-md:grid-cols-2 gap-3">
                            <CourseCard/>
                            <CourseCard/>
                            <CourseCard/>
                            <CourseCard/>
                            <CourseCard/>
                            <CourseCard/>
                        </div>
                        <GradientBtn style='mx-auto my-7 p-4 font-semibold cursor-pointer'>
                            <h2 className='capitalize'>See more</h2><BsFillArrowRightCircleFill />
                        </GradientBtn>
                    </div>
                </div>
            </div>
        </div>
    )
}
'use client';
import Link from "next/link"
import { useState } from "react"
import ArticleCard from "./Section/ArticleCard";

// ICONS 
import { IoMdArrowDropleft } from "react-icons/io";
import { MdDensitySmall } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { BsBookHalf } from "react-icons/bs";


const CoursePlayTrack = ()=>{
    // COURSE SECTION
    let sectionList = [
        { lessonTitle: 'Lesson 01: Introduction', duration: '30mins', type: 'text', cutSection: [
            { subTitle: '06 Super Coins on the way', 
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi odio eaque aliquid excepturi quod adipisci dolorem laborum exercitationem placeat praesentium cupiditate facere nesciunt sit corrupti pariatur dignissimos voluptatum. Sunt dolor atque quo aspernatur inventore possimus eius ratione tempora optio?' }
        ] },
        { lessonTitle: 'Lesson 02: Sub-Section', duration: '20mins', type: 'text', cutSection: [
            { subTitle: '07 Super Coins on the way', 
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi odio eaque aliquid excepturi quod adipisci dolorem laborum exercitationem placeat praesentium cupiditate facere nesciunt sit corrupti pariatur dignissimos voluptatum. Sunt dolor atque quo aspernatur inventore possimus eius ratione tempora optio?' }
        ] },
        { lessonTitle: 'Lesson 03: Introduction', duration: '35mins', type: 'text', cutSection: [
            { subTitle: '08 Super Coins on the way', 
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi odio eaque aliquid excepturi quod adipisci dolorem laborum exercitationem placeat praesentium cupiditate facere nesciunt sit corrupti pariatur dignissimos voluptatum. Sunt dolor atque quo aspernatur inventore possimus eius ratione tempora optio?' }
        ] },
    ]
    // ACTIVE SECTION OPERATOR
    let [cardActive, setCardActive] = useState(0);

    // ACTIVE CARD DETAILS
    let activeSections = sectionList[cardActive].cutSection;
    // console.log(activeSections[0].subTitle)

    // 
    let [sideActive, setSideActive] = useState(false);

    function sectionBar(index){
        setSideActive(false)
        setCardActive(index)
    }
    
    return(
        <div className="course-playlist bg-gray-300 text-black flex">
            {/* SIDE BAR */}
            <div className={`${sideActive ? 'w-4/5' : 'w-0'} md:w-[350px] transition fixed md:relative z-50 md:z-auto side-tracker h-screen bg-white overflow-y-scroll overflow-x-hidden`}>
                <div className="back-btn sticky top-0 p-3 bg-gradient-to-l from-white to-slate-400/20 shadow-sm shadow-black/50 backdrop-blur-sm w-full h-16 left-0">
                    <div className="md:w-10 w-9 md:h-9 h-8 flex items-center justify-center md:text-3xl text-2xl bg-sky-500 rounded text-white">
                        <Link href={'../'}>⬅</Link>
                    </div>
                </div>
                
                <div className="course-play-section p-3 mt-2">
                    <div className="play-list w-full mt-2">
                        {/* SECTION SAMPLE */}
                        <div className="divided-section mb-7">
                            <h2 className="text-xl font-semibold capitalize text-gray-900 mb-1">Change simplification</h2>
                            <div className="section-card-container flex flex-col gap-2">
                                {sectionList.map((card, index)=>{
                                    return(
                                        <div key={index} onClick={()=> sectionBar(index)} className={`${cardActive == index ? "bg-blue-800 text-white shadow-sm shadow-black font-bold" : 'section-card'} flex justify-between p-2 rounded-lg text-sm w-full h-9 items-center cursor-pointer`}>
                                            <div className="sector-text items-center flex gap-1">
                                                <span><BsBookHalf/></span>
                                                <p>{card.lessonTitle}</p>
                                            </div>
                                            <div className="timer">
                                                <p>{card.duration}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        {/* QUIZ SECTION - COPY */}
                        <div className="divided-section mb-7">
                            <h2 className="text-xl font-semibold capitalize text-gray-900 mb-1">Practice Quiz</h2>
                            <div className="section-card-container flex flex-col gap-2">
                                {/* ROUGH PRINT */}
                                {/* <div className={`section-card flex justify-between p-2 rounded-lg text-sm w-full h-9 items-center cursor-pointer`}>
                                    <div className="sector-text flex gap-1">
                                        <span>📖</span>
                                        <p>card.lessonTitle</p>
                                    </div>
                                    <div className="timer">
                                        <p>card.duration</p>
                                    </div>
                                </div> */}
                                {/* JUNKS */}
                                <div className="junks">
                                    <div className={`section-card flex justify-between p-2 rounded-lg text-sm w-full h-9 items-center cursor-pointer`}>
                                        <div className="sector-text items-center flex gap-1">
                                            <span><BsBookHalf/></span>
                                            <p>Quiz 01</p>
                                        </div>
                                        <div className="timer">
                                            <p>10mins</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Close btn*/}
                <div onClick={()=> setSideActive(false)} className="close-nav cursor-pointer md:hidden block text-3xl py-2 absolute top-10 bg-slate-500 shadow-sm right-0">
                    <IoMdArrowDropleft />
                </div>
            </div>

            {/* MAIN SECTION ( PRINT OUT ) */}
            <div className={`flex-1 main-section h-screen overflow-y-scroll scroll-style`}>
                {/* TITLE HEADER */}
                <div className="course-title w-full h-28 bg-sky-700 text-white flex justify-center gap-2 p-2 px-7 flex-col sticky top-0 z-20">
                    <div className="title-container flex gap-5 items-center">
                        {/* MENU BUGER */}
                        <div onClick={()=> setSideActive(!sideActive)} className="burger text-2xl p-2 block md:hidden shadow-md shadow-black/40 bg-black/30 cursor-pointer hover:scale-105">
                            <MdDensitySmall />
                        </div>
                        {/* SEPERATOR */}
                        <div className="text-seperator flex-1">
                            <h2 className="text-2xl">Learn about Adobe XD & Prototyping</h2>
                            <div className="title-text flex justify-between text-lg p-1">
                                <p>{ sectionList[cardActive].lessonTitle }</p>
                                <p className="flex items-center gap-1"><BiTimeFive/>{ sectionList[cardActive].duration }</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* LESSON DISPLAY */}
                <div className="lesson-display">
                    <main className="p-4">
                        <div className="w-11/12 h-80 rounded-md bg-gray-400 m-auto mb-5">
                            
                        </div>
                        <div className="text-all w-11/12 m-auto flex flex-col gap-5">
                            {/* SAMPLE */}
                            {/* <div className="text-section">
                                <h2 className="font-semibold text-xl">06 Super Coins on the way</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi odio eaque aliquid excepturi quod adipisci dolorem laborum exercitationem placeat praesentium cupiditate facere nesciunt sit corrupti pariatur dignissimos voluptatum. Sunt dolor atque quo aspernatur inventore possimus eius ratione tempora optio?</p>
                            </div> */}
                            {/* JUNKS */}
                            {activeSections.map((sec, i)=>{
                                return(
                                    <div key={i} className="text-section">
                                        <h2 className="font-semibold text-xl">{ sec.subTitle }</h2>
                                        <p>{ sec.text }</p>
                                    </div>
                                )
                            })}
                            {/* <div className="text-section">
                                <h2 className="font-semibold text-xl">06 Super Coins on the way</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi odio eaque aliquid excepturi quod adipisci dolorem laborum exercitationem placeat praesentium cupiditate facere nesciunt sit corrupti pariatur dignissimos voluptatum. Sunt dolor atque quo aspernatur inventore possimus eius ratione tempora optio?</p>
                            </div>
                            <div className="text-section">
                                <h2 className="font-semibold text-xl">06 Super Coins on the way</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, animi odio eaque aliquid excepturi quod adipisci dolorem laborum exercitationem placeat praesentium cupiditate facere nesciunt sit corrupti pariatur dignissimos voluptatum. Sunt dolor atque quo aspernatur inventore possimus eius ratione tempora optio?</p>
                            </div> */}
                        </div>

                        {/* EXTRA SECTIONS */}
                        <div className="extra-container w-11/12 m-auto my-16">
                            <div className="my-2 flex justify-between">
                                <h2 className="text-xl font-semibold">Student also bought</h2>
                                <div className="control flex gap-1">
                                    <span className="w-8 h-8 rounded flex justify-center items-center bg-purple-950 text-white cursor-pointer">◀</span>
                                    <span className="w-8 h-8 rounded flex justify-center items-center bg-purple-950 text-white cursor-pointer">▶</span>
                                </div>
                            </div>
                            <div className="listing grid gap-6 grid-cols-3 max-lg:grid-cols-3 max-[470px]:grid-cols-1 max-md:grid-cols-2">
                                {/* TEMP. MANUAL LISTING */}
                                <ArticleCard />
                                <ArticleCard />
                                <ArticleCard />
                                <ArticleCard />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default CoursePlayTrack;
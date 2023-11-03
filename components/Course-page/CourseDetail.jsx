import Image from "next/image";
import Link from "next/link";

import ArticleCard from "./Section/ArticleCard";
import OfferCard from "./Section/OfferCard";

// ICON

// PiCertificateBold, AiFillStar, GiSevenPointedStar, TbFileCertificate, BiLogoFacebookCircle
import { PiWhatsappLogoFill } from "react-icons/pi";
import { AiFillStar, AiFillCamera, AiOutlineBarChart, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { GiSevenPointedStar } from "react-icons/gi";
import { BiLogoFacebookCircle, BiLogoYoutube } from "react-icons/bi";
import { TbFileCertificate } from "react-icons/tb";

const CourseDetail = ()=>{
    let image = "/neo-img/unsplash.jpg";
    return(
        <div className="course-detail bg-gray-200 text-black">
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

            {/* DETAILS SECTION */}
            <div className="detail-section pb-2 mb-9">
                <div className="course-image w-full h-64 absolute md:relative  brightness-50">
                    <Image src={image} layout="fill" objectFit="cover" alt="cover" />
                </div>

                {/* REVIEWS AND RATING */}
                <div className="course-information px-7 py-5 relative lg:w-10/12 m-auto justify-between flex-col-reverse md:block flex">
                    <div className="course-overview relative w-full md:w-2/4">
                        <h2 className="p-1 px-3 text-white font-semibold bg-sky-700 w-fit rounded mb-4">Overview</h2>
                        <div className="course-rating w-full bg-sky-700/25 rounded p-4" style={{minHeight: '24rem'}}>
                            <h1 className="font-bold text-2xl w-fit m-auto mb-7 text-gray-800">Reviews and ratings</h1>
                            <div className="rating-stars flex gap-4 items-center justify-around flex-wrap md:flex-nowrap">
                                <div className="overall-star text-lg font-semibold w-36 h-24 flex flex-col items-center justify-center rounded-md bg-white">
                                    <h2>4 out of 5</h2>
                                    <div className="star-container flex items-center gap-1 text-base text-yellow-600">
                                        <span><AiFillStar/></span>
                                        <span><AiFillStar/></span>
                                        <span><AiFillStar/></span>
                                        <span><AiFillStar/></span>
                                    </div>
                                </div>
                                {/* RATE CHART */}
                                <div className="rating-line-chart w-72">
                                    <div className="rate-term flex items-center gap-1">
                                        <h2>5</h2>
                                        <div className="rate-percent h-3 bg-sky-500 rounded-md" style={{width: '100%'}}></div>
                                    </div>
                                    
                                    <div className="rate-term flex items-center gap-1">
                                        <h2>4</h2>
                                        <div className="rate-percent h-3 bg-sky-500 rounded-md" style={{width: '70%'}}></div>
                                    </div>
                                    
                                    <div className="rate-term flex items-center gap-1">
                                        <h2>3</h2>
                                        <div className="rate-percent h-3 bg-sky-500 rounded-md" style={{width: '70%'}}></div>
                                    </div>
                                    
                                    <div className="rate-term flex items-center gap-1">
                                        <h2>2</h2>
                                        <div className="rate-percent h-3 bg-sky-500 rounded-md" style={{width: '70%'}}></div>
                                    </div>
                                    
                                    <div className="rate-term flex items-center gap-1">
                                        <h2>1</h2>
                                        <div className="rate-percent h-3 bg-sky-500 rounded-md" style={{width: '75%'}}></div>
                                    </div>
                                </div>
                            </div>
                            {/* COMMENTS */}
                            <div className="course-comments mt-10">
                                <div className="comments-list p-2 py-1 my-3">
                                    <div className="comment-ls">
                                        <hr className="border-gray-500" />
                                        <div className="top-area flex justify-between items-center my-3">
                                            <div className="user-highlight flex gap-1 items-center font-semibold text-lg">
                                                <div className="user-img w-10 h-10 rounded-3xl relative overflow-hidden">
                                                    <Image src={image} layout="fill" alt="user" objectFit="contain" />
                                                </div>
                                                <h2>Lina</h2>
                                            </div>
                                            <div className="post-date">
                                                <h2 className="capitalize text-md">3 month</h2>
                                            </div>
                                        </div>
                                        <div className="comment-text text-md text-gray-600 font-semibold">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, repudiandae!</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-fit m-auto font-semibold">
                                    <Link href="">See all comments</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* COURSE-BRIEF TAB */}
                    <div className="detail-container relative">
                        <div className="couse-m-detail bg-slate-50 w-full md:w-72 md:absolute mb-6 md:mb-0 bottom-0 right-0 p-3 rounded">
                            <div className="image-container w-full h-28 relative">
                                <Image src={image} layout="fill" objectFit="cover" alt="cover" />
                            </div>
                            <div className="pricing-info w-full">
                                <div className="price my-2 flex justify-around items-center text-lg">
                                    <h2 className="font-semibold text-xl">$49.65</h2>
                                    <h2 className="text-gray-600"><del>$99.99</del></h2>
                                    <h2 className="text-gray-600">50% off</h2>                                    
                                </div>
                                <div className="promo m-auto w-fit my-2 text-sky-500">
                                    <p>11hours left at this price</p>
                                </div>
                                <div className="buy-btn w-full flex justify-center flex-col items-center my-5">
                                    <Link className="bg-sky-600 text-slate-50 capitalize p-1 w-3/4 m-auto grid place-items-center rounded" href="">
                                        Buy now
                                    </Link>
                                </div>
                                {/* INCLUDES & OTHER */}
                                <div className="more-details font-semibold">
                                    <div className="benefits">
                                        <hr className="border-gray-500/40 my-2" />
                                        <h2 className="text-lg">This course includes:</h2>
                                        <div className="benefit-list my-2 text-sm text-gray-600 flex flex-col gap-1">
                                            <div className="list-term flex items-center">
                                                <i className="text-purple-800"><GiSevenPointedStar /></i>
                                                <p className="px-1">Money back gurantee</p>
                                            </div>
                                            <div className="list-term flex items-center">
                                                <i className="text-purple-800"><AiFillCamera /></i>
                                                <p className="px-1">Access on all devices</p>
                                            </div>
                                            <div className="list-term flex items-center">
                                                <i className="text-purple-800"><TbFileCertificate /></i>
                                                <p className="px-1">Certification of completion</p>
                                            </div>
                                            <div className="list-term flex items-center">
                                                <i className="text-purple-800"><AiOutlineBarChart /></i>
                                                <p className="px-1">32 modules</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="targets">
                                        <hr className="border-gray-500/40 my-2" />
                                        <h2 className="text-lg">Training 5 or more people</h2>
                                        <div className="my-2 text-sm text-gray-600">
                                            <p>Class launched less than a year ago Blackboard co-founder Micheal Chasen integrates exclusively...</p>
                                        </div>
                                    </div>
                                    <div className="forward-links">
                                        <hr className="border-gray-500/40 my-2" />
                                        <h2 className="text-lg">Share this course</h2>
                                        <div className="benefit-list my-2 text-lg text-gray-600 flex gap-4">
                                            <div className="list-link">
                                                <Link href="">
                                                    <i><AiFillTwitterCircle /></i>
                                                </Link>
                                            </div>
                                            <div className="list-link">
                                                <Link href="">
                                                    <i><BiLogoFacebookCircle/></i>
                                                </Link>
                                            </div>
                                            <div className="list-link text-red-700">
                                                <Link href="">
                                                    <i><BiLogoYoutube/></i>
                                                </Link>
                                            </div>
                                            <div className="list-link">
                                                <Link href="">
                                                    <i><AiFillInstagram /></i>
                                                </Link>
                                            </div>
                                            <div className="list-link">
                                                <Link href="">
                                                    <i><PiWhatsappLogoFill /></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ARTICLES SECTION */}
            <div className="m-articles px-7 py-5 relative lg:w-10/12 m-auto">
                <div className="article-header flex justify-between mb-7">
                    <h2 className="capitalize text-base font-semibold">Marketing articles</h2>
                    <Link className="text-purple-700 font-semibold" href="">See all</Link>
                </div>
                <div className="article-list p-2">
                    <div className="listing grid gap-6 grid-cols-4 max-lg:grid-cols-3 max-[470px]:grid-cols-1 max-md:grid-cols-2">
                        {/* TEMP. MANUAL LISTING */}
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                        <ArticleCard />
                    </div>
                </div>
            </div>

            {/* LEARN MORE */}
            <div className="learn-more flex items-center gap-8 justify-between px-9 py-5 md:flex-row flex-col-reverse relative lg:w-10/12 m-auto my-7">
                <div className="text-container text-left">
                    <h2 className="font-semibold text-xl">
                        <span className="text-sky-500 before:w-3 h-3 rounded-full">Everything you can do in a physical classroom, </span>
                        <span className="text-purple-900">you can do with YULAV</span>
                    </h2>
                    <div className="text-briefing text-gray-600 my-4 text-base">
                        <p className="think">
                            Think of Yulav as a supermarket where you can get everything you need. We offer
                            different sevices that help take your brand from 0 - 100!
                        </p>
                        <Link href="">
                            <p className="w-fit underline text-gray-600 mt-3">Learn more</p>
                        </Link>
                    </div>
                </div>
                <div className="image-container relative w-full h-64 rounded-2xl">
                    <Image className="rounded-2xl" src={image} layout="fill" objectFit="cover" alt="cover" />
                </div>
            </div>

            {/* OFFER SECTION */}
            <div className="e-offer px-7 py-5 relative lg:w-10/12 m-auto mt-5 pb-14">
                <div className="article-header flex justify-between mb-7">
                    <h2 className="capitalize text-base font-semibold">Education offers and deals are listed here</h2>
                    <Link className="text-purple-700 font-semibold" href="">See all</Link>
                </div>
                <div className="offer-list grid gap-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <OfferCard />
                    <OfferCard />
                    <OfferCard />
                </div>
            </div>
        </div>
    )
}

export default CourseDetail;
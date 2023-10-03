import Image from "next/image";
import Link from "next/link";


// PiCertificateBold, AiFillStar
import { PiCertificateBold } from "react-icons/pi";
import { AiFillStar, AiFillPlayCircle } from "react-icons/ai";

const BestCourseCard = ()=>{
    let image = '/neo-img/unsplash.jpg';
    let courseTitle = 'Digital marketing 101: basic concepts';
    let courseCategory = 'Digital Marketing';
    let coursePrice = '3,500';
    let courseId = 0;
    return(
        <Link href="/course-home/detail">
            <div className="course-card group cursor-pointer bg-gray-200 font-semibold hover:shadow-lg hover:shadow-slate-400 transition-all mb-2">
                <div className="image-ct h-36 overflow-hidden relative">
                    <Image className="group-hover:scale-105 transition-all" src={image} layout='fill' objectFit="cover" alt="course image" />
                    <div className="over-image absolute bg-opacity-50 bg-gray-800 h-full w-full top-0 grid place-items-center text-3xl">
                        <div className="icon">
                            <p><AiFillPlayCircle /></p>
                        </div>
                    </div>
                </div>
                <div className="course-detail p-3">
                    <h1 className='course-title mb-1 text-xl'>{courseTitle}</h1>
                    <div className="extra-detail text-gray-900">
                        <div className="course-category">
                            <h2>{courseCategory}</h2>
                        </div>
                        <div className="course-certificate flex items-center text-base gap-1">
                            <PiCertificateBold/>
                            <h2>Earn a Certificate</h2>
                        </div>
                        <div className="course-identify">
                            <h2>Course</h2>
                        </div>
                        <div className="course-rating text-yellow-600 flex gap-1 text-2xl">
                            <span><AiFillStar /></span>
                            <span><AiFillStar /></span>
                        </div>
                        <div className="course-price">
                            <h2>${coursePrice}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BestCourseCard;
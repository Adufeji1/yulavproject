import Image from "next/image";
import Link from "next/link";

// ICONS
import { PiCodesandboxLogoThin } from "react-icons/pi"
import { BiTimeFive } from "react-icons/bi"


const ArticleCard = ()=>{
    let image = '/neo-img/unsplash.jpg';
    let courseTitle = 'Digital marketing 101: basic concepts';
    let courseCategory = 'Digital Marketing';
    let coursePrice = '3,500';
    let courseId = 0;
    return(
        <Link href={`${courseId++}`}>
           <div className="article-card  capitalize p-4 rounded-lg bg-slate-50">
                <div className="article-image w-full h-32 relative overflow-hidden rounded-lg mb-2">
                    <Image src={image} layout="fill" objectFit="cover" alt="article image" />
                </div>
                <div className="article-category flex justify-between text-xs text-gray-500 font-semibold">
                    <div className="category flex gap-1">
                        <i><PiCodesandboxLogoThin /></i>
                        <p>Design</p>
                    </div>
                    <div className="timer flex gap-1">
                        <i><BiTimeFive /></i>
                        <p>3 month</p>
                    </div>
                </div>
                <div className="article-write-ups my-3 font-semibold">
                    <h1 className="capitalize text-gray-700 text-xl mb-7">AWS certified solutions architect</h1>
                    <div className="write-info">
                        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. ciunt totam eligendi.</p>
                        <div className="extra-info flex justify-between items-center mt-5">
                            <div className="author-detail flex gap-1 items-center text-lg text-gray-900 font-semibold">
                                <div className="author-image w-7 h-7 rounded-xl relative overflow-hidden">
                                    <Image src={image} layout="fill" objectFit="contain" alt="author image" />
                                </div>
                                <h2 className="capitalize">Lina</h2>
                            </div>
                            <div className="price-detail flex items-center gap-2 text-gray-600">
                                <h2><del>$80</del></h2>
                                <h1 className="text-purple-700 font-semibold text-lg">$60</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ArticleCard;
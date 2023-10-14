import Link from "next/link"

const GradientBtn = ({ text, link})=>{
    return(
        <>
        {link == null ? 
            <div className="output-navigate m-7 mx-auto w-fit">
                <button className="flex items-center gap-2 next-navigate bg-gradient-to-r from-purple-800 to-blue-500 p-4 rounded-sm text-lg font-semibold text-slate-50 hover:scale-105 transition-all">
                    {/* See more <BsFillArrowRightCircleFill /> */}
                    {text}
                </button>
            </div>
        : 
                <div className="output-navigate m-7 mx-auto w-fit">
                    <Link href={link}>
                        <button className="flex items-center gap-2 next-navigate bg-gradient-to-r from-purple-800 to-blue-500 p-4 rounded-sm text-lg font-semibold text-slate-50 hover:scale-105 transition-all">
                            {/* See more <BsFillArrowRightCircleFill /> */}
                            {text}
                        </button>
                    </Link>
                </div>
            }
        </>
    )
}

export default GradientBtn;
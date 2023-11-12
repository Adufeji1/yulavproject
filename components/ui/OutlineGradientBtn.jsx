import Link from "next/link"

const OutlineGradientBtn = ({link, children, style})=>{
    return(
        <>
        {link == null ? 
            <div className={`w-fit bg-transparent border-r-2 border-r-[#530080d3] border-l-2 border-l-[#4c00ff88] border-t-2 border-t-[#530080d3] border-b-2 border-b-[#4c00ff88] p-2 rounded-sm text-lg dark:text-slate-50 text-gray-900 hover:scale-105 transition-all ${style}`}>
                <button className={`flex items-center gap-2`}>
                    {children}
                </button>
            </div>
        : 
            <Link href={link}>
                <div className={`w-fit bg-transparent border-r-2 border-r-[#530080d3] border-l-2 border-l-[#4c00ff88] border-t-2 border-t-[#530080d3] border-b-2 border-b-[#4c00ff88] p-2 rounded-sm text-lg dark:text-slate-50 text-gray-900 hover:scale-105 transition-all ${style}`}>
                        <button className={`flex items-center gap-2`}>
                            {children}
                        </button>
                </div>
            </Link>
            }
        </>
    )
}

export default OutlineGradientBtn;
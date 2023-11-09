import Link from "next/link"

const GradientBtn = ({link, children, style})=>{
    return(
        <>
        {link == null ? 
            <div className={`w-fit bg-gradient-to-r from-purple-800 to-blue-500 p-2 rounded-sm text-lg text-slate-50 hover:scale-105 transition-all ${style}`}>
                <button className={`flex items-center gap-2`}>
                    {children}
                </button>
            </div>
        : 
                <div className={`w-fit bg-gradient-to-r from-purple-800 to-blue-500 p-2 rounded-sm text-lg text-slate-50 hover:scale-105 transition-all ${style}`}>
                    <Link href={link}>
                        <button className={`flex items-center gap-2`}>
                            {children}
                        </button>
                    </Link>
                </div>
            }
        </>
    )
}

export default GradientBtn;
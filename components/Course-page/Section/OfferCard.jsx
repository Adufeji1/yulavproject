import Image from "next/image";
import Link from "next/link";

const OfferCard = ()=>{
    let image = '/neo-img/unsplash.jpg';
    let offerId = 0;
    return(
        <Link href={`${offerId++}`}>
            <div className="bg-[url('/neo-img/unsplash.jpg')] text-white bg-cover offer-card relative overflow-hidden h-64 rounded-lg hover:shadow-2xl shadow-black">
                {/* overlay */}
                <div className="offer-overlay h-full w-full bg-black/40 p-3" style={{backdropFilter: 'blur(1px)'}}>
                    <div className="offer-cut w-12 h-11 font-semibold text-slate-50 bg-red-600/75 rounded-lg grid place-items-center">
                        <h2>50%</h2>
                    </div>
                    <div className="offer-desc">
                        <h1 className="uppercase py-2 pb-5">For instructors</h1>
                        <p>TOTC's school management software helps traditional and online schools manage scheduling.</p>
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default OfferCard;
import Image from "next/image";
import Link from "next/link";

const ReviewCard = ()=>{
    let image = '/neo-img/unsplash.jpg';
    let offerId = 0;

    const reviews = [
        {
          "name": "CEO, Africa Investments",
          "comment": "Working with yulav has been the best.",
          "image": "/review.png"
        },
        {
            "name": "Freelancer, Luxlife",
            "comment": "I would choos yulav over and over again.",
            "image": "/review2.png"
          }
      ]
      
    return(
        <div className="reviews grid grid-cols-4 max-lg:grid-cols-3 max-[470px]:grid-cols-1 max-md:grid-cols-2 gap-3">
            {reviews.map((review, index)=>{
                return(
                    <Link href={``} key={index}>
                        <div style={{background: `url(${review.image})`, backgroundSize: 'cover'}} className={` text-white bg-cover offer-card relative overflow-hidden h-60 rounded-lg hover:shadow-2xl shadow-black`}>
                            {/* overlay */}
                            <div className="offer-overlay h-full w-full bg-black/50 px-3 flex items-end">
                                <div className="offer-desc">
                                    <p className="text-xl font-semibold">{review.comment}</p>
                                    <h1 className="py-1 pb-3 font-medium text-slate-100">{review.name}</h1>
                                </div>

                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default ReviewCard;
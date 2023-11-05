// import Image from "next/image";
// import Link from "next/link";
// import React, { FC } from "react";
// import Arrow from './../public/arrow';
// import  Carousel  from "react-grid-carousel";
// import data from "./review.json";
// //import "react-grid-carousel/dist/index.css";


// type Props = {};

// const Review: FC<Props> = () => {
//   return (
//     <div id="main" className=" container mx-auto justify-center my-5  w-full relative items-center">
//       <div id="Heading" className="container flex gap-5 font-[600]  font-Josefin flex-row">
//         <Arrow/>


//         <h3 className="dark:text-white text-[2rem]">What our clients say about us</h3>

//       </div>

//     <div id="0" className="justify-center my-5  w-full  flex flex-row relative items-center">
//        {/* Generate the carous */}
//     <Carousel cols={1} rows={1} gap={10} loop autoplay={2000}>
//       {data.map((item, index) => (
//         <Carousel.Item  key={index}>
//           <div
//             className="w-64 h-64 bg-cover bg-center relative"
//             style={{ backgroundImage: `url(${item.image})` }}
//           >
//             <div className="absolute bottom-4 left-4 text-white text-shadow">
//               <h2 className="text-lg font-semibold">{item.name}</h2>
//               <p className="text-sm">{item.review}</p>
//             </div>
//           </div>
//         </Carousel.Item>
//       ))}
//     </Carousel>

//     </div>

//     </div>
//   );
// };

// export default Review;

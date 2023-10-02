import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import Arrow from './../public/arrow';

type Props = {};

const Offers: FC<Props> = () => {
  return (
    <div id="main" className=" container mx-auto justify-center my-5  w-full relative items-center">
      <div id="Heading" className="container flex gap-5 font-[600]  font-Josefin flex-row">
        <Arrow/>


        <h3 className="dark:text-white text-[2rem]">What We Offer</h3>

      </div>

    <div id="0" className="justify-center my-5  w-full  flex flex-row-reverse relative items-center">
        <div id="1" className="1000px:w-[50%] flex flex-col 1000px:mt-[0px] text-center 1000px:text-left  mt-[150px]">
          {/* Hero Text */}
          <h2 className="dark:text-white text-black text-[23px]  w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[50%]">
           Building the future of Brands
          </h2>
          <br />
          <br />
          <p className="dark:text-[#edfff4]  font-[600] text-[18] 1500px:!w-[55%] 1100px:!w-[70%]">
            Habitasse ullamcorper morbi feugiat mattis sollicitudin maecenas.
          </p>
          <br />
          <br />
          <div className="1500px:w-[55%] 1100px:w-[78%]  w-[90%] flex flex-col ">
            

          </div>
          <br />
        </div>
        <div id="2" className=" flex 1000px:w-[50%] content-left items-center justify-start place-content-center	">
          {/* Hero Image */}
          <Image
          src={require("./../public/offer1.png")}
          alt=""
          className="w-full bg-clip-content p-6   border-[#57388E]  h-[80] dark:shadow self-center	content-center items-center justify-center place-content-center"
          />  
        </div>
    </div>

    <div id="0" className="  justify-center   my-5  w-full  flex flex-row relative items-center">
        <div id="1" className="1000px:w-[50%] flex flex-col 1000px:mt-[0px] text-center 1000px:text-left  mt-[150px]">
          {/* Hero Text */}
          <h2 className="dark:text-white text-black text-[23px]  w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[50%]">
           Building the future of Brands
          </h2>
          <br />
          <br />
          <p className="dark:text-[#edfff4]  font-[600] text-[18] 1500px:!w-[55%] 1100px:!w-[70%]">
            Habitasse ullamcorper morbi feugiat mattis sollicitudin maecenas.
          </p>
          <br />
          <br />
          <div className="1500px:w-[55%] 1100px:w-[78%]  w-[90%] flex flex-col ">
            

          </div>
          <br />
        </div>
        <div id="2" className=" flex 1000px:w-[50%] content-left items-center justify-start place-content-center	">
          {/* Hero Image */}
          <Image
          src={require("./../public/offer2.png")}
          alt=""
          className="w-full bg-clip-content p-6   border-[#57388E]  h-[80] dark:shadow self-center	content-center items-center justify-center place-content-center"
          />  
        </div>
    </div>

    </div>
  );
};

export default Offers;

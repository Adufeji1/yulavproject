import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type Props = {};

const Hero: FC<Props> = () => {
  return (
    <div
      id="0"
      className="  justify-center  mx-auto my-5  w-full  flex flex-row relative items-center"
    >
      <div
        id="1"
        className="1000px:w-[50%] flex flex-col 1000px:mt-[0px] text-center 1000px:text-left  mt-[150px]"
      >
        {/* Hero Text */}
        <h2 className="dark:text-white text-black text-[30px]  w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[75px] 1500px:w-[50%]">
          Unleash Your{" "}
          <span className="text-[#3c75d0]">
            <br/>Curiosity
          </span>
          , Embrace <br/>Limitless
          <span className="text-[#3c75d0]"> Learning!</span>
        </h2>
        <br />
        <br />
        <p className="dark:text-[#edfff4]  font-[600] text-[18] 1500px:!w-[55%] 1100px:!w-[70%]">
          Habitasse ullamcorper morbi feugiat mattis sollicitudin maecenas.
        </p>
        <br />
        <br />
        <div className="1500px:w-[55%] 1100px:w-[78%]  w-[90%] flex flex-col ">
          <Image src={require("../public/Group 2.png")} alt="" className="" />
          <p className="font-Josefin dark:text-[#ffffffb3] 1000px:pl-3 text-[18px] font-[600]">
            Over 2,000 subcribers
            {/* <Link href="/courses" className="dark:text-[46e256] text-[crimson]">
              View Courses
            </Link>{" "} */}
          </p>
        </div>
        <br />
      </div>
      <div
        id="2"
        className=" flex 1000px:w-[40%] content-right items-center justify-end place-content-center	"
      >
        {/* Hero Image */}
        <Image
          src={require("../public/hero.png")}
          alt=""
          className="w-4/5 bg-clip-content p-6 border-2  border-[#57388E]  h-[80] dark:shadow self-center	content-center items-center justify-center place-content-center"
        />
      </div>
    </div>
  );
};

export default Hero;

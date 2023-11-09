import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import React, { FC } from "react";
import { MdVerifiedUser } from "react-icons/md";
import { PiCodesandboxLogoDuotone } from "react-icons/pi";
import { AiOutlineTeam } from "react-icons/ai";

type Props = {
  dark: boolean; // Pass the dark mode state as a prop
};

const Achievements: FC<Props> = ({ dark }) => {
  const { theme, setTheme } = useTheme();

  // Define a function to determine the image source based on dark mode
  const getImageSource = (imageName: string) => {
    if (theme == "dark") {
      // If in dark mode, use the white version of the image
      return require(`./../public/${imageName}-white.png`);
    } else {
      // Otherwise, use the default colored version
      return require(`./../public/${imageName}.png`);
    }
  };

  return (
    <div
      id="0"
      className="border-x-0 justify-between py-10 max-[1000px]:gap-[9px] mx-auto my-5 w-full flex max-[1000px]:flex-col relative items-center"
    >
      <div
        id="1"
        className="flex flex-col 1000px:w-[33%] content-center items-center justify-center place-content-center"
      >
        <MdVerifiedUser size={50} className="cursor-pointer  text-[#57388E]" />

        <p className="w-full h-full dark:text-white text-center text-black text-3xl font-medium	my-2	 font-Josefin break-words">
          25+
        </p>
        <p className="w-full h-full dark:text-white text-center text-black text-1xl font-normal		 font-Josefin break-words">
          Brands that we have <br></br>collaborated with
        </p>
      </div>
      <div
        id="1"
        className="flex flex-col 1000px:w-[33%] content-center items-center justify-center place-content-center"
      >
        <PiCodesandboxLogoDuotone
          size={50}
          className="cursor-pointer  text-[#57388E]"
        />

        <p className="w-full dark:text-white h-full text-center text-black text-3xl font-medium	my-2	 font-Josefin break-words">
          30+
        </p>
        <p className="w-full dark:text-white h-full text-center text-black text-1xl font-normal		 font-Josefin break-words">
          Projects delivered
          <br></br>
          successfully
        </p>
      </div>
      <div
        id="1"
        className="flex flex-col 1000px:w-[33%] content-center items-center justify-center place-content-center"
      >
        <AiOutlineTeam size={50} className="cursor-pointer  text-[#57388E]" />

        <p className="w-full h-full text-center dark:text-white text-black text-3xl font-medium	my-2	 font-Josefin break-words">
          49+
        </p>
        <p className="w-full h-full text-center text-black text-1xl font-normal dark:text-white		 font-Josefin break-words">
          Professional members<br></br>collaborated with working team
        </p>
      </div>
    </div>
  );
};

export default Achievements;

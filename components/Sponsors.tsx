import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import React, { FC } from "react";

type Props = {
  dark: boolean; // Pass the dark mode state as a prop
};

const Sponsors: FC<Props> = ({ dark }) => {
    const { theme, setTheme } = useTheme();

  // Define a function to determine the image source based on dark mode
  const getImageSource = (imageName: string) => {
    if (theme=="dark") {
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
      className="border-x-0 justify-center py-10 border-2 border-y-fuchsia-600 mx-auto my-5 w-full flex flex-row relative items-center"
    >
      <div
        id="1"
        className="flex 1000px:w-[33%] content-center items-center justify-center place-content-center"
      >
        <Image
          src={getImageSource("stanford")}
          alt=""
          className="w-[1.5] self-center content-center items-center justify-center place-content-center"
        />
      </div>
      <div
        id="2"
        className="flex 1000px:w-[33%] content-center items-center justify-center place-content-center"
      >
        <Image
          src={getImageSource("michi")}
          alt=""
          className="w-[1.5] self-center content-center items-center justify-center place-content-center"
        />
      </div>
      <div
        id="3"
        className="flex 1000px:w-[33%] content-center items-center justify-center place-content-center"
      >
        <Image
          src={getImageSource("google")}
          alt=""
          className="w-[1.5] self-center content-center items-center justify-center place-content-center"
        />
      </div>
    </div>
  );
};

export default Sponsors;

'use client'
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const Sponsor = () => {
  const { theme, setTheme } = useTheme();
  const currentmood = window.localStorage.getItem("theme")

  // Define a function to determine the image source based on dark mode
  let imgName;
  const getImageSource = (imageName) => {
    if (currentmood == "dark") {
      // If in dark mode, use the white version of the image
      imgName = `/${imageName}-white.png`;
      return imgName;
    } else {
      // Otherwise, use the default colored version
      imgName = `/${imageName}.png`;
      return imgName;
    }
    console.log(currentmood)
  };
  return (
    <div className="border-t-2 border-t-[#530080d3] border-b-2 border-b-[#4c00ff88] flex justify-evenly h-28 items-center">
        <div
            id="1"
            className="flex items-center justify-center relative w-16 sm:w-24 md:w-44 h-10"
        >
            <Image
                src={getImageSource("stanford")}
                alt=""
                objectFit="contain"
                layout="fill"
            />
        </div>

        <div
            id="2"
            className="flex items-center justify-center relative w-16 sm:w-24 md:w-44 h-10"
        >
            <Image
                src={getImageSource("michi")}
                alt=""
                objectFit="contain"
                layout="fill"
            />
        </div>
        
        <div
            id="3"
            className="flex items-center justify-center relative w-16 sm:w-24 md:w-44 h-10"
        >
            <Image
                src={getImageSource("google")}
                alt=""
                objectFit="contain"
                layout="fill"
            />
        </div>
    </div>
  )
}

export default Sponsor
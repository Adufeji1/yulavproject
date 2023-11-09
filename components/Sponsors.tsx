import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import React, { FC } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

type Props = {
  dark: boolean; // Pass the dark mode state as a prop
};

const Sponsors: FC<Props> = ({ dark }) => {
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
      style={{ display: "flex", justifyContent: "center" }}
      className="border-x-0 justify-center py-10 border-2 border-y-fuchsia-600 max-w-[1000px] mx-auto my-5 w-full relative items-center"
    >
      <Splide
        aria-label="My Favorite Images"
        options={{
          rewind: true,
          autoplay: "true",
          perPage: 3,
          perMove: "1",
          width: "100%",
          type: "loop",
          rewindSpeed: "3000",
          arrows: "false",

          pagination: "false",
          extensions: { AutoScroll },
          autoScroll: {
            speed: 1,
            pauseOnHover: true,
            pauseOnFocus: false,
          },
          breakpoints: {
            1000: {
              width: "100%",
              arrows: "false",
              perPage: 3,
            },
          },
        }}
      >
        <SplideSlide>
          <div
            id="1"
            className="flex 1000px:w-[33%] max-[1000px]:w-[20%]  content-center items-center justify-center place-content-center"
          >
            <Image
              src={getImageSource("stanford")}
              alt=""
              className="w-[1.5] self-center content-center items-center justify-center place-content-center"
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div
            id="2"
            className="flex 1000px:w-[33%] max-[1000px]:w-[20%] content-center items-center justify-center place-content-center"
          >
            <Image
              src={getImageSource("michi")}
              alt=""
              className="w-[1.5] self-center content-center items-center justify-center place-content-center"
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div
            id="3"
            className="flex 1000px:w-[33%] max-[1000px]:w-[20%] content-center items-center justify-center place-content-center"
          >
            <Image
              src={getImageSource("google")}
              alt=""
              className="w-[1.5] self-center content-center items-center justify-center place-content-center"
            />
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Sponsors;

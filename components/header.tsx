"use client"

import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import NavItems from "../app/utils/NavItems";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";

type Props = {
  activeItem: number;
  setOpen: (open: boolean) => void;
};

const Header: FC<Props> = ({ activeItem, setOpen }) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement && e.target.id === "screen") {
      setOpenSidebar(false);
    }
  };

  return (
    <div className="w-full relative">
      <div
        className={`${
          active
            ? "dark:bg-opacity-50 dark:bg-gradient-to-b bg-white  dark:from-black dark:to-black fixed top-0 left-0 w-full h-[80px] z-[80] border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
            : "w-full border-b bg-white dark:bg-gradient-to-b dark:from-black dark:to-black dark:border-[#ffffff1c] h-[80] dark:shadow"
        }`}
      >
        <div className="flex w-[95%] 800px:w-[92%] m-auto py-2 h-full">
          <div
            style={{}}
            className="flex w-full h-[80] items-center justify-between p-3"
          >
            <Link href={"/"}>
              <div className="flex items-center"> {/* Wrap both Image and span in a flex container */}
                <Image
                  src={require("./../public/logo.png")}
                  alt=""
                  className="mr-2" // Add some margin to separate the logo and text
                />
                <span className="text-[25px] font-Poppins font-[500] text-black dark:text-white">
                  Yulav
                </span>
              </div>
            </Link>

            <div className="flex items-center">
              <NavItems activeItem={activeItem} isMobile={false} />
              <ThemeSwitcher />
              {/* Only for mobile */}
              <div className="800px:hidden">
                <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer dark:text-white text-black"
                  onClick={() => setOpenSidebar(true)}
                />
              </div>
              <HiOutlineUserCircle
                size={25}
                className="cursor-pointer dark:text-white text-black"
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        </div>
        {/* mobile sidebar */}
        {openSidebar && (
          <div
            className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
            onClick={handleClose}
            id="screen"
          >
            <div className="w-[70%] fixed z-[999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
              <NavItems activeItem={activeItem} isMobile={true} />
              <HiOutlineUserCircle
                size={25}
                className="cursor-pointer ml-5 my-2 dark:text-white text-black"
                onClick={() => setOpen(true)}
              />
              <br />
              <br />
              <p className="text-[16px] px-2 pl-5 text-black dark:text-white">
                Copyright 2023 Yulav
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";
import NavItems from "../app/utils/NavItems";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { HiOutlineMenuAlt3, HiOutlineUserCircle } from "react-icons/hi";

type Props = {
  setOpen: (open: any) => void;
};

const Header: React.FC<Props> = ({ setOpen }) => {
  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="w-full relative">
      <div className="w-full border-b bg-white dark:bg-gradient-to-b dark:from-black dark:to-black dark:border-[#ffffff1c] h-[80] dark:shadow">
        <div className="flex w-[95%] 800px:w-[92%] m-auto py-2 h-full">
          <div className="flex w-full h-[80] items-center justify-between p-3">
            <div>
              <Link href={"/"}>
                <div className="flex items-center">
                  <Image
                    src={require("./../public/logo.png")}
                    alt=""
                    className="mr-2"
                  />
                  <span className="text-[25px] font-Poppins font-[500] text-black dark:text-white">
                    yulav.io
                  </span>
                </div>
              </Link>
            </div>
            <div>
              <NavItems isMobile={false} />
            </div>
            <div className="flex">
              <ThemeSwitcher />
              <HiOutlineMenuAlt3
                size={25}
                className="cursor-pointer 800px:hidden dark:text-white text-black"
                onClick={() => setOpenSidebar(true)}
              />
              <HiOutlineUserCircle
                size={25}
                className="cursor-pointer dark:text-white text-black"
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        </div>

        {openSidebar && (
          <div
            className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
            onClick={() => setOpenSidebar(false)}
            id="screen"
          >
            <div className="w-[70%] fixed z-[999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
              <NavItems isMobile={true} />
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

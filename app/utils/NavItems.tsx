import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from 'next/navigation'


export const navItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Contact Us",
    url: "/contact-us",
  },
  {
    name: "Sign Up",
    url: "/auth/register",
  },
  {
    name: "Teams",
    url: "/treasure/teams",
  },
];

type Props = {
  isMobile: boolean;
};

const NavItems: React.FC<Props> = ({ isMobile }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState(0);

  // Update active menu item based on the current route using next/navigation

  useEffect(() => {
    // Extract the route from the current URL
    const currentRoute = pathname;
    console.log(currentRoute);

    // Find the index of the active menu item based on the current route
    const activeMenuItemIndex = navItemsData.findIndex(item => item.url === currentRoute);

    // Set the activeItem state
    setActiveItem(activeMenuItemIndex);
  }, [pathname]);

  return (
    <>
      <div className="hidden md:flex">
        {navItemsData.map((item, index) => (
          <Link href={item.url} key={index} passHref>
            <span
              className={`${
                activeItem === index
                  ? "dark:text-[#57388E] decoration-4 underline-offset-8	underline text-[#57388E]"
                  : "dark:text-white text-black"
              } text-[18px] px-6 font-Poppins font-[400]`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      {isMobile && (
        <div className="md:hidden flex flex-col mt-5">
          {navItemsData.map((item, index) => (
            <Link href={item.url} key={index} passHref>
              <span
                className={`${
                  activeItem === index
                    ? "dark:text-[#4037a3] text-[crimson]"
                    : "dark:text-white text-black"
                } text-[18px] px-6 font-Poppins font-[400]`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NavItems;

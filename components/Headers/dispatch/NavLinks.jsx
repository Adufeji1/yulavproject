'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation'


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

const NavLinks = ({ isMobile }) => {
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
      <div className="flex max-1000px:hidden gap-6">
        {navItemsData.map((item, index) => (
          <Link href={item.url} key={index} passHref className="group hover:hover:scale-105">
            <span
              className={`${
                activeItem === index
                  ? "dark:text-[#57388E] decoration-4 underline-offset-4 underline text-[#57388E] group-hover:text-purple-800"
                  : "dark:text-white text-black"
              } md:text-base lg:text-lg font-Poppins font-medium group-hover:text-slate-400`
            }
            >
              {item.name}
            </span>
          </Link>
        ))}
      </div>
      {isMobile && (
        <div className="hidden max-1000px:flex flex-col mt-5 text-center gap-7">
          {navItemsData.map((item, index) => (
            <Link href={item.url} key={index} passHref>
              <h2
                className={`${
                  activeItem === index
                    ? "dark:text-[#4037a3] text-[crimson]"
                    : "dark:text-white text-black"
                } text-lg sm:text-2xl font-Poppins font-medium w-[90%]`}
              >
                {item.name}
              </h2>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NavLinks;

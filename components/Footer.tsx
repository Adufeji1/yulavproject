import React from 'react';
import Image from 'next/image';
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#57388E] from-10% to-sky-500">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="m-2 p p md:mb-0">
            <a href="#" className=" bg-white dark:bg-black flex p-3 mb-7 px-6 items-center">
            <Image
                  src={require("./../public/logo.png")}
                  alt=""
                  className="mr-2" // Add some margin to separate the logo and text
                />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Yulav
              </span>
            </a>
            <div className="flex flex-row gap-7">

            <FaFacebook
             size={20}
             className="cursor-pointer  text-[#ffffff]"
             
             />
            <FaInstagram
             size={20}
             className="cursor-pointer  text-[#ffffff]"
             
             />
            <FaTwitter
             size={20}
             className="cursor-pointer  text-[#ffffff]"
             
             />
            <FaLinkedin
             size={20}
             className="cursor-pointer  text-[#ffffff]"
             
             />
             </div>
     
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a
                    href="#"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-white font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{' '}
            <a href="#" className="hover:underline">
              Yulav™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

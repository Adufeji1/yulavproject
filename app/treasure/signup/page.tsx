"use client";
import React, { FC, useState } from "react";
import Heading from "@/app/utils/Heading";
import Header from "@/components/header";
import { AiFillFacebook } from "react-icons/ai"; // Import React Icons
import { FaGoogle } from "react-icons/fa"; // Import Google Icon from React Icons
import AuthImage from "@/components/AuthImage";

interface Props {}

const Signup: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div>
      <Heading title="signup" description="Yulav" keywords="Programming" />
      <Header open={open} setOpen={setOpen} activeItem={activeItem} />
      <section  className="h-screen flex items-center justify-center">
        <div style={{ width: "60%" }} className="md:w-1/3 w-[3rem]">
          <AuthImage />
        </div>
        <div className="md:w-[50%] max-w-sm">
          <div className="text-center md:text-left">
            <label className="mr-1">Sign in with</label>
            {/* Social Auths using React Icons */}
            <button
              type="button"
              className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
            >
              <AiFillFacebook className="mx-auto h-5 w-5" />
            </button>
            <button
              type="button"
              className="inline-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
            >
              <FaGoogle className="mx-auto h-5 w-5" />
            </button>
            {/* <button
              type="button"
              className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
            >
              <AiFillTwitter className="mx-auto h-5 w-5" />
            </button> */}
          </div>
          <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
              Or
            </p>
          </div>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
          />
          <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
              <input className="mr-1" type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a
              className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
          <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            Don't have an account?{" "}
            <a
              className="text-red-600 hover:underline hover:underline-offset-4"
              href="#"
            >
              Register
            </a>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default Signup;

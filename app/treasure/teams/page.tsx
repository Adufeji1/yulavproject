"use client";
import React, { FC, useState } from "react";
import Heading from "../../utils/Heading";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import Teams from "@/components/Teams";
const teams = [
  {
    _id: "001",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Francis Adelaja",
    position: "Founder and CEO of Yulav.io",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    _id: "001",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Francis Adelaja",
    position: "Founder and CEO of Yulav.io",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    _id: "001",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Francis Adelaja",
    position: "Founder and CEO of Yulav.io",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    _id: "001",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Francis Adelaja",
    position: "Founder and CEO of Yulav.io",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    _id: "001",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Francis Adelaja",
    position: "Founder and CEO of Yulav.io",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    _id: "001",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Francis Adelaja",
    position: "Founder and CEO of Yulav.io",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    _id: "001",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Francis Adelaja",
    position: "Founder and CEO of Yulav.io",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    _id: "001",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Francis Adelaja",
    position: "Founder and CEO of Yulav.io",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    _id: "001",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Francis Adelaja",
    position: "Founder and CEO of Yulav.io",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    _id: "001",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Francis Adelaja",
    position: "Founder and CEO of Yulav.io",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    _id: "001",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Francis Adelaja",
    position: "Founder and CEO of Yulav.io",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
  {
    _id: "001",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "Francis Adelaja",
    position: "Founder and CEO of Yulav.io",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
  },
];

const page = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div>
      <div  className="min-h-screen">

      <Header open={open} setOpen={setOpen} activeItem={activeItem} />
      <div className=" container mx-auto flex  text-center mt-9 flex-col justify-center ">
        <div className="header">
        <h4 className="font-medium text-base	 text-purple-600">The team</h4>
        <h2 className="text-5xl leading-[4rem]	font-semibold">Meet the team behind yulav.io</h2>
        <p className="font-normal	 text-xl	text-[#667085] leading-7	">
          We're a small team that loves to create great experiences and make
          meaningful <br></br>connections between builders and customers. Join
          our remote ream!
        </p>
        </div>
        <div className="card my-10">
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
        {teams.map((teams, index) => (
          <Teams
            key={index}
            _id={teams._id}
            img={teams.img}
            name={teams.name}
            position={teams.position}
            bio={teams.bio}
          />
        ))}
      </div>
        </div>
      </div>
      <Footer/>
      </div>
    </div>
  );
};

export default page;

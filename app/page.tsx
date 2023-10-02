"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "../components/header";
import Hero from "../components/Hero";
import Sponsors from "../components/Sponsors"
import Achievements from "../components/Achievements"
import Offers from "../components/Offers"
import Review from "../components/Review"
import Team from "../components/Team"
import Footer from "../components/Footer"


interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div>
      <Heading title="Yulav" description="Yulav" keywords="Programming" />
      <Header open={open} setOpen={setOpen} activeItem={activeItem} />
      <Hero />
      <Sponsors dark/>
      <Achievements dark />
      <Offers />
      <Review />
      <Team />
      <Footer />

    </div>
  );
};

export default Page;


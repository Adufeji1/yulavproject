import Image from "next/image";
import React from "react";

const AuthImage = () => {
  return (
      <div className=" ">
        <Image src={require("../public/auth.jpg")} alt="" className="" />
      </div>
  );
};

export default AuthImage;

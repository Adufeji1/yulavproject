import Image from "next/image";
import React from "react";

const AuthImage = () => {
  return (
      <div className=" ">
        <Image src={require("../public/auth.png")} alt="" className="" />
      </div>
  );
};

export default AuthImage;

import React from "react";
import { BsSuitHeartFill } from "react-icons/bs";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";

const Teams = (props:any) => {
  return (
    <div className="w-full relative group">
      <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
        <div>
          <img className="w-full h-full" src={props.img} />
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className=" items-center text-left leading-[2rem] justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {props.name}
          </h2>
          <p className="text-[#6941C6] text-[14px]">{props.position}</p>
          <p className="text-[#767676] leading-[1rem] text-[14px]">{props.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Teams;
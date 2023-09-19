import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LeftNav({ leftNavOptions }) {
  const navigate = useNavigate();
  const [nav, setNav] = useState("My Account");
  const initialText = "Hello,";
  const name = "hewlatt packart enterprise";

  const handleNav = (link, name) => {
    navigate(link);
    setNav(name);
  };

  return (
    <div className="w-[490px] bg-[#484848] relative top-[54px] h-[calc(100vh-54px)] hidden md:block ">
      <div className="pt-[24px] pl-5">
        <div className="flex">
          <div className="">
            <img
              className="h-[48px] w-[48px] rounded cursor-pointer"
              src={require("../assets/images/hp.png")}
              alt="logo"
            />
          </div>
          <div className="font-light text-[40px] text-[#FFFFFF]">
            {initialText}
          </div>
        </div>
        <div
          style={{ top: "-10px" }}
          className="font-light text-[22px] text-[#FFFFFF] relative t-[-10px] w-[240px] truncate"
        >
          {name}
        </div>
      </div>
      <div className="mt-[30px]">
        {leftNavOptions?.map(({ name, imageName, link }) => {
          console.log({ imageName });
          return (
            <div
              onClick={() => handleNav(link, name)}
              className={`cursor-pointer flex py-4 ${
                nav === name
                  ? "bg-[#313136] border-l-[5px] border-green-400"
                  : ""
              }`}
            >
              <div className="w-[20%] pl-5">
                <img
                  key={name}
                  src={require(`../assets/images/${imageName}.svg`)}
                  alt={imageName}
                />
              </div>

              <div
                className={`text-[#A2A3B7] ${
                  nav === name ? " text-[#99CA3B]" : ""
                }`}
              >
                {name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LeftNav;

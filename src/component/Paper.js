import React from "react";
import backArrow from "../assets/images/go-back-left-arrow.svg";

export default function Paper(props) {
  const {
    showBackButton = false,
    headingName = "",
    backButton,
    children,
  } = props;
  return (
    <div id="card" className="bg-[#FFFFFF] m-4">
      <div
        id="heading"
        className="flex py-2.5  pl-4 border-b-2 border-[#EBEDF2]"
      >
        {showBackButton && <img src={backArrow}></img>}
        {headingName && (
          <h1 id="heading-name" className="pl-2 text-[14px]">
            {headingName}
          </h1>
        )}
      </div>
      <div id="paper-children" className="lg:p-4">
        {children}
      </div>
    </div>
  );
}

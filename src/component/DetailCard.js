import React from "react";
import editIcon from "../assets/images/edit.svg";

const DetailCard = ({ fullName, designation, phoneNo, cardName }) => {
  return (
    <div id="detail-card" className="border-b-2 border-[#EBEDF2] lg:border-0">
      <div
        id="heading"
        className="bg-[#F8F8F8] p-[18px] flex py-4 border-1 border-[#EBEDF2] flex justify-between"
      >
        <h1 id="heading-avatar-name" className="text-base">
          {cardName}
        </h1>
        <img src={editIcon} alt="edit" />
      </div>

      <div
        id="content"
        className="lg:h-52  p-[18px] lg:border-2 border-[#EBEDF2] grid lg:grid-cols-2 gap-2"
      >
        <div>
          <h3 className="text-xs text-[#B2B2B2]">Full Name*</h3>
          <p className="text-sm text-[#404040]">{fullName}</p>
        </div>
        <div>
          <h3 className="text-xs text-[#B2B2B2]">Designation</h3>
          <p className="text-sm text-[#404040]">{designation}</p>
        </div>
        <div>
          <h3 className="text-xs text-[#B2B2B2] mt-2">Phone/Landline*</h3>
          <p className="text-sm">{phoneNo}</p>
        </div>
        <div className="flex justify-end	lg:justify-between	">
          <p className="text-sm text-[#2680EB] font-bold	">Change Password</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;

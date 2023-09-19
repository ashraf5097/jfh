import React from "react";
import editIcon from "../assets/images/edit.svg";

const ProfileCard = ({
  profileImage,
  fullName,
  designation,
  companyName,
  aboutMe,
}) => {
  return (
    <div
      id="profile-card"
      className="border-b-2 border-[#EBEDF2] mb-2 lg:border-0 "
    >
      <div
        id="heading"
        className="bg-[#F8F8F8] p-[18px] flex py-4 border-b-1 border-[#EBEDF2] flex justify-between"
      >
        <h1 id="heading-avatar-name" className="text-base">
          My Profile
        </h1>
        <img src={editIcon} alt="edit" />
      </div>

      <div
        id="content"
        className="lg:h-52 lg:border-2 border-[#EBEDF2] p-[18px]"
      >
        <div id="profile-intro" className="flex">
          <img
            className="h-[77px] w-[77px] rounded-full border-double border-4 border-[#EBEDF2]"
            src={require("../assets/images/avatar.png")}
            alt="logo"
          />
          <div id="other-detail" className="pl-3">
            <h2 className="text-[22px] mb-2">{fullName}</h2>

            <h3 className="text-xs text-[#B2B2B2]">Designation</h3>
            <p className="text-sm text-[#404040]">{designation}</p>
            <h3 className="text-xs text-[#B2B2B2] mt-2">Compnay Name</h3>
            <p className="text-sm">{companyName}</p>
          </div>
        </div>
        <div id="profile-description">
          <h3 className="text-xs text-[#B2B2B2]">About Me</h3>
          <p className="text-sm text-[#404040]">{aboutMe}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

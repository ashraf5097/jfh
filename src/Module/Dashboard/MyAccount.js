import React from "react";
import ProfileCard from "../../component/ProfileCard";
import Paper from "../../component/Paper";
import DetailCard from "../../component/DetailCard";
import SettingCard from "../../component/SettingCard";
import BreadCrumb from "../../component/BreadCrumb";
import useWindowDimensions from "../../hooks/useWindowsDimension";
import Menu from "../../component/Menu";

export const MyAccount = () => {
  const { height, width } = useWindowDimensions();

  const getVisibleColumnBasedOnWidth = (width) => {
    console.log(width);
    if (width > 640) return "medium";
    return "small";
  };

  const menuOptions = [
    { text: "My Inventory", link: "/my-inventory" },
    { text: "Company Profile", link: "/company/profile" },
    { text: "All users", link: "/all/users" },
    { text: "My Account", link: "/" },
  ];

  const breadcrumbs = [
    { text: "Dasboard", link: "/dashboard" },
    { text: "My Account", link: "/" },
  ];

  const visibleColumn = getVisibleColumnBasedOnWidth(width);
  console.log({ visibleColumn });
  return (
    <div className="relative top-[54px] h-[calc(100vh-54px)] overflow-y-scroll">
      {visibleColumn === "small" ? (
        <Menu options={menuOptions} />
      ) : (
        <BreadCrumb options={breadcrumbs} />
      )}
      <Paper showBackButton={true} headingName="My Account">
        <div className="grid">
          <div>
            <ProfileCard
              cardName="My Profile"
              profileImage="profile.jpg"
              fullName="Divya Chatterjee"
              designation="Assistant Manager - HR"
              companyName="XXY Company Name"
              aboutMe="Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge. Its mission is to empower every person and every organization on the planet to achieve more. Microsoft set up its India operations in 1990. Microsoft in India offers its global cloud services from local data centers to accelerate digital transformation across Indian start-ups, businesses, and government agencies."
            />
          </div>
          <div className="grid lg:grid-cols-2 gap-2">
            <DetailCard
              cardName="My Account Settings"
              fullName="Divya Chatterjee"
              designation="Assistant Manager - HR"
              phoneNo="7012248563"
            />
            <SettingCard cardName="Application Settings" />
          </div>
        </div>
      </Paper>
    </div>
  );
};

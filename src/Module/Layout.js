import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowsDimension";
import MenuBar from "../component/MenuBar";
import LeftNav from "../component/LeftNav";

function Layout() {
  const { height, width } = useWindowDimensions();
  const getVisibleColumnBasedOnWidth = (width) => {
    if (width > 640) return "medium";
    return "small";
  };

  const menuOptions = [
    {
      name: "Dashboard",
      link: "/",
    },
    {
      name: "Packages",
      link: "/",
    },
    {
      name: "Events",
      link: "/",
    },
    {
      name: "Blogs",
      link: "/",
    },
  ];

  const leftNavOptions = [
    {
      name: "Dashboard",
      link: "/",
      imageName: "dashboard",
    },
    {
      name: "My Inventory",
      link: "/",
      imageName: "myinventory",
    },
    {
      name: "All Users",
      link: "/",
      imageName: "allusers",
    },
    {
      name: "My Account",
      link: "/",
      imageName: "myaccount",
    },
  ];

  return (
    <div id="layout">
      <section
        id="header"
        className="h-14 drop-shadow-[0_3px_6px_#00000029] bg-[#FFFFFF] flex justify-between py-3 px-5 fixed top-0 w-full z-10"
      >
        {getVisibleColumnBasedOnWidth(width) === "small" && (
          <MenuBar menuOptions={menuOptions} />
        )}
        <div id="logo">
          <img
            className="h-[26px] cursor-pointer	"
            src={require("../assets/images/logo.png")}
            alt="logo"
          />
        </div>
        {getVisibleColumnBasedOnWidth(width) === "medium" && (
          <MenuBar size="medium" menuOptions={menuOptions} />
        )}
        <div id="avatar">
          <img
            className="h-[34px] w-[34px] rounded-full cursor-pointer"
            src={require("../assets/images/ava.png")}
            alt="logo"
          />
        </div>
      </section>
      <div className="flex">
        <LeftNav leftNavOptions={leftNavOptions} />
        <Outlet />
      </div>
      {/* <section>Footer</section> */}
    </div>
  );
}

export default Layout;

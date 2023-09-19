import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function Menu({ options }) {
  return (
    <Breadcrumbs
      separator="|"
      aria-label="breadcrumb"
      className="text-[10px] pl-4 pt-3 text-[#999999] bg-[white] p-2"
    >
      {options.map((breadcrumb, index) => (
        <Link
          underline="none"
          key={index}
          fontWeight="bold"
          // className="text-[8px]"
          color={index === options.length - 1 ? "#99CA3B" : "#999999"}
          href={breadcrumb.link}
        >
          {breadcrumb.text}
        </Link>
      ))}
    </Breadcrumbs>
  );
}

export default Menu;

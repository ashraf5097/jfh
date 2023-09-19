import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function BreadCrumb({ options }) {
  return (
    <Breadcrumbs
      className="text-[12px] pl-4 pt-3 text-[#999999]"
      separator="|"
      aria-label="breadcrumb"
    >
      {options.map((breadcrumb, index) => (
        <Link
          underline="none"
          key={index}
          //   className="text-[12px]"
          color={index === options.length - 1 ? "#2680EB" : "#999999"}
          href={breadcrumb.link}
        >
          {breadcrumb.text}
        </Link>
      ))}
    </Breadcrumbs>
  );
}

export default BreadCrumb;

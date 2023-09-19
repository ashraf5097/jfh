import React from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

export default function MenuBar({ menuOptions, size }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNavigate = (link) => {
    navigate(link);
    handleClose();
  };
  return (
    <>
      {size === "medium" ? (
        <div className="flex w-[70%]">
          {menuOptions?.map(({ name, link }) => {
            return (
              <div
                className=" mr-[20px] text-[16px] h-[22px] cursor-pointer	"
                onClick={() => handleNavigate({ link })}
              >
                {name}
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <MenuOutlinedIcon onClick={handleClick} />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {menuOptions?.map(({ name, link }) => {
              return (
                <MenuItem
                  className="cursor-pointer	"
                  onClick={() => handleNavigate({ link })}
                >
                  {name}
                </MenuItem>
              );
            })}
          </Menu>
        </>
      )}
    </>
  );
}

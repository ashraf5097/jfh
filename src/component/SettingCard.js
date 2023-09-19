import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import editIcon from "../assets/images/edit.svg";

function SettingCard({ fullName, designation, phoneNo, cardName }) {
  return (
    <div id="setting-card" className="lg:border-0 border-b-2 border-[#EBEDF2]">
      <div
        id="heading"
        className="bg-[#F8F8F8] p-[18px] flex py-4 lg:border-0 border-b-2 border-[#EBEDF2] flex justify-between"
      >
        <h1 id="heading-avatar-name" className="text-base">
          {cardName}
        </h1>
        <img src={editIcon} alt="edit" />
      </div>

      <div
        id="content"
        className="lg:h-52  p-[18px] lg:border-2 border-[#EBEDF2]"
      >
        <p className="text-[12px] text-[#B2B2B2]">
          Receive job applications via
        </p>

        <div id="radio-questions">
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Only on my dashboard"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Only on my dashboard"
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 16,
                        color: "#99CA3B",
                      },
                    }}
                  />
                }
                label="Only on my dashboard"
                sx={{
                  "& .MuiTypography-root": {
                    color: "#484848",
                    fontSize: "12px",
                  },
                }}
              />
              <FormControlLabel
                value="Email and on my dashboard"
                sx={{
                  "& .MuiTypography-root": {
                    color: "#484848",
                    fontSize: "12px",
                  },
                }}
                control={
                  <Radio
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 16,
                        color: "#99CA3B",
                      },
                    }}
                  />
                }
                label="Email and on my dashboard"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <p className="text-[12px] text-[#B2B2B2]">
          *Please note, this setting will not impact your old job postings
        </p>
      </div>
    </div>
  );
}

export default SettingCard;

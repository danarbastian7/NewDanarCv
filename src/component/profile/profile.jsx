import { Avatar, Container, Typography } from "@mui/material";
import React from "react";
import "./profile.css";
import DisplayImage from "../../assets/images/display_images.jpg";

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">Danar</Typography>
        <Typography className="title">Engineer</Typography>
      </div>
      <div className="profile_image">
        <Avatar
          alt="danar"
          src={DisplayImage}
          variant="square"
          sx={{
            width: "250px",
            height: "250px",
          }}
        />
      </div>
      <div className="profile_information">
        Insert Timeline
        <br />
        <button>Button</button>
      </div>
    </div>
  );
};
export default Profile;

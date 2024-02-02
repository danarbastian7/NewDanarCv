import { Avatar, Container, Typography } from "@mui/material";
import React from "react";
import "./profile.css";
import DisplayImage from "../../assets/images/display_images.jpg";
import CustomTimeline, { CustomTimelineSeparator } from "../timeline/timeline";
import resumeDate from "../../utils/resumeDate";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import ButtonPress from "../button/button";
import GetAppIcon from "@mui/icons-material/GetApp";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem className="timeline_firstItem">
    <CustomTimelineSeparator />
    <TimelineContent>
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeDate.name}</Typography>
        <Typography className="title">{resumeDate.title}</Typography>
      </div>
      <div className="profile_image">
        <Avatar
          alt="danar"
          src={DisplayImage}
          variant="square"
          sx={{
            width: "100%",
            height: "280px",
          }}
        />
      </div>
      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title="Name" text={resumeDate.name} />
          <CustomTimelineItem title="Title" text={resumeDate.title} />
          <CustomTimelineItem title="Email" text={resumeDate.email} />

          {Object.keys(resumeDate.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeDate.socials[key].text}
              link={resumeDate.socials[key].link}
            />
          ))}
        </CustomTimeline>
      </div>
      <br />
      <div
        className="button_container"
        style={{
          display: "flex",
        }}
      >
        <ButtonPress text={"Download CV"} icon={<GetAppIcon />} />
      </div>
    </div>
  );
};
export default Profile;

import React from "react";
import {
  TimelineConnector,
  TimelineItem,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
  TimelineSeparator,
  Timeline,
} from "@mui/lab";
import { Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import "./Timeline.css";

const CustomTimeline = ({ title, children, icon }) => {
  return (
    <Timeline className="timeline">
      <TimelineItem className="timeline_firstItem">
        <TimelineSeparator>
          <TimelineDot className="timeline_dot_header">{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className="timeline_header">
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {children}
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => (
  <TimelineSeparator className="separator_padding">
    <TimelineDot variant="outlined" className="timeline_dot" />
    <TimelineConnector />
  </TimelineSeparator>
);

export default CustomTimeline;

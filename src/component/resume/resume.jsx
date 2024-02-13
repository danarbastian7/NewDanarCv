import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./resume.css";
import resumeDate from "../../utils/resumeDate";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../component/timeline/timeline";
import WorkIcon from "@mui/icons-material/Work";
import {
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

const Resume = () => {
  return (
    <>
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <Typography variant="h6" className="section_title_text">
            About me
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {resumeDate.about}
          </Typography>
        </Grid>
      </Grid>
      {/* education and experience */}
      <Grid container className="section">
        <Grid item className="section_title mb_30">
          <span></span>
          <Typography variant="h6" className="section_title_text">
            Resume
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="resume_timeline">
            {/* Experiences */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title={"Work History"} icon={<WorkIcon />}>
                {resumeDate.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent>
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography variant="caption" className="timeline_date">
                        {experience.date}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="timeline_description"
                      >
                        {experience.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
            {/* Education */}
            <Grid item sm={12} md={6}></Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Services */}
      <Grid container className=""></Grid>
      {/* Skills */}
      <Grid container className=""></Grid>
      {/* Contact */}
      <Grid container className=""></Grid>
    </>
  );
};

export default Resume;

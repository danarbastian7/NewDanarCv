import {
  Container,
  Grid,
  Icon,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "./resume.css";
import resumeDate from "../../utils/resumeDate";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../component/timeline/timeline";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import {
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import ButtonPress from "../button/button";

const Resume = () => {
  return (
    <>
      <Grid container className="section pb_45 pt_45">
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
      <Grid container className="section top_30">
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
              <CustomTimeline title={"Work Experiences"} icon={<WorkIcon />}>
                {resumeDate.experiences.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography className="timeline_office">
                        {experience.office}
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
            <Grid item sm={12} md={6}>
              <CustomTimeline title={"Education"} icon={<SchoolIcon />}>
                {resumeDate.education.map((experience) => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className="timeline_content">
                      <Typography className="timeline_title">
                        {experience.title}
                      </Typography>
                      <Typography className="timeline_office">
                        {experience.office}
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
          </Grid>
        </Grid>
      </Grid>
      {/* Services */}
      <Grid container className="section">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">My Services</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justifyContent={"space-around"}>
            {resumeDate.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="service">
                  <Icon
                    className="service_icon"
                    style={{
                      fontSize: "46px",
                      height: "5rem",
                    }}
                  >
                    {service.icon}
                  </Icon>
                  <Typography className="service_title" variant="h6">
                    {service.title}
                  </Typography>
                  <Typography className="service_description" variant="body2">
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Skills */}
      <Grid
        container
        spacing={3}
        justifyContent={"space-between"}
        className="section graybg pb_45 p_50"
      >
        {resumeDate.skills.map((skill) => (
          <Grid item xs={12} sm="6" md="4">
            <Paper elevation={0} className="skill">
              <Typography variant="h6" className="skills_title">
                {skill.title}
              </Typography>
              {skill.description.map((element) => (
                <Typography variant="body2" className="skill_description">
                  <TimelineDot variant="outlined" className="timeline_dot" />
                  {element}
                </Typography>
              ))}
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Contact */}
      <Grid container className="section pt_45 p_30">
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Form</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="name"
                    label="Name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    name="email"
                    label="E-mail"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={12}>
                  <ButtonPress text={"Submit"} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Contact Information */}

        <Grid item xs={12} lg={5} paddingLeft={5}>
          <Grid container className="">
            <Grid container>
              <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">Contact Information</h6>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item>
                    <Typography className="contactInfo_item">
                      <span>Address: </span>
                      {resumeDate.address}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className="contactInfo_item">
                      <span>Phone: </span>
                      {resumeDate.phone}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className="contactInfo_item">
                      <span>Email: </span>
                      {resumeDate.email}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container className="contactInfo_socialsContainer">
              {Object.keys(resumeDate.socials).map((key) => (
                <Grid item className="contactInfo_social">
                  <a href={resumeDate.socials[key].link}>
                    {resumeDate.socials[key].icon}
                  </a>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;

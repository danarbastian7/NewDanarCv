import { Container, Typography } from "@mui/material";
import React from "react";
import "./footer.css";
import resumeDate from "../../utils/resumeDate";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeDate.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Developed by{" "}
          <a href="/" target="_blank">
            Danar Bastian
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;

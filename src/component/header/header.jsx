import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import resumeDate from "../../utils/resumeDate";
import ButtonPress from "../button/button";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./header.css";

const Header = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to={"/"} className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeIcon />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          {/* <Nav.Link
            as={NavLink}
            to={"/resume"}
            className={
              pathName == "/resume" ? "header_link_active" : "header_link"
            }
          >
            Resume
          </Nav.Link> */}
          <Nav.Link
            as={NavLink}
            to={"/contact"}
            className={
              pathName == "/resume" ? "header_link_active" : "header_link"
            }
          >
            {/* <a href="#contact">
            Contact me
            </a> */}
            Contact me
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resumeDate.socials).map((key) => (
            <a href={resumeDate.socials[key].link} target="_blank">
              {resumeDate.socials[key].icon}
            </a>
          ))}
          <ButtonPress text={"Hire me"} icon={<TelegramIcon />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;

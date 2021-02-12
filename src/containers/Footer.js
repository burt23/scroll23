import React from "react";
import Github from "../assets/svg/Github";
import LinkedInSVG from "../assets/svg/LinkedInSVG";
import AngelListSVG from "../assets/svg/AngelListSVG";
import MailSVG from "../assets/svg/MailSVG";

export default class Footer extends React.PureComponent {
  render() {
    return (
      <div className="footerFlexbox">
        <div className="footerItem">
          <a href="https://github.com/burt23" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
        </div>
        <div className="footerItem">
          <a href="https://linkedin.com/in/michaelburton415" target="_blank" rel="noopener noreferrer">
            <LinkedInSVG />
          </a>
        </div>
        <div className="footerItem">
          <a href="mailto:mail4mdb@gmail.com" target="_blank" rel="noopener noreferrer">
            <MailSVG />
          </a>
        </div>
        <div className="footerItem">
          <a href="https://angel.co/michael-burton-13" target="_blank" rel="noopener noreferrer">
            <AngelListSVG />
          </a>
        </div>
      </div>
    );
  }
}

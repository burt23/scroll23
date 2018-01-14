import React from "react";
import Scroll from "react-scroll";
import appText from "../assets/text/appText";

let Element = Scroll.Element;
const me =
  "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2018-01-11+at+6.52.07+PM.png";
const resumeScreenshot =
  "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2018-01-12+at+2.07.00+PM.png";
const resume =
  "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Michael+Burton+Res.pdf";

export default class About extends React.PureComponent {
  render() {
    return (
      <Element name="about" className="aboutWrapper">
        <div className="appWrapper">
          <h1 className="projectHeader">About</h1>
          <div className="aboutFlexbox">
            <div className="aboutPhoto">
              <div class="img-div">
                <img alt="mbProfilePhoto" src={me} />
              </div>
            </div>
            <div className="aboutText">
              <div className="textStyle">
                <div>{appText.about}</div>
              </div>
            </div>
          </div>

          <div className="resume">
            <a href={resume} target="_blank" rel="noopener noreferrer">
            <h2>Check out my Resume</h2>
              <img alt="Michael Burton Resume" src={resumeScreenshot} />
            </a>
          </div>
        </div>
      </Element>
    );
  }
}

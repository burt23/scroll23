import React from "react";
import Logo from "../components/logo";
import DownArrows from "../assets/svg/DownArrows";
import TypistHero from "../components/TypistHero";
import Scroll from "react-scroll";
let Link = Scroll.Link;

export default class extends React.PureComponent {
  // <Logo />
  render() {
    return (
      <div className="welcomeWrapper">
        <div className="appWrapper">
          <div className="welcomeStyle">
            <div id="welcomeLogo">
             <div class="svg-wrapper">
  <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
    <rect class="shape" height="60" width="320" />
  </svg>
   <div class="text">MICHAEL BURTON</div>
</div>
            </div>
            <span>
              <h1 className="typistHeader">Full-Stack Developer</h1>
            </span>
            <TypistHero />
          </div>
          <div>
            <Link
              to="truckHunt"
              className="scrollLink"
              spy
              offset={-50}
              smooth
              duration={500}
            >
              <DownArrows />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

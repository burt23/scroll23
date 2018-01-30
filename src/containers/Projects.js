import React from "react";
import PrivateListSVG from "../assets/svg/PrivateListSVG";
import TruckHuntSVG from "../assets/svg/TruckHuntSVG";
import WizardsChessSVG from "../assets/svg/WizardsChessSVG";
import Scroll from "react-scroll";
import WebProject from "../components/WebProject";
import appText from "../assets/text/appText";

let Element = Scroll.Element;

export default class Projects extends React.PureComponent {
  render() {
    return (
      <div className="webProjectsWrapper">
        {/* ------------------MOBILE ENERLYTICS------------------ */}
        <Element name="mobileEnerlyics" className="mobileEnerltyicsWrapper">
          <div className="appWrapper">
            <WebProject
              project={appText.mobileEnerlytics}
            />
          </div>
        </Element>
        {/* ------------------TRUCK HUNT------------------ */}
        <Element name="truckHunt" className="truckHuntWrapper">
          <div className="appWrapper">
            <WebProject
              project={appText.truckHunt}
            />
          </div>
        </Element>
        {/* ------------------WIZARDS CHESS------------------ */}
        <Element name="wizardsChess" className="wizardsChessWrapper">
          <div className="appWrapper">
            <WebProject
              project={appText.wizardsChess}
            />
          </div>
        </Element>
      </div>
    );
  }
}

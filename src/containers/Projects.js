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
            <TruckHuntSVG />
            <iframe
              title="truckHuntVideo"
              className="iframeStyles"
              src="https://www.youtube.com/embed/iVUxqjB9uu4"
              frameBorder="0"
              gesture="media"
              allowFullScreen
            />
            <WebProject
              project={appText.truckHunt}
            />
          </div>
        </Element>
        {/* ------------------WIZARDS CHESS------------------ */}
        <Element name="wizardsChess" className="wizardsChessWrapper">
          <div className="appWrapper">
            <a href="https://wizardschess.club">
              <WizardsChessSVG />
            </a>
            <WebProject
              project={appText.wizardsChess}
            />
          </div>
        </Element>
        {/* ------------------PRIVATE LIST------------------ */}
      </div>
    );
  }
}

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
      <div>
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
            tagline={appText.truckHunt.tagline}
            links={appText.truckHunt.links}
            description={appText.truckHunt.description}
            accomplishments={appText.truckHunt.accomplishments}
            github={appText.truckHunt.github}
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
            tagline={appText.wizardsChess.tagline}
            links={appText.wizardsChess.links}
            description={appText.wizardsChess.description}
            accomplishments={appText.wizardsChess.accomplishments}
            github={appText.wizardsChess.github}
          />
          </div>
        </Element>
        {/* ------------------PRIVATE LIST------------------ */}
        <Element name="privateList" className="privateListWrapper">
        <div className="appWrapper">
          <PrivateListSVG />
          <WebProject
            tagline={appText.privateList.tagline}
            description={appText.privateList.description}
            accomplishments={appText.privateList.accomplishments}
            github={appText.privateList.github}
            links={appText.privateList.links}
          />
          </div>
        </Element>
      </div>
    );
  }
}

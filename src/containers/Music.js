import React from "react";
import Scroll from "react-scroll";
import appText from "../assets/text/appText";

let Element = Scroll.Element;
const albumArt = "https://f4.bcbits.com/img/0005527348_100.png";

export default class Music extends React.PureComponent {
  render() {
    return (
      <Element name="music" className="musicWrapper">
        <div className="appWrapper">
          <div className="textStyle">
            <div>
              <h1 className="projectHeader">Music</h1>
              {appText.music}
            </div>
          </div>
          <div>
            <img src={albumArt} alt="Mottainai Album Art" />
            <iframe
              title="Mottainai"
              className="bandcampStyles"
              src="https://bandcamp.com/EmbeddedPlayer/album=2523675360/size=large/bgcol=333333/linkcol=2ebd35/tracklist=true/artwork=small/transparent=true/"
              seamless
            >
              <a href="http://dashurpa.bandcamp.com/album/mottainai">
                Mottainai by dashurpa
              </a>
            </iframe>
          </div>
        </div>
      </Element>
    );
  }
}

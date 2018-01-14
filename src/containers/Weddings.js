import React from "react";
import Gallery from "../components/Gallery";
import appText from "../assets/text/appText";
import Scroll from "react-scroll";
let Element = Scroll.Element;

export default class Weddings extends React.PureComponent {
  render() {
    return (
      <Element name="weddings" className="weddingsWrapper">
        <div className="appWrapper">
          <div className="textStyle">
            <div>
              <h1 className="projectHeader">Weddings</h1>
              {appText.weddings}
              <br />
              <a href="https://sfcityhallphoto.com">SF City Hall Photo</a>
              <br />
              <a href="mailto:mail4mdb@gmail.com">Email Me</a>
            </div>
          </div>
        </div>
        <Gallery />
      </Element>
    );
  }
}

import React from "react";
import Scroll from "react-scroll";
import MasonryGallery from "../components/MasonryGallery";
import appText from "../assets/text/appText";
let Element = Scroll.Element;

export default class Testimonials extends React.PureComponent {
  render() {
    return (
      <Element name="testimonials" className="testimonialsWrapper">
        <div className="appWrapper">
          <div className="textStyle">
            <div>
              <h1 className="projectHeader">Testimonials</h1>
              {appText.testimonials}
            </div>
          </div>
          <div>
            <MasonryGallery />
          </div>
        </div>
      </Element>
    );
  }
}

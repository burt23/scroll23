import React from "react";
import Scroll from "react-scroll";
import MasonryGallery from "../components/MasonryGallery";
let Element = Scroll.Element;

export default class Testimonials extends React.PureComponent {
  render() {
    return (
      <Element name="testimonials" className="testimonialsWrapper">
        <MasonryGallery />
      </Element>
    );
  }
}

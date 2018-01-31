import React from "react";
import Gallery from "../components/Gallery";
import appText from "../assets/text/appText";
import Scroll from "react-scroll";
import colorPhotos from '../components/colorPhotos'
import bwPhotos from '../components/bwPhotos'
import weddingPhotos from '../components/weddingPhotos'
import portraitPhotos from '../components/portraitPhotos'
import Testimonials from './Testimonials'
let Element = Scroll.Element;

export default class Photography extends React.PureComponent {
  render() {
    return (
      <Element name="photography">
        <div className="photographyWrapper">
          <div className="PWFineArt">
            <h3>Fine Art</h3>
            <div className="PWFlexrow">
              <Gallery images={colorPhotos} />
              <Gallery images={bwPhotos} />
            </div>
            <div className="PWFlexrow">
              <div className="PWFlexitem">
                <h2>{appText.photography.color.tag}</h2>
                <p>{appText.photography.color.text}</p>
              </div>
              <div className="PWFlexitem">
                <h2>{appText.photography.bw.tag}</h2>
                <p>{appText.photography.bw.text}</p>
              </div>
            </div>
          </div>
          <div className="PWWeddings">
            <h3>Weddings</h3>
            <div className="PWFlexrow">
              <Gallery images={weddingPhotos} />
              <Gallery images={portraitPhotos} />
            </div>
            <div className="PWFlexrow PWTestimonials">
              <div className="PWFlexitem">
                <h2>{appText.photography.color.tag}</h2>
                <p>{appText.photography.color.text}</p>
                <Testimonials />

              </div>
              <div className="PWFlexitem">
                <h2>{appText.photography.bw.tag}</h2>
                <p>{appText.photography.bw.text}</p>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

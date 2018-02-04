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
  constructor(){
    super();
    this.state={
      showTestimonials: false
    }
    this.toggleTestimonials = this.toggleTestimonials.bind(this)
  }

  toggleTestimonials() {
      console.log('opening Testimonials', this.state.showTestimonials)
    this.setState({
      showTestimonials: !this.state.showTestimonials
    })
  }

  render() {
  console.log('weddingPhotos', weddingPhotos[0].src)
    return (
      <Element name="photography">
      <h1 className='photographyHeader'> Photography </h1>

        <div className="photographyWrapper">




          <div className="PWWrapper">

            <h3>Fine Art</h3>

            <div className="PWFlexrow">
              <div className="PWFlexitem">
                <Gallery src={weddingPhotos[0].src} images={colorPhotos} />
                <h4>{appText.photography.color.tag}</h4>
                <p>{appText.photography.color.text}</p>
              </div>

              <div className="PWFlexitem">
                <Gallery src={weddingPhotos[0].src} images={bwPhotos} />
                  <h4>{appText.photography.bw.tag}</h4>
                  <p>{appText.photography.bw.text}</p>
              </div>
            </div>

          </div>

              
          <div className="PWWrapper">

            <h3>Weddings</h3>

            <div className="PWFlexrow">
              <div className="PWFlexitem">
                <Gallery src={weddingPhotos[0].src} images={weddingPhotos} />
                <h4>{appText.photography.weddings.tag}</h4>
                <p>{appText.photography.weddings.text}</p>
              </div>

              <div className="PWFlexitem">
                <Gallery src={weddingPhotos[0].src} images={portraitPhotos} />
                <h4>{appText.photography.engagements.tag}</h4>
                <p>{appText.photography.engagements.text}</p>
              </div>
            </div>

          </div>

        </div>

      </Element>
    );
  }
}

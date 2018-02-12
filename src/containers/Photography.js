import React from "react";
import Gallery from "../components/Gallery";
import appText from "../assets/text/appText";
import Scroll from "react-scroll";
import colorPhotos from "../components/colorPhotos";
import bwPhotos from "../components/bwPhotos.js";
import weddingPhotos from "../components/weddingPhotos";
import portraitPhotos from "../components/bwPhotos";
import testimonials from "../components/testimonials";
let Element = Scroll.Element;

export default class Photography extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      showTestimonials: false,
      bwCurrentImageIndex: 0,
      colorCurrentImageIndex: 0,
      weddingCurrentImageIndex: 0,
      portraitCurrentImageIndex: 0,
      testimonialsCurrentImageIndex: 0,
      bwIsOpen: false,
      colorIsOpen: false,
      portraitIsOpen: false,
      weddingIsOpen: false,
      testimonialsIsOpen: false,
    };
    this.toggleTestimonials = this.toggleTestimonials.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  toggleTestimonials() {
    console.log("opening Testimonials", this.state.showTestimonials);
    this.setState({
      showTestimonials: !this.state.showTestimonials
    });
  }

  openLightbox(e, obj) {
    console.log('opening lightboxIsOpen', e)
    let val = e + 'IsOpen'
    console.log('val', val)
    this.setState({
      [val]: true
    });
  }

  closeLightbox(e) {
    let val = e + 'CurrentImageIndex'
    let gal = e + 'IsOpen'

    this.setState({
      [val]: 0,
      [gal]: false
    });
  }

  gotoPrevious(e) {
    let val = e + 'CurrentImageIndex'
    let count = this.state[val] - 1 

    this.setState({
      [val]: count 
    });
  }

  gotoNext(e) {
    let val = e + 'CurrentImageIndex'
    let count = this.state[val] + 1
    this.setState({
      [val]: count 
    });
  }

  render() {
    console.log("weddingPhotos", weddingPhotos[0].src);
    console.log("bwPhotos", bwPhotos[0].src);
    return (
      <Element name="photography">
        <h1 className="photographyHeader"> Photography </h1>

        <div className="photographyWrapper">
          <div className="PWWrapper">
            <h2>Fine Art</h2>

            <div className="PWFlexrow">
              <div className="PWFlexitem">
                <Gallery
                  images={colorPhotos}
                  src={colorPhotos[0].src}
                  openLightbox={this.openLightbox}
                  onClose={this.closeLightbox}
                  onClickPrev={this.gotoPrevious}
                  onClickNext={this.gotoNext}
                  currentImage={this.state.colorCurrentImageIndex}
                  isOpen={this.state.colorIsOpen}
                  gallery='color'
                />
                <h4>{appText.photography.color.tag}</h4>
                <p>{appText.photography.color.text}</p>
              </div>

              <div className="PWFlexitem">
                <Gallery
                  images={bwPhotos}
                  src={bwPhotos[0].src}
                  openLightbox={this.openLightbox}
                  onClose={this.closeLightbox}
                  onClickPrev={this.gotoPrevious}
                  onClickNext={this.gotoNext}
                  currentImage={this.state.bwCurrentImageIndex}
                  isOpen={this.state.bwIsOpen}
                  gallery='bw'
                />
                <h4>{appText.photography.bw.tag}</h4>
                <p>{appText.photography.bw.text}</p>
              </div>
            </div>
          </div>

          <div className="PWWrapper">
            <h2>Weddings</h2>

            <div className="PWFlexrow">
              <div className="PWFlexitem">
                <Gallery
                  src={weddingPhotos[0].src}
                  images={weddingPhotos}
                  openLightbox={this.openLightbox}
                  onClose={this.closeLightbox}
                  onClickPrev={this.gotoPrevious}
                  onClickNext={this.gotoNext}
                  currentImage={this.state.weddingCurrentImageIndex}
                  isOpen={this.state.weddingIsOpen}
                  gallery='wedding'
                />
                <h4>{appText.photography.weddings.tag}</h4>
                <p>{appText.photography.weddings.text}</p>
              </div>

              <div className="PWFlexitem">
                <Gallery
                  openLightbox={this.openLightbox}
                  src={portraitPhotos[0].src}
                  images={portraitPhotos}
                  onClose={this.closeLightbox}
                  onClickPrev={this.gotoPrevious}
                  onClickNext={this.gotoNext}
                  currentImage={this.state.portraitCurrentImageIndex}
                  isOpen={this.state.portraitIsOpen}
                  gallery='portrait'   
                />
                <h4>{appText.photography.engagements.tag}</h4>
                <p>{appText.photography.engagements.text}</p>
              </div>
            </div>
              <div className='PWtestimonials'>
                <h2 
                  className='clickable'
                  onClick={()=>this.openLightbox('testimonials')}>Testimonials
                </h2>
                <Gallery
                  openLightbox={this.openLightbox}
                  // src={testimonials[0].src}
                  images={testimonials}
                  onClose={this.closeLightbox}
                  onClickPrev={this.gotoPrevious}
                  maxHeight="100px"
                  onClickNext={this.gotoNext}
                  currentImage={this.state.testimonialsCurrentImageIndex}
                  isOpen={this.state.testimonialsIsOpen}
                  gallery='testimonials'
                />
              </div>
          </div>
        </div>
        <hr className="projectDivider" />
      </Element>
    );
  }
}

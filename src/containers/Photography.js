import React from "react";
import Gallery from "../components/Gallery";
import appText from "../assets/text/appText";
import Scroll from "react-scroll";
import colorPhotos from "../components/bwPhotos";
import bwPhotos from "../components/bwPhotos.js";
import weddingPhotos from "../components/weddingPhotos";
import portraitPhotos from "../components/bwPhotos";
// import Testimonials from "./Testimonials";
let Element = Scroll.Element;

export default class Photography extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      showTestimonials: false,
      currentImageIndex: 0,
      lightboxIsOpen: false
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
  openLightbox(event, obj) {
    this.setState({
      lightboxIsOpen: true
    });
  }

  closeLightbox() {
    this.setState({
      currentImageIndex: 0,
      lightboxIsOpen: false
    });
  }

  gotoPrevious() {
    this.setState({
      currentImageIndex: this.state.currentImageIndex - 1
    });
  }

  gotoNext() {
    this.setState({
      currentImageIndex: this.state.currentImageIndex + 1
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
                  images={weddingPhotos}
                  src={weddingPhotos[0].src}
                  openLightbox={this.openLightbox}
                  onClose={this.closeLightbox}
                  onClickPrev={this.gotoPrevious}
                  onClickNext={this.gotoNext}
                  currentImage={this.state.currentImageIndex}
                  isOpen={this.state.lightboxIsOpen}
                  inputRef={el=>this.inputRef = el}
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
                  currentImage={this.state.currentImageIndex}
                  isOpen={this.state.lightboxIsOpen}
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
                  currentImage={this.state.currentImageIndex}
                  isOpen={this.state.lightboxIsOpen}
                />
                <h4>{appText.photography.weddings.tag}</h4>
                <p>{appText.photography.weddings.text}</p>
              </div>

              <div className="PWFlexitem">
                <Gallery
                  openLightbox={this.openLightbox}
                  src={weddingPhotos[0].src}
                  images={portraitPhotos}
                  onClose={this.closeLightbox}
                  onClickPrev={this.gotoPrevious}
                  onClickNext={this.gotoNext}
                  currentImage={this.state.currentImageIndex}
                  isOpen={this.state.lightboxIsOpen}
                />
                <h4>{appText.photography.engagements.tag}</h4>
                <p>{appText.photography.engagements.text}</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="projectDivider" />
      </Element>
    );
  }
}

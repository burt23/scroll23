import React from "react";
import Lightbox from "react-images";
import weddingPhotos from './weddingPhotos';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentImageIndex: 0,
      lightboxIsOpen: false,
    };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
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
    return (
      <div className='galleryWrapper'>
        <img 
        onClick={(e)=>this.openLightbox(e, this.state.currentImageIndex)}
        src={this.props.src} alt='dogecoin' />
        <Lightbox
          images={weddingPhotos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImageIndex}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}

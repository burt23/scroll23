import React from "react";
import Lightbox from "react-images";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentImageIndex: 0,
      lightboxIsOpen: false,
    };
    this.fireOpenLightbox = this.fireOpenLightbox.bind(this)
  }

  fireOpenLightbox(){
    this.props.openLightbox()
  }

  render() {
    console.log('props', this.props)
    return (
      <div className='galleryWrapper'>
        <img 
        onClick={this.fireOpenLightbox}
        src={this.props.src} alt={this.props.src} />
        <Lightbox
          images={this.props.images}
          onClose={this.props.onClose}
          onClickPrev={this.props.onClickPrev}
          onClickNext={this.props.onClickNext}
          currentImage={this.props.currentImage}
          isOpen={this.props.isOpen}
          ref={this.props.inputRef}
        />
      </div>
    );
  }
}

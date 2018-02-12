import React from "react";
import Lightbox from "react-images";

export default class App extends React.Component {
  render() {
    console.log("props", this.props);
    return (
      <div className="galleryWrapper">
        <img
          onClick={() => {
            this.props.openLightbox(this.props.gallery)
          }}
          src={this.props.src}
          alt={this.props.src}
        />
        <Lightbox
          images={this.props.images}
          onClose={()=>this.props.onClose(this.props.gallery)}
          onClickPrev={()=>this.props.onClickPrev(this.props.gallery)}
          onClickNext={()=>this.props.onClickNext(this.props.gallery)}
          currentImage={this.props.currentImage}
          isOpen={this.props.isOpen}
        />
      </div>
    );
  }
}

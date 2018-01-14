var React = require("react");
var Masonry = require("react-masonry-component");

var masonryOptions = {
  transitionDuration: 1,
  gutter: 10,
  fitWidth: "true"
  // columnWidth: 60,
};

const photos = [
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.01.56+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.02.29+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.04.58+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.05.49+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.06.05+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.06.30+AM.png"
  },
];

export default class MasonryGallery extends React.PureComponent {
  render() {
    var childElements = photos.map(photo => {
      return (
        <img
          className="masonryImage"
          key={photo.src}
          src={photo.src}
          alt={photo.src}
        />
      );
    });

    return (
      <div className='masonryWrapper'>
        <Masonry
          className="masonryGallery" // default ''
          elementType="div" // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
          {childElements}
        </Masonry>
      </div>
    );
  }
}

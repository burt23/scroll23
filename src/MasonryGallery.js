var React = require("react");
var Masonry = require("react-masonry-component");

var masonryOptions = {
  transitionDuration: 1,
  gutter: 10,
  fitWidth: 'true',
  columnWidth: 60,
};

const photos = [
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.01.56+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.02.18+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.02.40+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.02.29+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.02.50+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.03.02+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.03.17+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.03.29+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.03.40+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.04.05+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.04.17+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.04.27+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.04.38+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.04.51+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.04.58+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.05.12+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.05.22+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.05.33+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.05.40+AM.png"
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
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.06.16+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.06.30+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.06.42+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.06.59+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.07.14+AM.png"
  },
  {
    src:
      "https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2017-11-14+at+11.07.30+AM.png"
  },
];

export default class MasonryGallery extends React.Component {
  render() {
    var childElements = photos.map((photo) => {
      return (
        // <li className="masonryImage" key={photo.src}>
          <img style={{padding: '1em 0'}} className="masonryImage" key={photo.src} src={photo.src} />
        // </li>
      );
    });

    return (
      <div style={{ margin: '0 auto', width: '100vw' }}>
      <Masonry
        className={"masonryGallery"} // default ''
        elementType={"div"} // default 'div'
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


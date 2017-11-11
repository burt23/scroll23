import React from "react";
import { Parallax } from "react-parallax";
import Nav from './Nav';

const styles = {
  textAlign: "center"
};

const insideStyles = {
  background: "rgba(0,0,0,0.2)",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  color: "white"
};

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://v478pa.bn1.livefilestore.com/y2m2yJeC7UfWJ9AiIG8Lm4_K5BiN1yRU84tMlBtxQ-7Llr9oV4XYEYyr8l0j8eXPbFroKrD1f9KKjY_jURbKC5lA_rS6h6mOBZVgCeZknD6I9VAl126yEzdzPTXk0KX_Tdd/air.jpg?psid=1";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image4 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image5 =
  "https://v478pa.bn1.livefilestore.com/y2m2yJeC7UfWJ9AiIG8Lm4_K5BiN1yRU84tMlBtxQ-7Llr9oV4XYEYyr8l0j8eXPbFroKrD1f9KKjY_jURbKC5lA_rS6h6mOBZVgCeZknD6I9VAl126yEzdzPTXk0KX_Tdd/air.jpg?psid=1";
const image6 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
const image7 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image8 =
  "https://v478pa.bn1.livefilestore.com/y2m2yJeC7UfWJ9AiIG8Lm4_K5BiN1yRU84tMlBtxQ-7Llr9oV4XYEYyr8l0j8eXPbFroKrD1f9KKjY_jURbKC5lA_rS6h6mOBZVgCeZknD6I9VAl126yEzdzPTXk0KX_Tdd/air.jpg?psid=1";
const image9 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";

const App = () => (
  <div style={styles}>
   <Nav /> 
    <div style={{ height: "5vh" }} />
    <Parallax bgImage={image3} strength={500}>
      <div style={{ height: 500, display: "block" }}>
        <div style={insideStyles}>
          <h1>Weddings</h1>
        </div>
      </div>
    </Parallax>
    <div style={{ display: "flex" }}>
      <h1 style={{ padding: "1em" }}>Weddings</h1>
      <p style={{ padding: "1em", textAlign: "justify" }}>
        I feel fortunate to have had the opportunity to have shared so many
        celebrations of love, having attended dozens of weddings throughout
        Northern California. These opportities to document the moments people
        hold so dearly in different mediums such as photos, videos, and
        photobooths have given me great satisfaction in the happiness I've
        brought to people. Previously founder of
        <a href="https://sfcityhallphoto.com">SF City Hall Photo</a>
Currently booking weddings for 2018 and beyond. Please email
        me directly for serious inquiries{" "}
        <a href="mailto:mail4mdb@gmail.com">Send email to nowhere</a>
      </p>
    </div>
    <Parallax bgImage={image2} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
          <h1>fineArt</h1>
        </div>
      </div>
    </Parallax>
    <div style={{ display: "flex" }}>
      <p style={{ padding: "1em", textAlign: "justify" }}>
        Throughout my young photographic career I'm grown and transformed continually into the artist I am today. Having evoluted with new technology, and adopting the tools of the future (lightRoom, HDR, magicLantern ), I pay homage to the analog counterparts of the latest trends and tricks. This collection of fineArt photography represents the essence of whats crossed my 'eye', and is meant to spark discussion and provoke emotion deep within any audience. Works include travel, event, and night photography. All pieces are available for purchase in digital and print formats, with 50% of the proceeds going towards the global clean water initiative <a href="https://water.org">Water.org</a></p>
      <h1 style={{ padding: "1em", textAlign: "justify" }}>fineArt</h1>
    </div>
    <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
          <h1>privateList</h1>
        </div>
      </div>
    </Parallax>
    <div style={{ display: "flex" }}>
      <h1 style={{ padding: "1em", textAlign: "justify" }}>privateList</h1>
      <p style={{ padding: "1em", textAlign: "justify" }}>
       Built out as an exercise in encyrption and security, privateList has grown into a full fledged web app for sharing messages via QR codes and secure access tokens generated in the cloud. Provides an easy way to securely verify access, permissions, and user rights for any sort of private or sensitive information.  Easily upload email lists and send out QR codes to validate users quickly and securely.  Use cases include online ticket sales, digital good, coupon promo codes, and more.  
      </p>
    </div>
    <Parallax bgImage={image3} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
          <h1>wizardsChess</h1>
        </div>
      </div>
    </Parallax>
    <div style={{ display: "flex" }}>
      <p style={{ padding: "1em", textAlign: "justify" }}>
              Get ready to play the first voice controlled chess game inspired by the legendary Harry Potter books. Challenge a friend, battle yourself, or go head to head with an advanced AI.  See if you have the skills it takes to win! Game options include Single Player Mode, and Localhost (1v1), and be sure to stay tuned for the upcoming release of our multiplayer web interface.  Voice controls supported in the latest versions of Chrome, and other browsers that are adopting the native browser Speech.API().       </p>

      <h1 style={{ padding: "1em", textAlign: "justify" }}>wizardsChess</h1>
    </div>
    <Parallax bgImage={image2} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
          <h1>wineBarrelFurnature</h1>
        </div>
      </div>
    </Parallax>
    <div style={{ display: "flex" }}>
      <h1 style={{ padding: "1em", textAlign: "justify" }}>
        wineBarrelFurnature
      </h1>
      <p style={{ padding: "1em", textAlign: "justify" }}>
        The process of creating tangle goods with my hands provides such a tangle and rewarding satisfaction that it's almost feels as though I'm getting in touch with a connection from a past life.  From starting with raw materials, to disassembly, sanding, measuring, building, and finishing, the steps of building a product are paths along the journey to the destination of a finished good.  Creating practical pieces that provide value to their users and their owners is at the core of the recycled wineBarrelFurnature I've built along the years.  For a list of goods currently available for sale please <a href="mailto:mail4mdb@gmail.com">email me</a> directly.  All pieces were built at <a href="http://www.speedycreekwinery.com">speedycreekwinery</a>
      </p>
    </div>

    <Parallax bgImage={image1} strength={-100}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
          <h1>electronics</h1>
        </div>
      </div>
    </Parallax>
    <div style={{ display: "flex" }}>
      <h1 style={{ padding: "1em", textAlign: "justify" }}>Electronics</h1>
      <p style={{ padding: "1em", textAlign: "justify" }}>
        Wedding photography highlight from my former company{" "}
        <a href="https://sfcityhallphoto.com">SF City Hall Photo</a>, and other
        weddings and events throughout Northern California. Currently booking
        weddings for 2018 and beyond. Please email me directly for serious
        inquiries <a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
      </p>
    </div>
    <Parallax bgImage={image3} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
          <h1>Music</h1>
        </div>
      </div>
    </Parallax>
    <div style={{ display: "flex" }}>
      <p style={{ padding: "1em", textAlign: "justify" }}>
        voice controlled chess game inspired by the harry potter books. works on
        chrome 50+. Play single player against a challenging AI or play locally
        on your device with an opponent or against yourself. Build with React,
        Express, and the in browser google speech API
      </p>
      <h1 style={{ padding: "1em", textAlign: "justify" }}>Music</h1>
    </div>
    <Parallax bgImage={image2} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
          <h1>Testimonials</h1>
        </div>
      </div>
    </Parallax>
    <div style={{ display: "flex" }}>
      <h1 style={{ padding: "1em", textAlign: "justify" }}>Testimonials</h1>
      <p>
        voice controlled chess game inspired by the harry potter books. works on
        chrome 50+
      </p>
    </div>
    <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
          <h1>About</h1>
        </div>
      </div>
    </Parallax>

    <h2>{"\u2728"}</h2>
  </div>
);

// render(<App />, document.getElementById("root"));
export default App;

// <ul
//   style={{
//     padding: "0.5em",
//     color: "darkslategrey",
//     background: "rgba(0,255,255,.1)",
//     display: "flex",
//     justifyContent: "space-around",
//     listStyle: "none",
//     fontFamily: "arial"
//   }}
// >
//   <li>
//     <h4>Weddings</h4>
//     <br />
//     <p style={{ textAlign: "align" }}>
//       this is a whole bunch of text about weddings the graetest photogaphy
//           gigs a man could ever want yeah babay yea hbayabyaabyyba give it to me
//           girl make it swirl likefs a tootsie pop drop it like its hot can't stop
//           pock and lock and drop manke it pop you got you got you got y ougotu
//           ltel l me the truthasdfasdfasfdasdfasdf
//         </p>
//   </li>
//   <li>
//     <h4>Travel</h4>
//     <br />
//     <p>
//       this is a whole bunch of text about weddings the graetest photogaphy
//           gigs a man could ever want yeah babay yea hbayabyaabyyba give it to me
//           girl make it swirl like a tootsie pop drop it like its hot can't stop
//           pock and lock and drop manke it pop you got you got you got y ougotu
//           ltel l me the truth
//         </p>
//   </li>
//   <li>
//     <h4>Events</h4>
//     <br />
//     <p>
//       this is a whole bunch of text about weddings the graetest photogaphy
//           gigs a man could ever want yeah babay yea hbayabyaabyyba give it to me
//           girl make it swirl like a tootsie pop drop it like its hot can't stop
//           pock and lock and drop manke it pop you got you got you got y ougotu
//           ltel l me the truth
//         </p>
//   </li>
// </ul>

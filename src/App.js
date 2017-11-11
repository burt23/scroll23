// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to my online portfolio</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
// import { render } from "react-dom";
import { Parallax } from "react-parallax";
// import Hello from "./Hello";
// import ExamplePage from './word'
// import PC from "react-parallax-component";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const insideStyles = {
  background: "rgba(255,255,255,0.8)",
  fontFamily: "helvetica",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const image1 =
  "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
const image2 =
  "https://v478pa.bn1.livefilestore.com/y2m2yJeC7UfWJ9AiIG8Lm4_K5BiN1yRU84tMlBtxQ-7Llr9oV4XYEYyr8l0j8eXPbFroKrD1f9KKjY_jURbKC5lA_rS6h6mOBZVgCeZknD6I9VAl126yEzdzPTXk0KX_Tdd/air.jpg?psid=1";
const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";

const App = () => (
  <div style={styles}>
    <nav
      style={{
        position: "fixed",
        height: "5vh",
        top: 0,
        left: 0,
        width: "100vw",
        background: "rgba(0,0,0,0.8)",
        zIndex: 888,
        color: "white"
      }}
    >
      <ul
        style={{
          display: "flex",
          top: 0,
          justifyContent: "flex-end",
          fontSize: "1em",
          listStyle: "none",
          width: "100%"
        }}
      >
        <li
          style={{
            fontSize: "2em",
            flex: "1",
            alignContent: "start",
            textAlign: "left"
          }}
        >
          michaelBurton
        </li>
        <li
          style={{ flex: "0 1 auto", justifySelf: "end", padding: "0em 2em" }}
        >
          weddings
        </li>
        <li style={{ flex: "0", justifySelf: "end", padding: "0em 2em" }}>
          fineArt
        </li>
        <li style={{ flex: "0", justifySelf: "end", padding: "0em 2em" }}>
          privateList
        </li>
        <li
          style={{ flex: "0", justifySelf: "end", padding: "0em 2em 0em 0em" }}
        >
          wizardsChess
        </li>
        <li
          style={{ flex: "0", justifySelf: "end", padding: "0em 2em 0em 0em" }}
        >
          furnature
        </li>
        <li
          style={{ flex: "0", justifySelf: "end", padding: "0em 2em 0em 0em" }}
        >
          electronics
        </li>
        <li
          style={{ flex: "0", justifySelf: "end", padding: "0em 2em 0em 0em" }}
        >
          music
        </li>
        <li
          style={{ flex: "0", justifySelf: "end", padding: "0em 2em 0em 0em" }}
        >
          testimonials
        </li>
        <li
          style={{ flex: "0", justifySelf: "end", padding: "0em 2em 0em 0em" }}
        >
          about
        </li>
      </ul>
    </nav>
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
        Wedding photography highlight from my former company{" "}
        <a href="https://sfcityhallphoto.com">SF City Hall Photo</a>, and other
        weddings and events throughout Northern California. Currently booking
        weddings for 2018 and beyond. Please email me directly for serious
        inquiries <a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
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
        voice controlled chess game inspired by the harry potter books. works on
        chrome 50+. Play single player against a challenging AI or play locally
        on your device with an opponent or against yourself. Build with React,
        Express, and the in browser google speech API
      </p>
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
        voice controlled chess game inspired by the harry potter books. works on
        chrome 50+
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
        voice controlled chess game inspired by the harry potter books. works on
        chrome 50+. Play single player against a challenging AI or play locally
        on your device with an opponent or against yourself. Build with React,
        Express, and the in browser google speech API
      </p>
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
        voice controlled chess game inspired by the harry potter books. works on
        chrome 50+. Play single player against a challenging AI or play locally
        on your device with an opponent or against yourself. Build with React,
        Express, and the in browser google speech API
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

import React from "react";
import { Parallax } from "react-parallax";
import Nav from "./Nav";
import Navbar from "./Navbar";
// import TypistHero from "./TypistHero";
import Particles from "react-particles-js";
import Typist from "react-typist";
import Scroll from "react-scroll";
import params from "./particleParams.js";

let Link = Scroll.Link;
let Events = Scroll.Events;
let Element = Scroll.Element;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        "coder",
        "designer",
        "photographer",
        "musician",
        "human",
        "programmer"
      ],
      currentMessage: "coder",
      counter: 1
    };
    this.init = this.init.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  updateMessage() {
    console.log("updating messages");
    // setTimeout(this.init, 6000);
  }
  init() {
    console.log("yep", this.state.currentMessage);
    this.setState({
      currentMessage: this.state.messages[this.state.counter],
      counter:
        this.state.counter < this.state.messages.length - 1
          ? this.state.counter + 1
          : 0
    });
    this.updateMessage();
  }
  render() {
    const styles = {
      textAlign: "center"
    };

    const insideStyles = {
      background: "rgba(0,0,0,0)",
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

    const text = {
      weddings:
        'I feel fortunate to have had the opportunity to have shared so many\
            celebrations of love, having attended dozens of weddings throughout\
            Northern California. These opportities to document the moments\
            people hold so dearly in different mediums such as photos, videos,\
            and photobooths have given me great satisfaction in the happiness\
            I\'ve brought to people. Previously founder of\
            <a href="https://sfcityhallphoto.com">SF City Hall Photo</a>\
            Currently booking weddings for 2018 and beyond. Please email me\
            directly for serious inquiries{" "}\
            <a href="mailto:mail4mdb@gmail.com">Send email to nowhere</a>'
    };

    const App = () => (
      <div style={styles}>
        <Nav />
        <Navbar />
        <div>
          <Particles
            params={params}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100vh",
              width: "100vw"
            }}
          />

          <div style={{ height: "100vh", display: "block" }}>
            <div style={insideStyles}>
              {/*
              <Typist delay={8}>

                <span><h1>Hello, I'm Michael Burton</h1></span>
                <span><h3>I'm a ...</h3></span>
                  {this.state.currentMessage} 
              </Typist>
          */}

              <div>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                  enable-background="new 0 0 100 100"
                  xmlSpace="preserve"
                  class="bottom"
                >
                  <g id="Layer_1" />
                  <g id="Layer_2">
                    <path
                      class="draw"
                      d="M50,2.5C23.8,2.5,2.5,23.8,2.5,50c0,26.2,21.3,47.5,47.5,47.5S97.5,76.2,97.5,50C97.5,23.8,76.2,2.5,50,2.5z M85.1,70.3
              c-4.7,8.2-12.2,14.5-21.2,17.8c-4.3,1.6-9,2.4-13.8,2.4s-9.5-0.9-13.8-2.4c-9-3.3-16.5-9.6-21.2-17.8c-3.4-6-5.4-12.9-5.4-20.3
              c0-2.4,0.2-4.8,0.6-7c1.7-9.6,6.7-18,13.9-24c7-5.9,16.1-9.5,26-9.5s19,3.6,26,9.5c7.1,6,12.2,14.4,13.9,24c0.4,2.3,0.6,4.6,0.6,7
              C90.5,57.4,88.5,64.3,85.1,70.3z"
                    />
                  </g>
                  <g id="Layer_3">
                    <path
                      class="draw"
                      fill="none"
                      stroke="#000000"
                      stroke-miterlimit="10"
                      d="M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50s50-22.4,50-50S77.6,0,50,0z
               M85.1,70.3c-4.7,8.2-12.2,14.5-21.2,17.8c-4.3,1.6-9,2.4-13.8,2.4s-9.5-0.9-13.8-2.4c-9-3.3-16.5-9.6-21.2-17.8
              c-3.4-6-5.4-12.9-5.4-20.3c0-2.4,0.2-4.8,0.6-7c1.7-9.6,6.7-18,13.9-24c7-5.9,16.1-9.5,26-9.5s19,3.6,26,9.5
              c7.1,6,12.2,14.4,13.9,24c0.4,2.3,0.6,4.6,0.6,7C90.5,57.4,88.5,64.3,85.1,70.3z"
                    />
                  </g>
                  <g id="Layer_4">
                    <g>
                      <path
                        class="draw"
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-miterlimit="10"
                        d="M94.3,42.2c-1.9-10.6-7.5-20-15.4-26.7C71.1,9,61,5,50,5
                S28.9,9,21.1,15.5v0c-7.9,6.7-13.5,16-15.4,26.7C5.2,44.7,5,47.3,5,50c0,8.2,2.2,15.9,6,22.5c5.2,9.1,13.6,16.2,23.6,19.8
                C39.4,94,44.6,95,50,95s10.6-1,15.4-2.7c10-3.6,18.3-10.7,23.6-19.8c3.8-6.6,6-14.3,6-22.5C95,47.3,94.8,44.7,94.3,42.2z
                 M85.1,70.3c-4.7,8.2-12.2,14.5-21.2,17.8c-4.3,1.6-9,2.4-13.8,2.4s-9.5-0.9-13.8-2.4c-9-3.3-16.5-9.6-21.2-17.8
                c-3.4-6-5.4-12.9-5.4-20.3c0-2.4,0.2-4.8,0.6-7c1.7-9.6,6.7-18,13.9-24c7-5.9,16.1-9.5,26-9.5s19,3.6,26,9.5
                c7.1,6,12.2,14.4,13.9,24c0.4,2.3,0.6,4.6,0.6,7C90.5,57.4,88.5,64.3,85.1,70.3z"
                      />
                      <path
                        class="draw"
                        fill="none"
                        stroke="#FFFFFF"
                        stroke-miterlimit="10"
                        d="M90.5,50c0,7.4-2,14.3-5.4,20.3c-4.7,8.2-12.2,14.5-21.2,17.8
                c-4.3,1.6-9,2.4-13.8,2.4s-9.5-0.9-13.8-2.4c-9-3.3-16.5-9.6-21.2-17.8c-3.4-6-5.4-12.9-5.4-20.3c0-2.4,0.2-4.8,0.6-7
                c1.7-9.6,6.7-18,13.9-24c7-5.9,16.1-9.5,26-9.5s19,3.6,26,9.5c7.1,6,12.2,14.4,13.9,24C90.3,45.2,90.5,47.6,90.5,50z"
                      />
                      <g>
                        <line
                          class="vert"
                          fill="none"
                          stroke="#FFFFFF"
                          stroke-miterlimit="10"
                          x1="50"
                          y1="9.5"
                          x2="50"
                          y2="5"
                        />
                        <line
                          class="vert"
                          fill="none"
                          stroke="#FFFFFF"
                          stroke-miterlimit="10"
                          x1="78.9"
                          y1="15.5"
                          x2="76"
                          y2="19"
                        />
                        <line
                          class="vert"
                          fill="none"
                          stroke="#FFFFFF"
                          stroke-miterlimit="10"
                          x1="94.3"
                          y1="42.2"
                          x2="89.9"
                          y2="43"
                        />
                        <line
                          class="vert"
                          fill="none"
                          stroke="#FFFFFF"
                          stroke-miterlimit="10"
                          x1="89"
                          y1="72.5"
                          x2="85.1"
                          y2="70.3"
                        />
                        <line
                          class="vert"
                          fill="none"
                          stroke="#FFFFFF"
                          stroke-miterlimit="10"
                          x1="36.2"
                          y1="88.1"
                          x2="34.6"
                          y2="92.3"
                        />
                        <line
                          class="vert"
                          fill="none"
                          stroke="#FFFFFF"
                          stroke-miterlimit="10"
                          x1="14.9"
                          y1="70.3"
                          x2="11"
                          y2="72.5"
                        />
                        <line
                          class="vert"
                          fill="none"
                          stroke="#FFFFFF"
                          stroke-miterlimit="10"
                          x1="10.1"
                          y1="43"
                          x2="5.7"
                          y2="42.2"
                        />
                        <line
                          class="vert"
                          fill="none"
                          stroke="#FFFFFF"
                          stroke-miterlimit="10"
                          x1="24"
                          y1="19"
                          x2="21.1"
                          y2="15.5"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="Layer_5">
                    <circle cx="50" cy="50" r="40" />
                  </g>
                  <g id="Layer_6">
                    <g>
                      <rect
                        x="8.8"
                        y="24.8"
                        fill="none"
                        width="82.3"
                        height="42.5"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M16.2,44.5c0-2.7-0.1-5-0.2-7.2h4.2l0.2,4.3h0.2c1.5-2.5,4-4.9,8.4-4.9c3.6,0,6.4,2.2,7.5,5.3h0.1
                c0.8-1.5,1.9-2.6,3-3.5c1.6-1.2,3.4-1.9,5.9-1.9c3.5,0,8.7,2.3,8.7,11.5v15.7h-4.7V48.8c0-5.1-1.9-8.2-5.8-8.2
                c-2.7,0-4.9,2-5.7,4.4c-0.2,0.7-0.4,1.5-0.4,2.4v16.4h-4.7V47.9c0-4.2-1.9-7.3-5.6-7.3c-3,0-5.2,2.4-6,4.8
                c-0.3,0.7-0.4,1.5-0.4,2.4v16.1h-4.7V44.5z"
                      />
                      <path
                        fill="#FFFFFF"
                        d="M62.2,27.3c2.1-0.4,5.4-0.8,8.7-0.8c4.8,0,7.9,0.8,10.2,2.7c1.9,1.4,3.1,3.6,3.1,6.5
                c0,3.6-2.4,6.7-6.3,8.1V44c3.5,0.9,7.6,3.8,7.6,9.3c0,3.2-1.3,5.6-3.1,7.4c-2.6,2.4-6.8,3.5-12.8,3.5c-3.3,0-5.8-0.2-7.4-0.4V27.3
                z M67,42.5h4.3c5.1,0,8-2.6,8-6.2c0-4.3-3.3-6-8.1-6c-2.2,0-3.5,0.2-4.2,0.3V42.5z M67,60.3c0.9,0.2,2.3,0.2,4,0.2
                c4.9,0,9.5-1.8,9.5-7.2c0-5.1-4.3-7.1-9.6-7.1h-4V60.3z"
                      />
                    </g>
                  </g>
                </svg>
              </div>

              <Typist>
                <span className="my-custom-class">
                  <h1>Formally, people call me Michael Burton</h1>
                </span>
                <br />
                <div className="container">
                  <h3>
                    <p>I like technology, guitars, and motorcycles</p>
                    <p>I'm here to create things for people to use and love</p>
                  </h3>
                </div>
              </Typist>
            </div>
              <div>
              <svg class="arrows">
                            <path class="a1" d="M0 0 L30 32 L60 0"></path>
                            <path class="a2" d="M0 20 L30 52 L60 20"></path>
                            <path class="a3" d="M0 40 L30 72 L60 40"></path>
                          </svg>
              </div>

          </div>
        </div>
        <Element name="weddings">
          <Parallax bgImage={image3} strength={500}>
            <div style={{ height: 500, display: "block" }} />
          </Parallax>
          <div style={{ display: "flex" }} key={1}>
            <h1 style={{ padding: "1em" }}>Weddings</h1>
            <p style={{ padding: "1em", textAlign: "justify" }}>
              I feel fortunate to have had the opportunity to have shared so
              many celebrations of love, having attended dozens of weddings
              throughout Northern California. These opportities to document the
              moments people hold so dearly in different mediums such as photos,
              videos, and photobooths have given me great satisfaction in the
              happiness I've brought to people. Previously founder of
              <a href="https://sfcityhallphoto.com">SF City Hall Photo</a>
              Currently booking weddings for 2018 and beyond. Please email me
              directly for serious inquiries{" "}
              <a href="mailto:mail4mdb@gmail.com">Send email to nowhere</a>
            </p>
          </div>
        </Element>
        <Element name="fineArt">
          <Parallax bgImage={image2} strength={500} key={2}>
            <div style={{ height: 500 }} />
          </Parallax>
          <div style={{ display: "flex" }}>
            <p style={{ padding: "1em", textAlign: "justify" }}>
              Throughout my young photographic career I'm grown and transformed
              continually into the artist I am today. Having evoluted with new
              technology, and adopting the tools of the future (lightRoom, HDR,
              magicLantern ), I pay homage to the analog counterparts of the
              latest trends and tricks. This collection of fineArt photography
              represents the essence of whats crossed my 'eye', and is meant to
              spark discussion and provoke emotion deep within any audience.
              Works include travel, event, and night photography. All pieces are
              available for purchase in digital and print formats, with 50% of
              the proceeds going towards the global clean water initiative{" "}
              <a href="https://water.org">Water.org</a>
            </p>
            <h1 style={{ padding: "1em", textAlign: "justify" }}>fineArt</h1>
          </div>
        </Element>
        <Element name="privateList">
          <Parallax bgImage={image1} strength={500} eventKey="3">
            <div style={{ height: 500 }} />
          </Parallax>
          <div style={{ display: "flex" }}>
            <h1 style={{ padding: "1em", textAlign: "justify" }}>
              privateList
            </h1>
            <p style={{ padding: "1em", textAlign: "justify" }} key="3">
              Built out as an exercise in encyrption and security, privateList
              has grown into a full fledged web app for sharing messages via QR
              codes and secure access tokens generated in the cloud. Provides an
              easy way to securely verify access, permissions, and user rights
              for any sort of private or sensitive information. Easily upload
              email lists and send out QR codes to validate users quickly and
              securely. Use cases include online ticket sales, digital good,
              coupon promo codes, and more.
            </p>
          </div>
        </Element>
        <Element name="wizardsChess">
          <Parallax bgImage={image3} strength={500}>
            <div style={{ height: 500 }} />
          </Parallax>
          <div style={{ display: "flex" }}>
            <p style={{ padding: "1em", textAlign: "justify" }}>
              Get ready to play the first voice controlled chess game inspired
              by the legendary Harry Potter books. Challenge a friend, battle
              yourself, or go head to head with an advanced AI. See if you have
              the skills it takes to win! Game options include Single Player
              Mode, and Localhost (1v1), and be sure to stay tuned for the
              upcoming release of our multiplayer web interface. Voice controls
              supported in the latest versions of Chrome, and other browsers
              that are adopting the native browser Speech.API().{" "}
            </p>

            <h1 id="wiz" style={{ padding: "1em", textAlign: "justify" }}>
              wizardsChess
            </h1>
          </div>
        </Element>
        <Element name="woodwork">
          <Parallax bgImage={image2} blur={{ min: -1, max: 3 }}>
            <div style={{ height: 500 }} />
          </Parallax>
          <div style={{ display: "flex" }}>
            <h1 style={{ padding: "1em", textAlign: "justify" }}>
              wineBarrelFurnature
            </h1>
            <p style={{ padding: "1em", textAlign: "justify" }}>
              The process of creating tangle goods with my hands provides such a
              tangle and rewarding satisfaction that it's almost feels as though
              I'm getting in touch with a connection from a past life. From
              starting with raw materials, to disassembly, sanding, measuring,
              building, and finishing, the steps of building a product are paths
              along the journey to the destination of a finished good. Creating
              practical pieces that provide value to their users and their
              owners is at the core of the recycled wineBarrelFurnature I've
              built along the years. For a list of goods currently available for
              sale please <a href="mailto:mail4mdb@gmail.com">email me</a>{" "}
              directly. All pieces were built at{" "}
              <a href="http://www.speedycreekwinery.com">speedycreekwinery</a>
            </p>
          </div>
        </Element>

        <Element name="electronics">
          <Parallax bgImage={image1} strength={-100}>
            <div style={{ height: 500 }} />
          </Parallax>
          <div style={{ display: "flex" }}>
            <h1 style={{ padding: "1em", textAlign: "justify" }}>
              Electronics
            </h1>
            <p style={{ padding: "1em", textAlign: "justify" }}>
              Ever since I got my first eMachines computer in 3rd Grade, I've
              had a deep facination for electronics, circuits, and science. In
              college I started tinkering with LED's and robotics, which led me
              to creating intrique and efficient LED lighting from recycled
              materials. These projects we're excruciatingly long and tedious,
              but never stopped to astound me when they were finally finished
              and working. From combining CREE leds with aluminum bodies strung
              together with copper wire and brass symbols, to creating
              cylindrical copper lamps radiating light through hundreds of tiny
              holes, each piece was truly unique and one-of-a-kind.
            </p>
          </div>
        </Element>
        <Element name="music">
          <Parallax bgImage={image3} strength={500}>
            <div style={{ height: 500 }} />
          </Parallax>
          <div style={{ display: "flex" }}>
            <p style={{ padding: "1em", textAlign: "justify" }}>
              My truest passion, music, will always hold the closet to my heart.
              As an outlet for all life has to offer, from the good to the bad,
              getting into the music is fully stepping into the 'zone'. Having
              an understanding of getting into that subconcious space, and
              literally putting out good vibrations into the universe is a
              feeling that one must experience to fully understand. I invite you
              to listen to a samples of my recordings, from experiments in using
              a BOSS RC-30 Loop Pedal, welcome lostLoops Today collabolating,
              and performing offer me the most reward and satisfaction, hit me
              up if you want to <a href="mailto:mail4mdb@gmail.com">jam!</a>
            </p>
            <h1 style={{ padding: "1em", textAlign: "justify" }}>Music</h1>
          </div>
        </Element>
        <Element name="testimonials">
          <Parallax bgImage={image2} strength={500}>
            <div style={{ height: 500 }} />
          </Parallax>
          <div style={{ display: "flex" }}>
            <h1 style={{ padding: "1em", textAlign: "justify" }}>
              Testimonials
            </h1>
            <p>
              A collection of over 30 5 star reviews earned founding the
              business{" "}
              <a href="https://sfcityhallphoto.com">SF City Hall Photo</a>.
              These shoots were all weddings at the beautiful City Hall building
              of San Francisco, a popular distination of couples getting married
              in the city. The buildings highlights wonderfully detailed
              architecture, with gorgeous lighting and a stunning backgrounds.
            </p>
          </div>
        </Element>
        <Element name="about">
          <Parallax bgImage={image1} strength={500}>
            <div style={{ height: 500 }} />
          </Parallax>
          <div style={{ display: "flex" }}>
            <p>
              Born in San Francisco in the late 80's, I've had a chance to see
              technology in a unique light a the .com boom completely
              transformed my hometown into the technology hub of the world.
              During college I studied economics during the worst downturn of
              modern history since the great depression, which afforded me
              insights into the struggles of the global economy and the possible
              vectors for survival. Returning to the tech roots that have always
              been around me I got back into coding fulltime in mid 2016,
              selling off my photography business and attending Hack Reactor. My
              current interests in tech revolve around creating more fair and
              just democractic systems, social justice and equality, cyber
              security and protecting our online identities, increasing energy
              efficiencies and reducing waste, more efficient modes of
              transporation, providing health food for our growing population,
              and space colonization.
            </p>
            <h1 style={{ padding: "1em", textAlign: "justify" }}>About</h1>
          </div>
        </Element>
        <h2>{"\u2728"}</h2>
      </div>
    );
    return <App />;
  }
}
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

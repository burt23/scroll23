import React from "react";
import { Parallax } from "react-parallax";
import Navbar from "./Navbar";
import TypistHero from "./TypistHero";
import Particles from "react-particles-js";
import Scroll from "react-scroll";
import params from "./particleParams.js";
import Logo from "./logo";
import DownArrows from "./DownArrows";
import Gallery from "./Gallery";
import MasonryGallery from "./MasonryGallery";
import PrivateListSVG from "./PrivateListSVG";
import UvaSVG from "./UvaSVG";
import TruckHuntSVG from "./TruckHuntSVG";
import WizardsChessSVG from "./WizardsChessSVG";
import YouInSVG from "./YouInSVG";

let Events = Scroll.Events;
let Element = Scroll.Element;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

    const albumArt = "https://f4.bcbits.com/img/0005527348_100.png";
    const me =
      "https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/14463157_134819846977042_9157923054910920849_n.jpg?oh=b4794833576f5d089b4b236c21b13622&oe=5A9FE0C0";

    const App = () => (
      <div style={styles}>
        <Navbar />

        <div>
          <Particles
            params={params}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              height: "100vh",
              width: "100vw",
              zIndex: -9999
            }}
          />

          <div style={{ height: "100vh", display: "block" }}>
            <div style={insideStyles}>
              <div id="welcomeLogo">
                <Logo />
              </div>
              <TypistHero />
            </div>
            <div>
              <DownArrows />
            </div>
          </div>
        </div>

        <Element name="truckHunt">
          <div style={{ background: "#d28343e3" }}>
            <TruckHuntSVG />
            <iframe
              style={{ width: "100vw", minHeight: "40vh" }}
              src="https://www.youtube.com/embed/iVUxqjB9uu4"
              frameBorder="0"
              gesture="media"
              allowFullScreen
            />

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: "auto" }}>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <h1 style={{ flex: "auto" }}>React/Redux</h1>
                  <li style={{ flex: "auto" }}>
                    <a href="https://github.com/TutelaryToads/TutelaryToads/blob/master/client/src/containers/Login.jsx#L138-L152">
                      Dispatching Actions from Authentication Portal
                    </a>
                  </li>
                  <li style={{ flex: "auto" }}>
                    <a href="https://github.com/TutelaryToads/TutelaryToads/blob/master/client/src/actions/signupActions.js#L60-L83">
                      Using Isomorphic-Fetch and Redux
                    </a>
                  </li>
                </ul>
              </div>

              <div style={{ flex: "auto" }}>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <h1 style={{ flex: "auto" }}>Node/Express</h1>
                  <li style={{ flex: "auto" }}>
                    <a href="https://github.com/TutelaryToads/TutelaryToads/blob/master/server/server.js#L3-L6">
                      Using dotenv in production Node
                    </a>
                  </li>
                  <li style={{ flex: "auto" }}>
                    <a href="https://github.com/TutelaryToads/TutelaryToads/blob/master/server/requestHandler.js">
                      Writing clean route handlers
                    </a>
                  </li>
                </ul>
              </div>
              <div style={{ flex: "auto" }}>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <h1 style={{ flex: "auto" }}>Stripe API</h1>
                  <li style={{ flex: "auto" }}>
                    <a href="https://github.com/TutelaryToads/TutelaryToads/blob/master/server/routes/stripeAuthorization.js#L8-L21">
                      How to write Stripe OAUTH request parameters
                    </a>
                  </li>
                  <li style={{ flex: "auto" }}>
                    <a href="https://github.com/TutelaryToads/TutelaryToads/blob/master/server/routes/stripeCallback.js#L2-L4">
                      Passing OAUTH endpoint optional queries via state
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Element>
        <Element name="wizardsChess">
          <div style={{ background: "rgba(48, 52, 102, 0.8)" }}>
            <WizardsChessSVG />
            <h1 style={{ margin: "0 auto", width: "100vw" }}>
              Voice Controlled Online Chess
            </h1>

            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: "auto" }}>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <h1 style={{ flex: "auto" }}>Material UI</h1>
                  <li style={{ flex: "auto" }}>
                    <a href="https://github.com/twalk4821/wizardsChessAPI/blob/master/src/index.js#L15-L19">
                      Enabling Dark Theme
                    </a>
                  </li>
                  <li style={{ flex: "auto" }}>
                    <a href="https://github.com/twalk4821/wizardsChessAPI/blob/master/src/components/paperCard.js#L25-L30">
                      Styling dynamic text inputs
                    </a>
                  </li>
                </ul>
              </div>

              <div style={{ flex: "auto" }}>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <h1 style={{ flex: "auto" }}>Wireframes</h1>
                  <li style={{ flex: "auto" }}>
                    <a href="https://github.com/twalk4821/wizardsChessAPI/blob/master/wireframes/main.png">
                      Creating a Storyboard
                    </a>
                  </li>
                  <li style={{ flex: "auto" }}>
                    <a href="https://www.adobe.com/products/xd.html">
                      Leveraging Adobe XD
                    </a>
                  </li>
                </ul>
              </div>
              <div style={{ flex: "auto" }}>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <h1 style={{ flex: "auto" }}>Config</h1>
                  <li style={{ flex: "auto" }}>
                    <a href="https://github.com/twalk4821/wizardsChessAPI/blob/master/webpack.config.js#L3-L10">
                      Setting up Webpack 3
                    </a>
                  </li>
                  <li style={{ flex: "auto" }}>
                    <a href="https://github.com/twalk4821/wizardsChessAPI/blob/master/src/App.js#L29">
                      Redux with React Router v4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Element>
        <Element name="privateList">
          <div style={{ background: "rgba(255,255,255, 0.5)" }}>
            <PrivateListSVG  style={{ color: 'white', background: "lightseagreen" }} />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: "auto" }}>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <h1 style={{ flex: "auto" }}>MySQL</h1>
                  <li style={{ flex: "auto" }}>
                    <a href="https://github.com/burt23/360/blob/master/server/dbUtils.js#L14-L120">
                      Writing SQL Queries in Node
                    </a>
                  </li>
                  <li style={{ flex: "auto" }}>
                    <a href="https://github.com/burt23/360/blob/master/server/schema.sql#L1-L27">
                      Writing MySQL Schema's
                    </a>
                  </li>
                </ul>
              </div>

              <div style={{ flex: "auto" }}>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <h1 style={{ flex: "auto" }}>Crypto</h1>
                  <li style={{ flex: "auto" }}>
                    <a href="https://github.com/burt23/360/blob/master/server/middleware/hashPassNewUser.js#L29">
                      Writing Crypto Middleware
                    </a>
                  </li>
                  <li style={{ flex: "auto" }}>
                    <a href="https://github.com/burt23/360/blob/master/server/index.js#L26">
                      Using Middleware in Node
                    </a>
                  </li>
                </ul>
              </div>
              <div style={{ flex: "auto" }}>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column"
                  }}
                >
                  <h1 style={{ flex: "auto" }}>React</h1>
                  <li style={{ flex: "auto" }}>
                    <a href="https://github.com/burt23/360/blob/master/react/src/index.jsx#L289">
                      Conditionally rendering page views
                    </a>
                  </li>
                  <li style={{ flex: "auto" }}>
                    <a href="https://github.com/burt23/360/blob/master/react/src/index.jsx#L242-L265">
                      Using jQuery Ajax in React
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Element>

        <Element name="weddings">
          <Gallery />
          <div style={{ display: "flex", background: "rgba(0,0,0,0.4)" }} key={1}>
            <div style={{ padding: "2em", textAlign: "justify" }}>
              <h1
                style={{ float: "right", padding: "0em 2em" }}
              >
                Weddings
              </h1>
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
            </div>
          </div>
        </Element>
        <Element name="testimonials">
          <div style={{ display: "flex" }}>
            <div style={{ padding: "1em", textAlign: "justify" }}>
              <h1 style={{ float: "left", padding: "0em 2em" }}>
                Testimonials
              </h1>
              A collection of over 30 5 star reviews earned founding the
              business 
              <a href="https://sfcityhallphoto.com">SF City Hall Photo</a>.
              These shoots were all weddings at the beautiful City Hall building
              of San Francisco, a popular destination for couples getting married
              in the city. The building highlights wonderfully the detailed
              architecture, with gorgeous lighting across stunning backgrounds.
            </div>
          </div>
          <MasonryGallery />
        </Element>

        <Element name="music">
          <Parallax bgImage={albumArt} strength={500}>
            <div style={{ height: 500 }} />
          </Parallax>
          <div style={{ display: "flex" }}>
            <div style={{ padding: "1em", textAlign: "justify" }}>
              <h1 style={{ float: "right", padding: "0em 2em" }}>Music</h1>
              My truest passion, music, will always hold the closet to my heart.
                           As an outlet for all life has to offer, from the good to the bad,
                           getting into the music is fully stepping into the 'zone'. Having
                           an understanding of getting into that subconscious space, and
                           literally putting out good vibrations into the universe is a
                           feeling that one must experience to fully understand. I invite you
                           to listen to samples of my recordings, from experiments in using
                           a BOSS RC-30 Loop Pedal, welcome lostLoops Today collaborating,
                           and performing offer me the most reward and satisfaction hit me
                           up if you want to <a href="mailto:mail4mdb@gmail.com">jam!</a>
            </div>
          </div>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <iframe
              title="Mottainai"
              style={{
                border: "1px solid black",
                width: "700px",
                minHeight: "40vh"
              }}
              src="https://bandcamp.com/EmbeddedPlayer/album=2523675360/size=large/bgcol=333333/linkcol=2ebd35/tracklist=true/artwork=small/transparent=true/"
              seamless
            >
              <a href="http://dashurpa.bandcamp.com/album/mottainai">
                Mottainai by dashurpa
              </a>
            </iframe>
          </div>
        </Element>

        <Element name="about">
          <Parallax bgImage={me} strength={500}>
            <div style={{ height: 500 }} />
          </Parallax>
          <div style={{ display: "flex" }}>
            <div style={{ padding: "1em", textAlign: "justify" }}>
              <h1 style={{ float: "right", padding: "0em 2em" }}>About</h1>
             Born in San Francisco in the late 80's, I've had a chance to see the technology in a unique light a the .com boom completely transformed my hometown into the technology hub of the world. During college, I studied economics during the worst downturn in modern history since the great depression, which afforded me insights into the struggles of the global economy and the possible vectors for survival. Returning to the tech roots that have always been around me I got back into coding fulltime in mid-2016, selling off my photography business and attending Hack Reactor. My current interests in tech revolve around creating more fair and just democratic systems, social justice and equality, cybersecurity and protecting our online identities, increasing energy efficiencies and reducing waste, more efficient modes of transportation, providing healthy food for our growing population, and space colonization.
            </div>
          </div>
        </Element>
        <h2>{"\u2728"}</h2>
      </div>
    );
    return <App />;
  }
}

export default App;

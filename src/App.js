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
import TruckHuntSVG from "./TruckHuntSVG";
import WizardsChessSVG from "./WizardsChessSVG";
import AppDescriptions from "./AppDescriptions";
import appText from "./appText";

let Link = Scroll.Link;
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
          {/* ------------------SET PARTICLE BACKGROUND------------------ */}
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

          {/* ------------------WELCOME PAGE------------------ */}
          <div style={{ height: "100vh", display: "block" }}>
            <div style={insideStyles}>
              <div id="welcomeLogo">
                <Logo />
              </div>
              <TypistHero />
            </div>
            <div>
              <Link
                to="truckHunt"
                className="scrollLink"
                spy
                smooth
                duration={500}
              >
                <DownArrows />
              </Link>
            </div>
          </div>
        </div>

        {/* ------------------TRUCK HUNT------------------ */}
        <Element name="truckHunt">
          <TruckHuntSVG />
          <iframe
            title="truckHuntVideo"
            style={{ height: "40vh", minWidth: "80vh" }}
            src="https://www.youtube.com/embed/iVUxqjB9uu4"
            frameBorder="0"
            gesture="media"
            allowFullScreen
          />
          <h1>
            Order online from your favorite food trucks in SF
          </h1>
          <AppDescriptions descriptors={appText.truckHunt} />
        </Element>
        {/* ------------------WIZARDS CHESS------------------ */}
        <Element name="wizardsChess">
        <a href="https://wizardschess.club">
          <WizardsChessSVG />
          </a>
          <h1>
            Voice Controlled Online Chess
          </h1>
          <AppDescriptions descriptors={appText.wizardsChess} />
        </Element>
        {/* ------------------PRIVATE LIST------------------ */}
        <Element name="privateList">
          <PrivateListSVG
            style={{ color: "white", background: "lightseagreen" }}
          />
          <h1>
            Secret Message Society 
          </h1>
          <AppDescriptions descriptors={appText.privateList} />
        </Element>

        {/* ------------------WEDDINGS------------------ */}
        <Element name="weddings">
          <Gallery />
          <div
            style={{ display: "flex", background: "rgba(0,0,0,0.4)" }}
            key={1}
          >
            <div style={{ padding: "2em", textAlign: "justify" }}>
              <h1 style={{ float: "right", padding: "0em 2em" }}>Weddings</h1>
              {appText.weddings}
              <a href="https://sfcityhallphoto.com">SF City Hall Photo</a>
              <a href="mailto:mail4mdb@gmail.com">Email Me</a>
            </div>
          </div>
        </Element>
        {/* ------------------TESTIMONIALS------------------ */}
        <Element name="testimonials">
          <div style={{ display: "flex" }}>
            <div style={{ padding: "1em", textAlign: "justify" }}>
              <h1 style={{ float: "left", padding: "0em 2em" }}>
                Testimonials
              </h1>
              {appText.testimonials}
            </div>
          </div>
          <MasonryGallery />
        </Element>

        {/* ------------------MUSIC------------------ */}
        <Element name="music">
          <Parallax bgImage={albumArt} strength={500}>
            <div style={{ height: 500 }} />
          </Parallax>
          <div
            style={{
              display: "flex",
              width: "80vw",
              margin: "0 auto",
              padding: "5vw"
            }}
          >
            <div style={{ textAlign: "justify" }}>
              <h1 style={{ float: "right", padding: "0em 2em" }}>Music</h1>
              {appText.music}
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

        {/* ------------------ABOUT------------------ */}
        <Element name="about">
          <Parallax bgImage={me} strength={500}>
            <div style={{ height: 500 }} />
          </Parallax>
          <div
            style={{
              display: "flex",
              width: "80vw",
              margin: "0 auto",
              padding: "5vw"
            }}
          >
            <div style={{ padding: "1em", textAlign: "justify" }}>
              <h1 style={{ float: "right", padding: "0em 2em" }}>About</h1>
              {appText.about}
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

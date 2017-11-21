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

  render() {
    const styles = {
      textAlign: "center"
    };

    const textStyle = {
      display: "flex",
      width: "80vw",
      margin: "0 auto",
      textAlign: "justify",
      padding: "2em 0"
    };

    const headerStyle = {
      textAlign: "center",
      padding: "1em 0"
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
            <div className="welcomeStyle">
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
                kkk
              >
                <DownArrows />
              </Link>
            </div>
          </div>
        </div>

        {/* ------------------TRUCK HUNT------------------ */}
        <Element name="truckHunt" style={{ background: "rgba(0,0,0,0.2)" }}>
          <TruckHuntSVG />
          <iframe
            title="truckHuntVideo"
            style={{ height: "40vh", width: "100%" }}
            src="https://www.youtube.com/embed/iVUxqjB9uu4"
            frameBorder="0"
            gesture="media"
            allowFullScreen
          />
          <h1 style={headerStyle}>
            Order online from your favorite food trucks in SF
          </h1>
          <AppDescriptions descriptors={appText.truckHunt} />
        </Element>
        {/* ------------------WIZARDS CHESS------------------ */}
        <Element name="wizardsChess">
          <a href="https://wizardschess.club">
            <WizardsChessSVG />
          </a>
          <h1 style={headerStyle}>Voice Controlled Online Chess</h1>
          <AppDescriptions descriptors={appText.wizardsChess} />
        </Element>
        {/* ------------------PRIVATE LIST------------------ */}
        <Element name="privateList" style={{ background: "rgba(0,0,0,0.2)" }}>
          <PrivateListSVG />
          <h1 style={headerStyle}>Secret Message Society</h1>
          <AppDescriptions descriptors={appText.privateList} />
        </Element>

        {/* ------------------WEDDINGS------------------ */}
        <Element name="weddings">
          <div style={textStyle}>
            <div style={{ flex: "auto" }}>
              <h1 style={headerStyle}>Weddings</h1>
              {appText.weddings}
              <br />
              <a href="https://sfcityhallphoto.com">SF City Hall Photo</a>
              <br />
              <a href="mailto:mail4mdb@gmail.com">Email Me</a>
            </div>
          </div>
          <Gallery />
        </Element>
        {/* ------------------TESTIMONIALS------------------ */}
        <Element name="testimonials">
          <div style={textStyle}>
            <div style={{ flex: "auto" }}>
              <h1 style={headerStyle}>Testimonials</h1>
              {appText.testimonials}
            </div>
          </div>
          <div style={{ maxWidth: "100vw" }}>
            <MasonryGallery />
          </div>
        </Element>

        {/* ------------------MUSIC------------------ */}
        <Element name="music">
          <Parallax bgImage={albumArt} strength={500}>
            <div style={{ height: 500 }} />
          </Parallax>
          <div style={textStyle}>
            <div style={{ textAlign: "justify" }}>
              <h1 style={headerStyle}>Music</h1>
              {appText.music}
            </div>
          </div>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <iframe
              title="Mottainai"
              style={{
                border: "1px solid black",
                maxWidth: "700px",
                minHeight: "40vh",
                marginBottom: "2em"
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
            <div style={{ minHeight: "40vh" }} />
          </Parallax>
          <div style={textStyle}>
            <div style={{ padding: "1em", textAlign: "justify" }}>
              <h1 style={headerStyle}>About</h1>
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

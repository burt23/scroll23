import React from "react";
import Navbar from "./components/Navbar";
import Particles from "react-particles-js";
import Scroll from "react-scroll";
import params from "./components/particleParams.js";
import WelcomePage from "./containers/WelcomePage";
import Projects from "./containers/Projects";
import Photography from "./containers/Photography";
import Music from "./containers/Music";
import About from "./containers/About";
import Footer from "./containers/Footer";

let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      wantsPhoto: false,
      wantsCode: false
    };
    this.scrollToTop = this.scrollToTop.bind(this);
    this.togglePhoto = this.togglePhoto.bind(this);
    this.toggleCode = this.toggleCode.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
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

  togglePhoto() {
    this.setState({
      wantsPhoto: !this.state.wantsPhoto
    });
  }

  toggleCode() {
    this.setState({
      wantsCode: !this.state.wantCodes
    });
  }

  toggleLoading() {
    this.setState({
      loading: !this.state.loading
    });
  }

  render() {
    if (!this.state.loading) {
      return (
        <div id="appWrapper">
          <Navbar />
          <Particles params={params} className="particles" />
          <WelcomePage />
          <div className="visible">
            <Projects />
            <Photography />
            <Music />
            <About />
            <Footer />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <canvas id="canvas" width="250" height="250" />
        </div>
      );
    }
  }
}

export default App;

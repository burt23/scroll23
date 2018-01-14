import React from "react";
import Navbar from "./components/Navbar";
import Particles from "react-particles-js";
import Scroll from "react-scroll";
import params from "./components/particleParams.js";
import WelcomePage from "./containers/WelcomePage";
import Projects from "./containers/Projects";
import Weddings from "./containers/Weddings";
import Testimonials from "./containers/Testimonials";
import Music from "./containers/Music";
import About from "./containers/About";
import Footer from "./containers/Footer";

let Events = Scroll.Events;
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
    return (
      <div>
        <Navbar />
        <Particles params={params} className="particles" />
        <WelcomePage />
        <Projects />
        <Weddings />
        <Testimonials />
        <Music />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;

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
import Loader from "./components/Loader";

let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
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
    var canvasLoader = function() {
      var self = this;
      window.requestAnimationFrame = (function() {
        return (
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(a) {
            window.setTimeout(a, 1e3 / 60);
          }
        );
      })();

      self.init = function() {
        self.canvas = document.getElementById("canvas");
        self.ctx = self.canvas.getContext("2d");
        self.ctx.lineWidth = 0.5;
        self.ctx.strokeStyle = "rgba(0,0,0,.75)";
        self.count = 75;
        self.rotation = 270 * (Math.PI / 180);
        self.speed = 6;
        self.canvasLoop();
      };

      self.updateLoader = function() {
        self.rotation += self.speed / 100;
      };

      self.renderLoader = function() {
        self.ctx.save();
        self.ctx.globalCompositeOperation = "source-over";
        self.ctx.translate(125, 125);
        self.ctx.rotate(self.rotation);
        var i = self.count;
        while (i--) {
          self.ctx.beginPath();
          self.ctx.arc(
            0,
            0,
            i + Math.random() * 35,
            Math.random(),
            Math.PI / 3 + Math.random() / 12,
            false
          );
          self.ctx.stroke();
        }
        self.ctx.restore();
      };

      self.canvasLoop = function() {
        requestAnimationFrame(self.canvasLoop, self.canvas);
        self.ctx.globalCompositeOperation = "destination-out";
        self.ctx.fillStyle = "rgba(0,0,0,.03)";
        self.ctx.fillRect(0, 0, 250, 250);
        self.updateLoader();
        self.renderLoader();
      };
    };

    var loader = new canvasLoader();
    loader.init();

 setTimeout(this.toggleLoading, 500);
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
        <div id='appWrapper'>
          <Navbar />
          <Particles params={params} className="particles" />
          <WelcomePage />
          <Projects />
          <Photography />
          <Music />
          <About />
          <Footer />
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

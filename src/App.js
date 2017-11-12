import React from "react";
import { Parallax } from "react-parallax";
import Nav from "./Nav";
import ParallaxTest from "./ParallaxTest";
import Particles from "react-particles-js";

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

const params = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 219.26084732136317,
        size: 40,
        duration: 2,
        opacity: 0.503487871626834,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
const App = () => (
  <div style={styles}>
    <Nav />
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
          <h1>I'm a...</h1>
          <h2> designer</h2>
        </div>
      </div>
    </div>
    <ParallaxTest />
    <Parallax bgImage={image3} strength={500}>
      <div style={{ height: 500, display: "block" }} />
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
        Currently booking weddings for 2018 and beyond. Please email me directly
        for serious inquiries{" "}
        <a href="mailto:mail4mdb@gmail.com">Send email to nowhere</a>
      </p>
    </div>
    <Parallax bgImage={image2} strength={500}>
      <div style={{ height: 500 }} />
    </Parallax>
    <div style={{ display: "flex" }}>
      <p style={{ padding: "1em", textAlign: "justify" }}>
        Throughout my young photographic career I'm grown and transformed
        continually into the artist I am today. Having evoluted with new
        technology, and adopting the tools of the future (lightRoom, HDR,
        magicLantern ), I pay homage to the analog counterparts of the latest
        trends and tricks. This collection of fineArt photography represents the
        essence of whats crossed my 'eye', and is meant to spark discussion and
        provoke emotion deep within any audience. Works include travel, event,
        and night photography. All pieces are available for purchase in digital
        and print formats, with 50% of the proceeds going towards the global
        clean water initiative <a href="https://water.org">Water.org</a>
      </p>
      <h1 style={{ padding: "1em", textAlign: "justify" }}>fineArt</h1>
    </div>
    <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 500 }} />
    </Parallax>
    <div style={{ display: "flex" }}>
      <h1 style={{ padding: "1em", textAlign: "justify" }}>privateList</h1>
      <p style={{ padding: "1em", textAlign: "justify" }}>
        Built out as an exercise in encyrption and security, privateList has
        grown into a full fledged web app for sharing messages via QR codes and
        secure access tokens generated in the cloud. Provides an easy way to
        securely verify access, permissions, and user rights for any sort of
        private or sensitive information. Easily upload email lists and send out
        QR codes to validate users quickly and securely. Use cases include
        online ticket sales, digital good, coupon promo codes, and more.
      </p>
    </div>
    <Parallax bgImage={image3} strength={500}>
      <div style={{ height: 500 }} />
    </Parallax>
    <div style={{ display: "flex" }}>
      <p style={{ padding: "1em", textAlign: "justify" }}>
        Get ready to play the first voice controlled chess game inspired by the
        legendary Harry Potter books. Challenge a friend, battle yourself, or go
        head to head with an advanced AI. See if you have the skills it takes to
        win! Game options include Single Player Mode, and Localhost (1v1), and
        be sure to stay tuned for the upcoming release of our multiplayer web
        interface. Voice controls supported in the latest versions of Chrome,
        and other browsers that are adopting the native browser Speech.API().{" "}
      </p>

      <h1 style={{ padding: "1em", textAlign: "justify" }}>wizardsChess</h1>
    </div>
    <Parallax bgImage={image2} blur={{ min: -1, max: 3 }}>
      <div style={{ height: 500 }} />
    </Parallax>
    <div style={{ display: "flex" }}>
      <h1 style={{ padding: "1em", textAlign: "justify" }}>
        wineBarrelFurnature
      </h1>
      <p style={{ padding: "1em", textAlign: "justify" }}>
        The process of creating tangle goods with my hands provides such a
        tangle and rewarding satisfaction that it's almost feels as though I'm
        getting in touch with a connection from a past life. From starting with
        raw materials, to disassembly, sanding, measuring, building, and
        finishing, the steps of building a product are paths along the journey
        to the destination of a finished good. Creating practical pieces that
        provide value to their users and their owners is at the core of the
        recycled wineBarrelFurnature I've built along the years. For a list of
        goods currently available for sale please{" "}
        <a href="mailto:mail4mdb@gmail.com">email me</a> directly. All pieces
        were built at{" "}
        <a href="http://www.speedycreekwinery.com">speedycreekwinery</a>
      </p>
    </div>

    <Parallax bgImage={image1} strength={-100}>
      <div style={{ height: 500 }} />
    </Parallax>
    <div style={{ display: "flex" }}>
      <h1 style={{ padding: "1em", textAlign: "justify" }}>Electronics</h1>
      <p style={{ padding: "1em", textAlign: "justify" }}>
        Ever since I got my first eMachines computer in 3rd Grade, I've had a
        deep facination for electronics, circuits, and science. In college I
        started tinkering with LED's and robotics, which led me to creating
        intrique and efficient LED lighting from recycled materials. These
        projects we're excruciatingly long and tedious, but never stopped to
        astound me when they were finally finished and working. From combining
        CREE leds with aluminum bodies strung together with copper wire and
        brass symbols, to creating cylindrical copper lamps radiating light
        through hundreds of tiny holes, each piece was truly unique and
        one-of-a-kind.
      </p>
    </div>
    <Parallax bgImage={image3} strength={500}>
      <div style={{ height: 500 }} />
    </Parallax>
    <div style={{ display: "flex" }}>
      <p style={{ padding: "1em", textAlign: "justify" }}>
        My truest passion, music, will always hold the closet to my heart. As an
        outlet for all life has to offer, from the good to the bad, getting into
        the music is fully stepping into the 'zone'. Having an understanding of
        getting into that subconcious space, and literally putting out good
        vibrations into the universe is a feeling that one must experience to
        fully understand. I invite you to listen to a samples of my recordings,
        from experiments in using a BOSS RC-30 Loop Pedal, welcome lostLoops
        Today collabolating, and performing offer me the most reward and
        satisfaction, hit me up if you want to{" "}
        <a href="mailto:mail4mdb@gmail.com">jam!</a>
      </p>
      <h1 style={{ padding: "1em", textAlign: "justify" }}>Music</h1>
    </div>
    <Parallax bgImage={image2} strength={500}>
      <div style={{ height: 500 }} />
    </Parallax>
    <div style={{ display: "flex" }}>
      <h1 style={{ padding: "1em", textAlign: "justify" }}>Testimonials</h1>
      <p>
        A collection of over 30 5 star reviews earned founding the business{" "}
        <a href="https://sfcityhallphoto.com">SF City Hall Photo</a>. These
        shoots were all weddings at the beautiful City Hall building of San
        Francisco, a popular distination of couples getting married in the city.
        The buildings highlights wonderfully detailed architecture, with
        gorgeous lighting and a stunning backgrounds.
      </p>
    </div>
    <Parallax bgImage={image1} strength={500}>
      <div style={{ height: 500 }} />
    </Parallax>
    <div style={{ display: "flex" }}>
      <p>
        Born in San Francisco in the late 80's, I've had a chance to see
        technology in a unique light a the .com boom completely transformed my
        hometown into the technology hub of the world. During college I studied
        economics during the worst downturn of modern history since the great
        depression, which afforded me insights into the struggles of the global
        economy and the possible vectors for survival. Returning to the tech
        roots that have always been around me I got back into coding fulltime in
        mid 2016, selling off my photography business and attending Hack
        Reactor. My current interests in tech revolve around creating more fair
        and just democractic systems, social justice and equality, cyber
        security and protecting our online identities, increasing energy
        efficiencies and reducing waste, more efficient modes of transporation,
        providing health food for our growing population, and space
        colonization.
      </p>
      <h1 style={{ padding: "1em", textAlign: "justify" }}>About</h1>
    </div>
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

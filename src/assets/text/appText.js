var react = require("../icons/react.png");
var node = require("../icons/node.png");
var mapbox = require("../icons/mapbox.png");
var postgres = require("../icons/postgres.png");
// var bootstrap = require("../icons/bootstrap.jpg");
var css3 = require("../icons/css3.png");
var expressjs = require("../icons/express.png");
var html = require("../icons/html.png");
// var mapbox = require("../icons/mapbox.png");
var material = require("../icons/material.jpg");
var mic = require("../icons/mic.png");
// var mysql = require("../icons/mysql.png");
var nginx = require("../icons/nginx.png");
var reactRouter = require("../icons/react-router.png");
var redux = require("../icons/redux.png");
var semantic = require("../icons/semantic.png");
// var socket = require("../icons/socket.png");
var xd = require("../icons/xd.jpg");
var wizscreenshot = require("../pics/wizscreenshot.png");
var mobilescreenshot = require("../pics/mobilescreenshot.png");

module.exports = {
  about:
    "Born in San Francisco in the late 80's, I've had a chance to see the technology in a unique light a the .com boom transformed my hometown into the technology hub of the world. During college, I studied economics during the worst downturn in modern history since the great depression, which afforded me insights into the struggles of the global economy and the possible vectors for survival. Returning to the tech roots that have always been around me I got back into coding fulltime in mid-2016, selling off my photography business and attending Hack Reactor. My current interests in tech revolve around creating more fair and just democratic systems, social justice and equality, cybersecurity and protecting our online identities, increasing energy efficiencies and reducing waste, more efficient modes of transportation, providing healthy food for our growing population, and space colonization.",
  music:
    "From learning to play to recorder in fourth grade, to the clarinet and saxiphone in high school, and more than a decade of learning guitar, I've always enjoyed playing music.  And sinceMusic has always provided a healthy outlet to release emotion and to escape whatever might be happening in the world at that time.  Applying the mental focus of staying in tune and in tempo relaxes the mind into a flow state where it becomes easy to let go of everything happening in your day and not. Music is an outlet for me and going deep with it means accessing and understanding the subconscious and sending out good vibrations into the universe. I love performing and collaborating. Check out samples of my recordings, some are experimental using BOSS RC-30 and Loop Pedal. And hit me up if you want to jam!",
  testimonials:
    "A small sample of numerous 5-star reviews I received for the wedding shoots I did in San Francisco's beautiful and historic City Hall building, a popular location that features abundant natural light and stunning classic architecture.",
  weddings:
    "For over 3 years, I worked as a portrait/wedding photographer and videographer. I started a business called SF City Hall Photo, which I sold to pursue coding full time. I also had many great moments creating and operating a custom photobooth at events and parties. I'm fortunate to have been invited to so many intimate moments in peoples lives.",
  truckHunt: {
    header: "Truck Hunt",
    tagline: "Order online from your favorite food trucks in SF",
    display: "right",
    github: "https://github.com/truck-hunters/TruckHunt",
    description:
      "Browse nearby food trucks in San Francisco, and order food ahead of time so that it's ready for pickup when you arrive. Vendors receive notifications when new orders are placed and manage payments and orders through the vendor portal.",
    accomplishments:
      "Personally responsible for integrating Stripe OAuth for allow vendors to create new accounts and accept payments. Additionally, I built out the front end authentication portal in React/Redux and was in charge of setting up our Node/Express backend. Also, I wrote a script to populate our PostgreSQL database with actual data from SF Open Data from displaying real-time truck data and validating food truck vendor permits upon signups. Finally, deployed to AWS using EC2 instances and RDS.",
    img: {
      alt: "Truck Hunt Screenshot",
      src:
        "http://dhmyyrxmn8ugc.cloudfront.net/portfolio/truckHunt/Trunk-Hunt-HQ.gif"
    },
    techStack: {
      mapbox: {
        src: mapbox,
        width: 70,
        height: 70,
        title: "Mapbox"
      },
      node: {
        src: node,
        width: 70,
        height: 70,
        title: "Node.js"
      },
      express: {
        src: expressjs,
        width: 70,
        height: 70,
        title: "Express.js"
      },
      postgres: {
        src: postgres,
        width: 70,
        height: 70,
        title: "PostgreSQL"
      },
      react: {
        src: react,
        width: 70,
        height: 70,
        title: "React.js"
      },
      redux: {
        src: redux,
        width: 70,
        height: 70,
        title: "Redux.js"
      },
      reactRouter: {
        src: reactRouter,
        width: 70,
        height: 70,
        title: "React-Router"
      },
      semantic: {
        src: semantic,
        width: 70,
        height: 70,
        title: "Semantic UI"
      }
    }
  },

  privateList: {
    header: "Private List",
    tagline: "Secret Message Society",
    github: "https://github.com/burt23/privateList",
    description:
      "Allows users to securely store lists and easily share them with friends via email or through secure access tokens. Designed for secure and anonymous communication of secure encrypted messages.",
    accomplishments:
      "This project highlights my passion for security and belief in the need for private messaging. Utilizing a React frontend with a Node/Express backend connected to a MySQL database, this application aims at following best practices in web security, while still providing users with a clean and intuitive UI/UX."
    // accomplishments: 'Personal project built in React with a Node/Express backend leveraging the Node Crypto library to hash and salt passwords, and to encrypt messages at rest in the SQL database.',
  },

  wizardsChess: {
    header: "Wizards Chess",
    tagline: "Voice Controlled Online Chess",
    display: "left",
    description:
      'Inspired by the book Harry Potter, this web application allows players to control the board via voice commands (i.e. "Queen to E9"). This is made possible by utilizing Google Chromes implementation of the Javascript Speech Recognition API.',
    accomplishments:
      "Responsible for deploying this application to AWS and styling the front end. For deployment, I configured an EC2 instance with an NGiNX reverse proxy for serving files from our Node/Express backend over TLS 1.2.  On the front end, I collaborated on creating wireframes and utilized the Material-UI library in creating the landing page and pre-game containers.",
    github: "https://github.com/twalk4821/wizardsChessAPI",
    img: {
      alt: "Wizards Chess Screenshot",
      src: wizscreenshot
    },
    techStack: {
      nginx: {
        src: nginx,
        width: 70,
        height: 70,
        title: "NGiNX"
      },
      node: {
        src: node,
        width: 70,
        height: 70,
        title: "Node.js"
      },
      material: {
        src: material,
        width: 70,
        height: 70,
        title: "Material-UI"
      },
      react: {
        src: react,
        width: 70,
        height: 70,
        title: "React.js"
      },
      express: {
        src: expressjs,
        width: 70,
        height: 70,
        title: "Express.js"
      },
      reactRouter: {
        src: reactRouter,
        height: 70,
        width: 70,
        title: "React-router"
      },
      redux: {
        src: redux,
        height: 70,
        width: 70,
        title: "Redux.js"
      },
      mic: {
        src: mic,
        width: 70,
        height: 70,
        title: "Google Chrome Speech API"
      }
    }
  },
  mobileEnerlytics: {
    header: "Mobile Enerlytics",
    tagline: "Leader in Automated Testing for Reducing Battery Drain",
    display: "left",
    link: 'https://www.mobileenerlytics.com',
    description:
      "Mobile Enerlytics provides advanced battery testing tools for Android app developers. Their platform taps directly into the Android kernel to monitor energy consumption at thread and component levels. Using this software, companies and developers can optimize battery life and write more energy efficient code.",
    accomplishments:
      "As the lead Frontend Developer for Mobile Enerlytics's Eagle Tester web dashboard, I participated in all aspects of a product lifecycle within an agile team, from co-creating user stories, iteratively designing wireframes, to writing code. I made heavy use of React, Redux, SCSS, React-Router, Material-UI, and Chart.js.",
    img: {
      alt: "Mobile Enerlytics Screenshot",
      src: mobilescreenshot
    },
    techStack: {
      redux: {
        src: redux,
        width: 70,
        height: 70,
        title: "Redux.js"
      },
      reactRouter: {
        src: reactRouter,
        width: 70,
        height: 70,
        title: "React-Router"
      },
      xd: {
        src: xd,
        width: 70,
        height: 70,
        title: "Adobe XD"
      },
      material: {
        src: material,
        width: 70,
        height: 70,
        title: "Material-UI"
      },
      html: {
        src: html,
        width: 80,
        height: 70,
        title: "HTML 5"
      },
      css3: {
        src: css3,
        width: 80,
        height: 70,
        title: "CSS 3"
      }
    }
  },
  photography: {
    color: {
      alt: "Color Photo Gallery",
      tag: "Full Spectrum",
      text:
        "a collection of digital long exposure shots of landscape, motion, and experimental photography.  Tribute paid in post to the pioneers of film photography"
    },
    bw: {
      alt: "Black and White Photo Gallery",
      tag: "Black & White",
      text:
        "Black and White Photo collection of digital images processed with silver film printing in mind.  A special emphasis on composition and message within each photo."
    },
    weddings: {
      alt: "Weddings Photo Gallery",
      tag: "Weddings",
      text:
        "couples of all creeds celebrating the union of love while honoring their commitments to one another"
    },
    engagements: {
      alt: "Engagement Photo Gallery",
      tag: "Portraiture",
      text:
        "Engagement shoots and portraits throughout the Bay Area.  Emphasis on capturing natural and spontaneous moments."
    }
  }
};

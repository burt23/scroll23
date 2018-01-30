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
    header:'Truck Hunt',
    tagline: 'Order online from your favorite food trucks in SF',
    github: 'https://github.com/truck-hunters/TruckHunt',
    description: "Browse nearby food trucks in San Francisco, and order food ahead of time so that it's ready for pickup when you arrive. Vendors receive notifications when new orders are placed and manage payments and orders through the vendor portal.",
    accomplishments: 'Personally responsible for integrating Stripe OAuth for allow vendors to create new accounts and accept payments. Additionally, I built out the front end authentication portal in React/Redux and was in charge of setting up our Node/Express backend. Also, I wrote a script to populate our PostgreSQL database with actual data from SF Open Data from displaying real-time truck data and validating food truck vendor permits upon signups. Finally, deployed to AWS using EC2 instances and RDS.',
    img: {
      alt: 'Wizards Chess Screenshot',
      src: 'https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2018-01-29+at+2.44.28+PM+(1).png'
      },
    links:[
    {
      header: "React/Redux",
      links: [
        "Dispatching Actions from Authentication Portal",
        "https://github.com/truck-hunters/TruckHunt/blob/master/client/src/containers/Login.jsx#L138-L154",
        "Using Isomorphic-Fetch and Redux",
        "https://github.com/truck-hunters/TruckHunt/blob/master/client/src/actions/signupActions.js#L45-L84"
      ]
    },
    {
      header: "Node/Express",
      links: [
        "Chaining Promises",
        "https://github.com/truck-hunters/TruckHunt/blob/master/server/routes/vendorSignup.js#L8-L31",
        "Writing readable API endpoints",
        "https://github.com/truck-hunters/TruckHunt/blob/master/server/server.js#L24-L50"
      ]
    },
    {
      header: "Stripe API",
      links: [
        "How to write Stripe OAUTH request parameters",
        "https://github.com/truck-hunters/TruckHunt/blob/master/server/routes/stripeAuthorization.js#L5-L30",
        "Passing OAUTH endpoint optional queries via state",
        "https://github.com/truck-hunters/TruckHunt/blob/master/server/routes/stripeCallback.js#L8"
      ]
    }
  ]},

  privateList: {
    header:'Private List',
    tagline: 'Secret Message Society',
    github: 'https://github.com/burt23/privateList',
    description: 'Allows users to securely store lists and easily share them with friends via email or through secure access tokens. Designed for secure and anonymous communication of secure encrypted messages.',
    accomplishments: 'This project highlights my passion for security and belief in the need for private messaging. Utilizing a React frontend with a Node/Express backend connected to a MySQL database, this application aims at following best practices in web security, while still providing users with a clean and intuitive UI/UX.',
    // accomplishments: 'Personal project built in React with a Node/Express backend leveraging the Node Crypto library to hash and salt passwords, and to encrypt messages at rest in the SQL database.',
    links: [{
      header: "MySQL",
      links: [
        "Writing SQL queries in Node",
        "https://github.com/burt23/360/blob/master/server/dbUtils.js#L14-L120",
        "Writing MySQL Schema's",
        "https://github.com/burt23/360/blob/master/server/schema.sql#L1-L27"
      ]
    },
    {
      header: "Crypto",
      links: [
        "Custom Crypto Express Middleware",
        "https://github.com/burt23/360/blob/master/server/middleware/hashPassNewUser.js#L29",
        "Understanding next() in Express",
        "https://github.com/burt23/360/blob/master/server/index.js#L26"
      ]
    },
    {
      header: "React",
      links: [
        "Conditionally rendering page views",
        "https://github.com/burt23/360/blob/master/react/src/index.jsx#L289",
        "Using jQuery Ajax in React",
        "https://github.com/burt23/360/blob/master/react/src/index.jsx#L242-L265"
      ]
    }
  ]},

  wizardsChess: {
    header:'Wizards Chess',
    tagline: 'Voice Controlled Online Chess',
    description: 'Inspired by the book Harry Potter, this web application allows players to control the board via voice commands (i.e. "Queen to E9"). This is made possible by utilizing Google Chromes implementation of the Javascript Speech Recognition API.', 
    accomplishments: "Responsible for deploying this application to AWS and styling the front end. For deployment, I configured an EC2 instance with an NGiNX reverse proxy for serving files from our Node/Express backend over TLS 1.2.  On the front end, I collaborated on creating wireframes and utilized the Material-UI library in creating the landing page and pre-game containers.",
    github: 'https://github.com/twalk4821/wizardsChessAPI',
    img: {
      alt: 'Wizards Chess Screenshot',
      src: 'https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2018-01-29+at+2.44.28+PM+(1).png'
      }
    },
  mobileEnerlytics: {
    header:'Mobile Enerlytics',
    tagline: 'Leader in Automated Testing for Reducing Battery Drain',
    description: "Leveraging nearly a decade’s worth of research into smart phone energy management, Mobile Enerlytics is a leader in mobile application testing solutions that lead to better app performance, user experience, and potentially billions of dollars in additional captured revenue. Today, the company works with some of the world’s leading app marketers, enhancing the performance of their apps through more efficient management of energy consumption.", 
    accomplishments: "Lead Frontend Developer on Greenfield project of an admin dashboard for enterprise B2B customers. Worked on creating user stories, and iteratively designed wireframes prior to coding. Made heavy use of Redux, Chart.js, React-Router, Material-UI, and SCSS.",
    img: {
      alt: 'Mobile Enerlytics Screenshot',
      src: 'https://s3-us-west-2.amazonaws.com/assets.michaelburton.co/Screen+Shot+2018-01-29+at+2.40.57+PM.png'
    }

  }
};

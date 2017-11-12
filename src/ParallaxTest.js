import React from "react";

import ScrollMagic from 'scrollmagic'

export default class ParallaxTestComponent extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={}


      // <div className="scrollable-container" style={{height: '95vh'}}>
  }

  render() {
    // init controller 
    const controller = new ScrollMagic.Controller();
     
    const Scene = new ScrollMagic.Scene({
            duration: 1000,  // the scene should last for a scroll distance of 100px 
            offset: 500   // start this scene after scrolling for 50px 
        })
        .setPin("#my-sticky-element") // pins the element for the the scene's duration 
        .addTo(controller); // assign the scene to the controller 
    // create a scene 
    return (
      <div>
        <controller />
      </div>
    );
  }
}

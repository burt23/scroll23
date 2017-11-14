import React from "react";
import Typist from "react-typist";

export default class TypistHero extends React.PureComponent {

  render() {
    return (
      <Typist>
        <span className="my-custom-class">
          <h1>Formally, people call me Michael Burton</h1>
        </span>
        <br />
        <div className="container">
          <h3>
            <p>I like technology, guitars, and motorcycles</p>
            <p>I'm here to create things for people to use and love</p>
          </h3>
        </div>
      </Typist>
    );
  }
}

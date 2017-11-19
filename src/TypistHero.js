import React from "react";
import Typist from "react-typist";

export default class TypistHero extends React.PureComponent {

  render() {
    return (
      <Typist>
        <span>
          <h1 className="typistHeader">Formally people call me Michael Burton</h1>
        </span>
        <br />
        <div className="typistContent">
          <h3 className="typistContent">
            I like technology, guitars, and motorcycles
            </h3>
            <h3 className="typistContent">
            I'm here to create things for people to use and love
          </h3>
        </div>
      </Typist>
    );
  }
}

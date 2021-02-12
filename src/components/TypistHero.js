import React from "react";
import Typist from "react-typist";

export default class TypistHero extends React.PureComponent {

  render() {
    return (
      <Typist>
        <br />
        <div className="typistContent">
          <h3 className="typistContent">
            JavaScript | HTML | CSS 
            </h3>
        </div>
      </Typist>
    );
  }
}

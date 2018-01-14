import React from "react";
import "../../styles/wizards.css";

export default class WizardsChessSVG extends React.PureComponent {
  render() {
    return (
      <svg id="wizSVG" width="100%" height="1.5em">
        <text id="wizText" text-anchor="middle" x="50%" y="50%">
          Wizards Chess
        </text>
      </svg>
    );
  }
}

import React from "react";
import "../../styles/truckHunt.css";

export default class TruckHuntSVG extends React.PureComponent {
  render() {
    return (
      <div className="truckHunt">
        <svg viewBox="0 0 600 100">
          <symbol id="s-text">
            <text text-anchor="middle" x="50%" y="50%" dy=".35em">
              TruckHunt
            </text>
          </symbol>
          <use class="text" xlinkHref="#s-text" />
          <use class="text" xlinkHref="#s-text" />
          <use class="text" xlinkHref="#s-text" />
          <use class="text" xlinkHref="#s-text" />
          <use class="text" xlinkHref="#s-text" />
        </svg>
      </div>
    );
  }
}

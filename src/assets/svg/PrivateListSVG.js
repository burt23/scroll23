import React from "react";
import "../../styles/privateList.css";

export default class PrivateListSVG extends React.PureComponent {
  render() {
    return (
      <h1 class="title" ariaTitle="Private List">
        <svg class="title-svg" width="100%" height="1.5em">
          <defs>
            <mask id="title-mask" x="0" y="0" width="100%" height="100%">
              <rect
                class="title-alpha"
                x="0"
                y="0"
                width="100%"
                height="100%"
              />
              <text class="title-text" x="50%" y="0" dy="1.15em">
                Private List
              </text>
            </mask>
          </defs>
          <rect class="title-bg" x="0" y="0" width="100%" height="100%" />
        </svg>
      </h1>
    );
  }
}

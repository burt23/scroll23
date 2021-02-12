import React from "react";

export default class DownArrows extends React.PureComponent {
  render() {
    return (
      <svg className="arrows">
        <path className="a1" d="M0 0 L30 32 L60 0" />
        <path className="a2" d="M0 20 L30 52 L60 20" />
        <path className="a3" d="M0 40 L30 72 L60 40" />
      </svg>
    );
  }
}

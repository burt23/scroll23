import React from "react";

export default class AppDescriptions extends React.PureComponent {
  render() {
    return (
      <div>
        <p className="projectDescription"> {this.props.description} </p>
        <p className="projectAccomplishments"> {this.props.accomplishments} </p>
      </div>
    );
  }
}

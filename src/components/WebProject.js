import React from "react";
import AppDescriptions from "./AppDescriptions";

export default class WebProject extends React.PureComponent {
  render() {

    console.log('this:', this)
    return (
      <div>
        <h1>{this.props.project.header}</h1>
        <div className="projectBannerImage">
              <img
                alt={this.props.project.img.alt}
                src={this.props.project.img.src}
              />
            </div>
        <h1 className="projectHeader">{this.props.project.tagline}</h1>
        <AppDescriptions
          accomplishments={this.props.project.accomplishments}
          description={this.props.project.description}
          links={this.props.project.links}
          github={this.props.project.github}
        />
      </div>
    );
  }
}

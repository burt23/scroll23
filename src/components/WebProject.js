import React from "react";
import AppDescriptions from "./AppDescriptions";
import Github from "../assets/svg/Github";

export default class WebProject extends React.PureComponent {
  render() {
    console.log("this:", this);
    return (
      <div className="proFlex">
        <div className="proLeft">
          <h1 className="projectHeader">{this.props.project.header}</h1>
          <h4 className="projectTagline">{this.props.project.tagline}</h4>
          <AppDescriptions
            accomplishments={this.props.project.accomplishments}
            description={this.props.project.description}
            links={this.props.project.links}
            github={this.props.project.github}
          />
        </div>
        <div className="proRight">
          <div className="projectBannerImage">
            <img
              alt={this.props.project.img.alt}
              src={this.props.project.img.src}
            />
          </div>
          <div className="projectGithub">
            <a
              href={this.props.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

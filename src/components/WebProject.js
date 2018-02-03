import React from "react";
import AppDescriptions from "./AppDescriptions";
import TechStack from "./TechStack";
import Github from "../assets/svg/Github";

export default class WebProject extends React.PureComponent {
  render() {
    console.log("this:", this);
    console.log("thistech statckjlee:", this.props.project.techStack);
    return (
      <div>
      <div className={this.props.project.display === 'left' ? "proFlex" : 'proFlex proFlexRight'} >
        <div className="proText">
          <h1 className="projectHeader">{this.props.project.header}</h1>
          <h4 className="projectTagline">{this.props.project.tagline}</h4>
          <AppDescriptions
            accomplishments={this.props.project.accomplishments}
            description={this.props.project.description}
          />
          <div className='projectGithub'>
            <Github />
          </div>
        </div>
        <div className="proImg proOdd">
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
              <TechStack 
                techStack={this.props.project.techStack}
              />
            </a>
          </div>
        </div>
      </div>
        <hr className='projectDivider' />
      </div>
    );
  }
}

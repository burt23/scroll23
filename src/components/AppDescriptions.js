import React from "react";
import Github from "../assets/svg/Github";

// const Items = items => {
//   return (
//     <li className="descriptionItem">
//       <h6>
//         <a href={items.list[1]}>{items.list[0]}</a>
//       </h6>
//       <h6>
//         <a href={items.list[3]}>{items.list[2]}</a>
//       </h6>
//     </li>
//   );
// };

export default class AppDescriptions extends React.PureComponent {
  render() {
    return (
      <div>
        <h4 className='projectDescription'> {this.props.description} </h4>
        <h4 className='projectAccomplishments'> {this.props.accomplishments} </h4>
        <div className="descriptionWrapper">
          {/*this.props.links.map(el => (
        <h3 class="codeSnippetsHeader">Code Snippets</h3>
            <div className="descriptionItem">
              <ul classname="descriptionColumn">
                <h5>{el.header}</h5>
                <Items list={el.links} />
              </ul>
            </div>
          ))*/}
        </div>
        <div className="projectGithub">
          <a href={this.props.github} target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
        </div>
      </div>
    );
  }
}

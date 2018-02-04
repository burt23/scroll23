import React from "react";
import _ from "underscore";

const TechStack = props => {
  console.log('this.props', this.props)

  return(
    <div>
      <h4 className='techstackHeader'> Tech Stack </h4>
      <div  className="techstackFlexbox">
        {_.map(props.techStack, (tech, id) => {
          let src = tech.src;

          return (
              <img
                key={src}
                className="techstackFlexitem"
                src={src}
                alt="alt"
                height={tech.width}
                width={tech.width}
                title='fucksas'
              />
          )
        })}
      </div>
    </div>

  );
};

export default TechStack;

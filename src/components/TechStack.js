import React from "react";
import _ from "underscore";

const TechStack = props => {

  return (
    <div>
      <h4 className="techstackHeader"> Tech Stack </h4>
      <div className="techstackFlexbox">
        {_.map(props.techStack, (tech, id) => {
          let src = tech.src;

          return (
            <img
              key={src}
              className="techstackFlexitem"
              src={src}
              alt={tech.title}
              height={tech.height}
              width={tech.width}
              title={tech.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;

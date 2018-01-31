import React from 'react';
import _ from 'underscore';
import Github from "../assets/svg/Github";
import TechIcons from '../assets/svg/TechIcons'

const techSVG = {
  github:  '<Github />',
}

const TechStack = (props) => {
  console.log('props', props)
  return _.map(props.techStack, (src,alt)=>{
    console.log('src', src)
    console.log('alt', alt)
    return(
      <div>
    <h1>{src}</h1>
    <img src={src} alt={alt} />
    </div>

      )
  } 

    
  )
}

export default TechStack;
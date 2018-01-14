import React from 'react'
import AppDescriptions from './AppDescriptions';

export default class WebProject extends React.PureComponent {
  render(){
    return(
      <div>
        <h1 className='projectHeader'>{this.props.tagline}</h1>
        <AppDescriptions accomplishments={this.props.accomplishments} description={this.props.description} links={this.props.links} github={this.props.github} />
      </div>
    )
  }
}
import React from "react";
import Typist from "react-typist";

export default class TypistHero extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     messages: [
  //       "coder",
  //       "photographer",
  //       "musician",
  //       "human",
  //       "designer",
  //       "programmer"
  //     ],
  //     currentMessage: "coder",
  //     counter: 1
  //   };
  //   this.init = this.init.bind(this);
  //   this.updateMessage = this.updateMessage.bind(this);
  // }
  // componentDidMount() {
  //   this.updateMessage();
  // }
  // componentWillUpdate(){

  // }
  // updateMessage() {
  //   console.log("updating message typist hero", this.state.currentMessage);
  //   setInterval(this.init, 4000);
  // }
  // init() {
  //   console.log("currentMessage TypistHero", this.state.currentMessage);
  //   this.setState({
  //     currentMessage: this.state.messages[this.state.counter],
  //     counter:
  //       this.state.counter < this.state.messages.length - 1
  //         ? this.state.counter + 1
  //         : 0
  //   });
  // }
  render() {
    return (
      <Typist>
        <h2>hasfd{this.props.currentMessage}</h2>
      </Typist>
    );
  }
}

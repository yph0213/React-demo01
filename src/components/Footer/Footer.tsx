import React from "react";

export default class Footer extends React.Component {
  state = {
    text: "这是公共Footer!"
  };
  render() {
    return <div>{this.state.text}</div>;
  }
}

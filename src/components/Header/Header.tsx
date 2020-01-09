import React from "react";

export default class Header extends React.Component {
  state = {
    text: "这是公共Header!"
  };
  render() {
    return <div>{this.state.text}</div>;
  }
}

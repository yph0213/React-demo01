import React from "react";
export default class Header extends React.Component<{}, { msg: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      msg: "123"
    };
  }

  render() {
    return <div>{this.state.msg}</div>;
  }
}

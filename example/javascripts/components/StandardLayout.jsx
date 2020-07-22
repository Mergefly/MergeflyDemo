import React from "react";

export default class StandardLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  componentDidMount() {
    this.setState({ text: "This is the standard layout" });
  }

  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

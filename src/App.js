import { Component } from "react";

import "./styles.css";

class App extends Component {
  state = { w: "Subscribe" };

  check = () => {
    const { w } = this.state;
    if (w === "Subscribe") {
      this.setState((prevState) => ({ w: "Subscribed" }));
    } else {
      this.setState((prevState) => ({ w: "Subscribe" }));
    }
  };

  render() {
    const { w } = this.state;
    return (
      <div className="f">
        <h1>Bunny</h1>
        <p>jhbhjwbxh</p>
        <button onClick={this.check}> {w}</button>
      </div>
    );
  }
}

export default App;

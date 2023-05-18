import "../styles/App.css";

import React, { Component } from "react";
import Board from "../components/Board";
import ResponsiveAppBar from "../components/AppBar";
class App extends Component {
  render() {
    let imageStyle = {
      height: "100%",
      width: "100%",
      backgroundImage:
      'url("https://images2.alphacoders.com/238/thumb-1920-238870.jpg")',
      backgroundSize: "cover",
      overflowX: "scroll",
      overflowX: "hidden",
      background: "linear-gradient( rgba(0, 0, 0, 0.5)",
   };

    return (
      <div className="App">
        <div class = "image" style = {imageStyle}>
          <ResponsiveAppBar/>
          <div className="center">
            <Board />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
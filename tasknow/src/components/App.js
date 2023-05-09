import "../styles/App.css";

import React, { Component } from "react";
import Board from "./Board";
class App extends Component {
  render() {
    let imageStyle = {
      height: "100%",
      width: "100%",
      backgroundImage:
      'url("https://images2.alphacoders.com/238/thumb-1920-238870.jpg")',
      backgroundSize: "cover",
      background: "linear-gradient( rgba(0, 0, 0, 0.5)",
   };

    return (
      <div className="App">
        <div class = "image" style = {imageStyle}>
        <div className="Header">TaskNow</div>
        
          <div className="center">
            <Board />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
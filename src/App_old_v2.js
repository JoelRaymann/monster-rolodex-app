import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      hidden: false,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello
            <span> {this.state.name}. Welcome to React</span>
          </p>
          <a
            className="App-link"
            href="https://www.reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className="form-control" hidden={this.state.hidden}>
            <label for="name">Enter your Name: </label>
            <input
              className="text-class"
              type="text"
              name="name"
              id="textBox"
              placeholder="John Doe"
              onInput={() => {
                this.setState({
                  name: document.querySelector("#textBox").value,
                });
              }}
            ></input>
            <button
              className="button-class"
              onClick={() => {
                let name = document.querySelector("#textBox").value;
                this.setState({
                  name: name,
                  hidden: true,
                });
              }}
            >
              Enter
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;

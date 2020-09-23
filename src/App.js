import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Ready",
      counter: 0,
      theme: "secondary"
    };
  }

  handleEvent = (event) => {
    event.persist();
    this.setState({ 
      counter: this.state.counter + 1,
      theme: event.target.innerText === "Normal" ? "primary" : "danger"
      }, () => this.setState({ message: `${event.type}: ${this.state.counter}` }));
  }

  render() {
    return (
      <div className="m-2">
        <div className={ `h4 bg-${this.state.theme} text-white text-center p-2` }>
          { this.state.message }
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={ this.handleEvent }
          >
            Normal
          </button>
          <button
            className="btn btn-danger"
            onClick={ this.handleEvent }
          >
            Danger
          </button>
        </div>
      </div>
    )
  }
}

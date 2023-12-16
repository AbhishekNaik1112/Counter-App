import { Component } from "react";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  incNum = () => {
    this.setState((prevState) => ({ num: prevState.num + 1 }));
  };

  decNum = () => {
    this.setState((prevState) => ({
      num: prevState.num > 0 ? prevState.num - 1 : 0,
    }));
  };

  reset = () => {
    this.setState({ num: 0 });
  };

  render() {
    const { num } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <h1>Counter-App</h1>
            <h2>{num}</h2>

            <button onClick={this.incNum} className="inc">
              +
            </button>
            <button onClick={this.decNum} className="dec">
              -
            </button>
            <button onClick={this.reset} className="reset">
              Reset
            </button>
          </div>
        </header>
      </div>
    );
  }
}



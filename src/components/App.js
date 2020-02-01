import React from 'react';
import '../main.css';
import Pyramid from './Pyramid';
import Pass from "./Pass";
import Error from "./Error";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      random: Math.floor((Math.random() * 100) + 1),
      random1: Math.floor((Math.random() * 100) + 1),
      random2: Math.floor((Math.random() * 100) + 1),
      row1: null,
      row2: null

    }
  }

  keyPressed = async (e) => {
    if (e.key === "Enter") {
      await this.setState({
        value: Number(e.target.value)
      })
      this.output();
    }
  }

  output = async () => {
    const { value, random, random1, random2 } = this.state;
    let sum = value + random1;
    if (random === sum) {
      await this.setState({
        row2: value + random2,
      });
      await this.setState({
        row1: Number(this.state.row2) + random
      });
    }
    else {
      console.log("Error! Enter the correct matching number");
    }
  }

  render() {
    const { value, random, random1, random2, row1, row2 } = this.state;
    const sum = value + random1;
    let result;
    if (sum === random) {
      result = <Pass />;
    }
    else if (value === "") {
      result = <div><br /><br /><br /><br /><br /></div>;
    }
    else if (sum !== random) {
      result = <Error />;

    }
    return (
      <center>
        <br />
        <h1 className=" main animated rotateInUpRight">MAGIC BOX</h1>
        <Pyramid value={value} random={random} random1={random1} random2={random2} row1={row1} row2={row2} />
        <div className="span">
          <label className="label is-large">Enter the number</label>
          <input className="input is-rounded" type="text" placeholder="Eg.2" onKeyPress={this.keyPressed}></input>
        </div>
        {result}
      </center>
    );
  }
}

export default App;

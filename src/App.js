import React, { Component } from "react";
import "./App.css";
import Box from "./components/Box";


const CHOICES = {
  scissors: {
    name: "scissors",
    url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png",
  },
  paper: {
    name: "paper",
    url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  },
  rock: {
    name: "rock",
    url:
      "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  },
};

export default class App extends Component {
  constructor(props) {
    // initialize
    super(props); // set props for parents as well
    this.state = {
      userC: {},
      computerC: {},
      result:""
      
    };
  }

  onplay = (userChoice) => {
    // computer choosing logic should be here
    //computer choose random item
    let itemArray = Object.keys(CHOICES); // get the key from the object and make it as a array
    let randomNum = Math.floor(Math.random() * itemArray.length); // 0~2
    let itemName = itemArray[randomNum];
    let computerC = CHOICES[itemName];

    this.setState({ userC: CHOICES[userChoice], computerC: CHOICES[itemName] });
    console.log("computer choice ", computerC);
    console.log("user choice: ", userChoice)

    
    if (userChoice === "rock") {
        this.state.result.setState( computerC === "scissors" ? "Victory!" : "Defeat!");
      }
      if (userChoice === "paper") {
        this.result = computerC === "rock" ? "Victory!" : "Defeat!";
      }
      if (userChoice === "scissors") {
        this.result = computerC === "paper" ? "Victory!" : "Defeat!";
      }
      if (userChoice === computerC) this.result = "Tie game!";
        
    }


    
  render() {
    return (
      <div>
        <Box title="YOU" choice={this.state.userC}   />
        <div>
          <button onClick={() => this.onplay("rock")}>Rock</button>
          <button onClick={() => this.onplay("paper")}>Paper</button>
          <button onClick={() => this.onplay("scissors")}>Scissors</button>
        </div>
        <Box title="COMPUTER" choice={this.state.computerC} />
      </div>
    )
  }
}

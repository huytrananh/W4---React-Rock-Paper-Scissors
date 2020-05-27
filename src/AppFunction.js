import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css'
import Box from './components/Box.js'

export const CHOICES = {
  scissors: {
    name: "scissors",
    url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
  },
  paper: {
    name: "paper",
    url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
  },
  rock: {
    name: "rock",
    url:
      "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
  }
}

export default function AppFunction() {
   let [playerResult,setPlayerResult]=useState("result")
   let [AIResult,setAIResult]=useState("result")
  let result=""
  let [userC, setUserC] = useState({}) //state
  let [computerC, setComputerC] = useState({}) //state
  let [history,setHistory] = useState([])
  const [pressed, setPressed] = useState(false)

  const onPlay = (userChoice) => {
    console.log("clicked", userChoice)
    setUserC(CHOICES[userChoice])
    console.log('User choice OBJ: ', userC)
    // computer choosing logic
    let itemArray = Object.keys(CHOICES) // get the key from the object and make it an array
    console.log('Item Array', itemArray)
    let randomNum = Math.floor(Math.random() * itemArray.length) // 0-2
    console.log('random number: ',randomNum)
    let itemName = itemArray[randomNum] //have already random number, put random number in array that has names to get RANDOM NAME
    console.log('whats the item name: ', itemName)
    setComputerC(CHOICES[itemName]) //use random name to get the random object with URL to display image
    console.log('Computer choice: ', computerC)

    if (userChoice === "rock") {
      result = itemName === "scissors" ? "Victory!" : "Defeat!"
    }
    if (userChoice === "paper") {
      result = itemName === "rock" ? "Victory!" : "Defeat!"
    }
    if (userChoice === "scissors") {
      result = itemName === "paper" ? "Victory!" : "Defeat!"
    }
    if (userChoice === itemName) 
      result="Tie game!"


      console.log(result,"dsauifchsidufsuidjvbgkjdfgdhf")
      showPlayerResult(result)
      showAIResult(result)
      history.push(result)
      setHistory(history)

      
    }
    console.log(history)

  function showPlayerResult(result){
    console.log(result,"player")
    if(result==="Victory!"){
      setPlayerResult("won")
    }else if(result==="Defeat!"){
      setPlayerResult("lose")
    }else if(result==="Tie game!"){
      setPlayerResult("tie")
    }
  }

  function showAIResult(result){
    console.log(result,"AI")
    if(result==="Victory!"){
     setAIResult("lose")
    }else if(result==="Defeat!"){
      setAIResult("won")
    }else if(result==="Tie game!"){
      setAIResult("tie")
    }
  }

  if (!pressed) {
    return <button onClick={() => setPressed(true)}>Start</button>
  }

  return (
    <div className="App" choice={userC}>
      <Box title="YOU" choice={userC} result={playerResult} />
      <div>
        <button onClick={() => onPlay('rock')}>Rock</button>
        <button onClick={() => onPlay('paper')}>Paper</button>
        <button onClick={() => onPlay('scissors')}>Scissors</button>
      </div>
      <Box title="COMPUTER" choice={computerC} result={AIResult}/>
      <div>
        <ul>{ history.map(elm => <li>{elm}</li>) }</ul>
      </div>
    </div>
  )
    

  }

  



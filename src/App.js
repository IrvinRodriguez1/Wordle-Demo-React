import { useState, useEffect } from "react";
import Board from "./component/Board";
import WordInput from './component/WordInput';
import Instructions from "./component/Instructions";
import './App.css'
let data = require('./data/wordSorted.json')

const answer = data[Math.floor(Math.random()*data.length)];

const App=()=>{
  const [wordGuessed, setWordGuessed] = useState('')
  const [counter, setCounter] = useState(0)
  
  console.log('Left this on purpose , Here is the answer: ' + answer)
  function wordUserGuessed(word){
    if(word!==wordGuessed && wordGuessed !== answer && counter<6){
      setWordGuessed(word)
      setCounter(counter + 1)
      
    }
     
  }

  
  return(
    <div className='app-container'>
      <h1>Wordle Demo</h1>
       <WordInput wordUserGuessed={wordUserGuessed}/>
       <Board wordGuessed={wordGuessed} correctWord={answer} counter={counter} setCounter={setCounter}/>
       <Instructions/>
    </div>
   
    )
}

export default App;
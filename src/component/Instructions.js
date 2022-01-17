import Tile from "./Tile"
import './Instructions.css'

const Instructions=()=>{
  let greenExample = []
  let greenWord='GAMER'
  for(let i=0;i<greenWord.length;i++){
      greenExample.push(<Tile key={`${Math.random()}`} letter={greenWord[i]} color={i===1 ? 'green':''}/>) 
    }
      
  let yellowExample =[]
  let yellowWord = 'TIMES'
  for(let i=0;i<yellowWord.length;i++){
    yellowExample.push(<Tile key={`${Math.random()}`} letter={yellowWord[i]} color={i===2 ? 'yellow':''}/>) 
  }

  let grayExample=[]
  let grayWord='REACT'

  for(let i=0;i<grayWord.length;i++){
    grayExample.push(<Tile key={`${Math.random()}`} letter={grayWord[i]} color={i===3 ? 'gray':''}/>) 
  } 
  
  return(
    <div>
      <h2>Instructions</h2>
      <p> Guess the <strong>WORDLE</strong> in 6 tries.</p>
      <p>After each guess, the color of the tiles will change to show how close</p>
      <p>your guess was to the word</p>
      <h3>Examples:</h3>
      <div className='example'> {greenExample}</div>
        <p>The letter <strong>A</strong> is in the word and in the correct spot.</p>
        <div className='example'> {yellowExample}</div>
        <p>The letter <strong>M</strong> is in the word but in the wrong spot.</p>
        <div className='example'> {grayExample}</div>
        <p>The letter <strong>C</strong> is not in the word in any spot.</p>
    </div>
    )
}

export default Instructions
import { useEffect, useState } from 'react';
import Tile from './Tile';
import Header from './Header';
import './Board.css'


const Board = ({wordGuessed, correctWord, counter, setCounter})=>{
 const [board, setBoard] = useState([])
 const [answer, setAnswer] = useState({})
 const [message, setMessage]= useState('Guesses Left: ')

  
  useEffect(()=>{
    let tempBoard=[]
    let tempRow = []
  if(wordGuessed.length===5){

     for(let i=0; i<wordGuessed.length;i++){
      let tempLetter ={}
       let char = wordGuessed[i]
        tempLetter={letter:char}
       if(answer[char]){
         for(let answerCharIndex of answer[char]){
           if(answerCharIndex === i){
             tempLetter.color='green'
           }
         }
         if(!tempLetter.color){
           tempLetter.color='yellow'
         }
       }else{
         tempLetter.color='grey';
       }

       tempRow.push(<Tile key={`${Math.random()}`} letter={tempLetter.letter.toUpperCase()} color={tempLetter.color}/>)
       tempBoard=board.map(element=>element);
       tempBoard[counter-1]=tempRow;
       setBoard( tempBoard)
       if(correctWord===wordGuessed){
        setMessage('You win')
        setCounter(6)
       }
       if(correctWord!==wordGuessed && counter ===6){
         setMessage(`The Answer Was: ${correctWord.toUpperCase()}`)
       }
     }

  }
},[wordGuessed])

  useEffect(()=>{
    let tempAnswer ={}
    for(let i=0; i<correctWord.length;i++){
      if(tempAnswer[correctWord[i]]){
        tempAnswer[correctWord[i]].push(i)
      }else{
        tempAnswer[correctWord[i]]= [i]
      }
    }
      
      setAnswer(tempAnswer)
    let tempBoard =[]
    for(let i=0;i<6;i++){
      let arr=[]
      for(let j=0;j<5;j++){
        arr.push(<Tile key={`${i} ${j}`} letter={''}/>)
      }
      tempBoard.push(arr)
      setBoard(tempBoard)
    }
    
  },[])


  
return(

  <div className='board-container'>
    <Header message={message} counter={counter}/>
     <div className='container '>
    
      {board}
     </div>
  </div>
 
)
}

export default Board;
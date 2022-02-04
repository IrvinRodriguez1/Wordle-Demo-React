import {useState} from 'react'
import binarySearch from '../helperFunctions/binarySearch'
import './WordInput.css'



const WordInput=({wordUserGuessed})=>{
  
  const onSubmit =(e)=>{
    e.preventDefault()
    let wordInput = e.target[0].value
    if(binarySearch(wordInput)){
      
      wordUserGuessed(wordInput)
      e.target[0].value=''
    }else{
      console.log('Word not found in our word database make sure its 5 letter word')
    }
    
  }

  return(
    <form className="user-input" onSubmit={onSubmit}>
      <label htmlFor='user-input'>My guess: </label>
      <input type='text' id='user-input' name='user-input' />
      <button type='submit'>Submit</button>
    </form>
    )
}

export default WordInput;
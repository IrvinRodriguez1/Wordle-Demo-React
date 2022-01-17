import {useState} from 'react'
import './WordInput.css'

const WordInput=({wordUserGuessed})=>{
  const[inputValue, setInputValue]=useState('')
  const onSubmit =(e)=>{
    e.preventDefault()
    if(e.target[0].value.length===5){
      
      wordUserGuessed(e.target[0].value)
      e.target[0].value=''
    }else{
      console.log('word not 5 characters long')
    }
    
  }

  return(
    <form className="user-input" onSubmit={onSubmit}>
      <label htmlFor='user-input'>My guess:</label>
      <input type='text' id='user-input' name='user-input' />
      <button type='submit'>Submit</button>
    </form>
    )
}

export default WordInput;
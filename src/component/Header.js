
const Header=({message, counter})=>{
let guessesLeft = 6-counter;
  return (
    <div>
      <h1>{message} {guessesLeft ? guessesLeft:''}</h1>
      
      </div>

  
    )
}

export default Header
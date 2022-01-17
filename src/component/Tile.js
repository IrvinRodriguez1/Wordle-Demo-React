import './Tile.css'

const Tile=(props)=>{

  return(
    <div className={`tile`}  style={{backgroundColor:`${!props.color ? '':props.color}`}}>
      {props.letter}
    </div>
      )
}

export default Tile;
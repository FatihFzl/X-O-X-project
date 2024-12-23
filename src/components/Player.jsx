import {useState} from 'react';

export default function Player({initialName, symbol , isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function editHandler(){
     setIsEditing((editing) => !editing);

     if( isEditing) {
      onChangeName(symbol, playerName);
     }
    }

    function nameChanger(event) {    
        setPlayerName(event.target.value);  
    }
  
   let editablePlayerName = <span className='player_name'>{playerName} </span>

   if(isEditing) {
    editablePlayerName = (
        <input type = "text" required value = {playerName} onChange={nameChanger}/>
    ); 
   }

  return (
  <li className={isActive ? 'active' : undefined}>
  <span className='player'> 
   {editablePlayerName}
   <span className='player_symbol'>{symbol}</span>
  </span>
  <button onClick= {editHandler}>{isEditing ? 'Save' : 'Edit'}</button>
</li>
  )
}
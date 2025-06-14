import { useRef, useState } from "react";

export default function Player() {

  const playerNameInput = useRef();
  
  const [enteredPlayeName, setEnteredPlayerName] = useState(null);
  
  function handleClick(){    
    setEnteredPlayerName(playerNameInput.current.value);    
    playerNameInput.current.value =  '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayeName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerNameInput}  type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

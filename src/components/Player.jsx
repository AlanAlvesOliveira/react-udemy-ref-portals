import { useState } from "react";

export default function Player() {

  const [enteredPlayeName, setEnteredPlayerName] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setSubmitted(false)
    setEnteredPlayerName(event.target.value);
  }

  function handleClick(){
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayeName: 'unknown entity'}</h2>
      <p>
        <input onChange={handleChange}  type="text" value={enteredPlayeName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

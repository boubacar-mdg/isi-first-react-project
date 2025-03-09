import React, { useState } from 'react'

function UseState() {
 const [state, setState] = useState("Dimanche");
 const [count, setCount] = useState(0);

 function changeDayName() {
    //state = "Lundi";
    setState("Mercredi");
 }

 function increment(){
    //count = count + 1;
    //setCount(count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
 }

  return (
    <div>
        <p>Etat actuel: {state}</p>
        <button onClick={changeDayName}>Changer l'état</button>

        <br />

        <p>Count: {count}</p>
        <button onClick={increment}>Incrementer</button>

    </div>
  )
}

export default UseState
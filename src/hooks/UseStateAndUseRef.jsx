import { useState, useEffect, useRef } from "react";

function UseStateAndUseRef() {
  const [input, setInput] = useState("");

  const inputRef = useRef();
  const inputRefSecond = useRef();

  useEffect(() => {
      console.log("Ce useEffect s'exécute tout le temps");
  });

  function submitForm() {
    console.log("Texte du champs: ", input);
    console.log("Texte du champs: ", inputRef.current.value);
    console.log("Texte du champs: ", inputRefSecond.current.value);
  }

  return (
    <>
    <div>
      <p>Recuperation du texte avec useState</p>
      <input
        type="text"
        placeholder="Champs de texte"
        onChange={(e) => setInput(e.target.value)}
        ref={inputRefSecond}
      />

      <p>Texte du champs:  <br /> {input}</p>
    </div>

    <div>
    <p>Recuperation du texte avec useRef</p>
      <input
        type="text"
        placeholder="Champs de texte"
        ref={inputRef}
      />

    </div>

    <button onClick={submitForm}>Soumettre</button>
    </>
  );
}

export default UseStateAndUseRef;

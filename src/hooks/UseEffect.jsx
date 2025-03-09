import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((count) => count + 1);
  }

  // Montage
  useEffect(() => {
    console.log("Le composant App a été monté");
  }, []);

  // Mise à jour
  useEffect(() => {
    console.log("Le composant App a été mis à jour");
  }, [count]);

  // Sans second paramètre, le useEffect s'exécute à chaque fois que le composant est rendu
  useEffect(() => {
    console.log("Ce useEffect s'exécute tout le temps");
  });

  // Démontage
  useEffect(() => {
    console.log("Le composant App a été rendu");
     // Cette fonction "return" s'exécute au démontage du composant
     return () => {
        console.log("Le composant App a été démonté");
      };
  }, [count]);

  

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Incrementer</button>
    </div>
  );
}

export default UseEffect;

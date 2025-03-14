import React from "react";

function Etudiant({ nomClasse, responsable, set }) {
  const { nom, age } = responsable;
  return (
    <>
      <div>
        L'étudiant {nom} agé de {age} an{age > 1 ? "s" : ""} est responsable de{" "}
        {nomClasse}
      </div>
      <button onClick={() => set({...responsable, age: 23})}>Changer age</button>
    </>
  );
}

export default Etudiant;

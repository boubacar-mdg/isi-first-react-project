import React, { useState } from "react";
import Etudiant from "./Etudiant";

function Classe() {
  const [responsable, setResponsable] = useState({
    nom: "M. Dupont",
    prenom: "Jean",
    age: 22,
  });
  return (
    <>
      <Etudiant nomClasse="M1 DSIA" responsable={responsable} set={setResponsable} />
    </>
  );
}

export default Classe;

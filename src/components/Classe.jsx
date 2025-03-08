import React from 'react'
import Etudiant from './Etudiant'

function Classe() {
    const responsable = {
        nom: "M. Dupont",
        prenom: "Jean",
        age: 45,
    }
  return (
    <>
        <Etudiant nomClasse="M1 DSIA" responsable={responsable} />
    </>
  )
}

export default Classe
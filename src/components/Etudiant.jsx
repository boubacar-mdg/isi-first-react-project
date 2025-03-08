import React from 'react'

function Etudiant({nomClasse, responsable}) {

const {nom} = responsable
  return (
    <div>L'étudiant {nom} est responsable de {nomClasse}</div>
  )
}

export default Etudiant
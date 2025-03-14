import React from 'react'
import Fetch from './fetch/Fetch'
import UseContext from './hooks/UseContext'
import { Route, Routes } from 'react-router-dom'
import Classe from './components/Classe'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Accueil</h1>} />
        <Route path="/boite" element={<h1>Boite à outil</h1>} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/usecontext" element={<UseContext />} />
        <Route path="/classe" element={<Classe />} />
        <Route path="*" element={<h1>404 ERREUR</h1>} />
      </Routes>
    </>
  )
}

export default App
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Home from './pages/home.jsx'
import AtividadeHistoria from './pages/criarAtividade.jsx'
import Grupo from './pages/grupo.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/atividade-historia' element={<AtividadeHistoria />} />
        <Route path='/grupo' element={<Grupo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

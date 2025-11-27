import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Home from './pages/home.jsx'
import Chat from './pages/chat.jsx'
import Grupo from './pages/grupo.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/chat">Chat</Link> |{" "}
        <Link to="/grupo">Grupo</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/grupo' element={<Grupo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/homepage/HomePage"
import Audiobooks from "./pages/audiobooks/Audiobooks"
import Player from "./pages/player/Player"
import './App.css'


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={
          <HomePage />
        }/>
        <Route path="/audiobooks" element={
          <Audiobooks />
        }/>
        <Route path="/player/:id" element={
          <Player />
        }/>
      </Routes>
    </>
  )
}

export default App

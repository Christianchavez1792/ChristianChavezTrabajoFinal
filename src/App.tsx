import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home"
import Favoritos from "../src/pages/Favoritos/Favoritos"
import Categorias from "../src/pages/Categorías/Categorías"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

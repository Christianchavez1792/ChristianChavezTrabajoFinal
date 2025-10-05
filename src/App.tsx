import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home"
import PaginaFavoritos from "./pages/favoritos/paginafavoritos"
import PaginaCategorias from './pages/categorias/paginacategorias';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<PaginaCategorias />} />
        <Route path="/favoritos" element={<PaginaFavoritos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

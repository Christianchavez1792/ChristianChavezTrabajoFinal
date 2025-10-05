import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home"
import PaginaFavoritos from "./pages/favoritos/paginafavoritos"
import PaginaCategorias from './pages/categorias/paginacategorias';
import PaginaVideo from './pages/video/PaginaVideo';
import PaginaIngresar from './pages/ingresar/paginaingresar';
import ScrollToTop from "./components/scrolltop";

function App() {

  return (

    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<PaginaCategorias />} />
        <Route path="/favoritos" element={<PaginaFavoritos />} />
        <Route path="/video/:id" element={<PaginaVideo />} />
        <Route path="/ingresar" element={<PaginaIngresar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

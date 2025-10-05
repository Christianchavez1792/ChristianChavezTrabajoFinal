import Header from "../../layouts/header/header";
import HeroCarrusel from "../../components/HeroCarrusel"
import SeccionCategoriasCategorias from "./seccioncategorias-Categorias"
import Footer from "../../layouts/footer/footer"
import { FavoritesProvider } from "../../components/Contexto/ContextoFavoritos"


const PaginaCategorias = () => {

    return (
        <FavoritesProvider>
            <div className='overflow-x-hidden'>
                <Header />
                <HeroCarrusel />
                <SeccionCategoriasCategorias />
                <Footer />
            </div>
        </FavoritesProvider>
    )
}

export default PaginaCategorias;
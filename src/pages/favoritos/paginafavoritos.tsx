import Header from "../../layouts/header/header";
import HeroCarrusel from "../../components/HeroCarrusel";
import Favoritos from "../../components/HeroFavoritos";
import Footer from "../../layouts/footer/footer"
import { FavoritesProvider } from "../../components/Contexto/ContextoFavoritos"

const PaginaFavoritos = () => {

    return (
        <FavoritesProvider>
            <div className='overflow-x-hidden'>
                <Header />
                <HeroCarrusel />
                <Favoritos />
                <Footer />
            </div>
        </FavoritesProvider>
    )
}

export default PaginaFavoritos;
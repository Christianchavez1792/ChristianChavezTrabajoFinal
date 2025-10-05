import Header from "../../layouts/header/header";
import Footer from "../../layouts/footer/footer"
import { FavoritesProvider } from "../../components/Contexto/ContextoFavoritos"
import HeroVideo from "../../components/HeroVideo"


const PaginaVideo = () => {

    return (
        <FavoritesProvider>
            <div className='overflow-x-hidden'>
                <Header />
                <HeroVideo />
                <Footer />
            </div>
        </FavoritesProvider>
    )
}

export default PaginaVideo;
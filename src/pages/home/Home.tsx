import Header from "../../layouts/header/header";
import Hero from "../../layouts/hero/hero"
import { FavoritesProvider } from "../../components/Contexto/ContextoFavoritos"

const Home = () => {

    return (
        <FavoritesProvider>
            <div className='overflow-x-hidden'>
                <Header />
                <Hero />
            </div>
        </FavoritesProvider>
    )
}

export default Home;
import Header from "../../layouts/header/header";
import Favoritos2 from "../../layouts/hero/herofavoritos2"
import bdcursos from "../../data/videos.json"
import { FavoritesProvider } from "../../components/Contexto/ContextoFavoritos"

function FavoritosContent() {
    const { isFavorite } = useFavorites();
    const cursosFavoritos = bdcursos.cursos.some(curso => isFavorite(curso.id));
    if (cursosFavoritos.length ===0){
        return null;
    }

    return (
        <section>
            <Favoritos2 cursosFavoritos={cursosFavoritos}/>
        </section>
    )
}

function Favoritos(){
    return (
        <FavoritesProvider>
            <div className='overflow-x-hidden'>
                <Header />
                <FavoritosContent />
            </div>
        </FavoritesProvider>
    )
}

export default Favoritos;
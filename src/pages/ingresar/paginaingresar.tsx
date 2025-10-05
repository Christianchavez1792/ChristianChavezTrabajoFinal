import Header from "../../layouts/header/header";
import Footer from "../../layouts/footer/footer";
import FormularioIngreso from "./formularioingreso"
import { FavoritesProvider } from "../../components/Contexto/ContextoFavoritos"


const PaginaIngresar = () => {

    return (
        <FavoritesProvider>
            <div className='overflow-x-hidden'>
                <Header />
                <FormularioIngreso />
                <Footer />
            </div>
        </FavoritesProvider>
    )
}

export default PaginaIngresar;
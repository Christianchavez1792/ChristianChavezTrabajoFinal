import HeroCarrusel from "../../components/HeroCarrusel";
import SeccionCategoriasHome from "../../pages/home/SeccionCategoriasHome";
import Favoritos from "../../components/HeroFavoritos";

function Hero() {

    return (
        <div>
            <section>
                <HeroCarrusel />
            </section>
            <section>
                <Favoritos />
            </section>
            <section>
                <SeccionCategoriasHome />
            </section>
        </div>
    );
}


export default Hero;
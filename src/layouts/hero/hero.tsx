import HeroCarrusel from "../../components/HeroCarrusel";
import HeroCategorias from "../../components/HeroCategorias";
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
                <HeroCategorias />
            </section>
        </div>
    );
}


export default Hero;
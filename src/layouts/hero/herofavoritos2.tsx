import TarjetaCurso from '../../components/TarjetaCursos/TarjetaCursos';
import { useFavorites } from "../../components/Contexto/ContextoFavoritos";

interface Favoritos2Props {
    cursosFavoritos: any[];
}

const Favoritos2 = ({ cursosFavoritos }: Favoritos2Props) => {
    const { isFavorite, addFavorite, removeFavorite } = useFavorites();

    const handleToggleFavorite = (id: number) => {
        if (isFavorite(id)) {
            removeFavorite(id);
        } else {
            addFavorite(id);
        }
    };

    if (cursosFavoritos.length === 0) {
        return null;
    }

    return (
        <section className="bg-[#13162E] py-8 px-4 md:px-8 lg:px-16">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">
                ⭐ Mis Cursos Favoritos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cursosFavoritos.map((curso) => (
                    <TarjetaCurso
                        key={curso.id}
                        {...curso}
                        isFavorite={isFavorite(curso.id)}
                        onToggleFavorite={handleToggleFavorite}
                    />
                ))}
            </div>
        </section>
    );
};

export default Favoritos2;
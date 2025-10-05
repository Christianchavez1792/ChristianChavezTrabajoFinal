import TarjetaCurso from './TarjetaCursos/TarjetaCursos';
import bdcursos from '../data/videos.json';
import { useFavorites } from './Contexto/ContextoFavoritos';

const Favoritos = () => {
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    const cursosFavoritos = bdcursos.cursos.filter(curso =>
        isFavorite(curso.id)
    );

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

export default Favoritos;
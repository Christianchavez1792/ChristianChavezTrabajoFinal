import { useState } from 'react';
import { X } from 'lucide-react';
import TarjetaCurso from '../../components/TarjetaCursos/TarjetaCursos';
import bdcursos from '../../data/videos.json';
import { useFavorites } from '../../components/Contexto/ContextoFavoritos';

const SeccionCategoriasCategorias = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    const handleToggleFavorite = (id: number) => {
        if (isFavorite(id)) {
            removeFavorite(id);
        } else {
            addFavorite(id);
        }
    };

    const categoriasUnicas = [...new Set(bdcursos.cursos.map(c => c.categoría))];

    const cursosFiltrados = selectedCategory
        ? bdcursos.cursos.filter(curso => curso.categoría === selectedCategory)
        : bdcursos.cursos;

    const limpiarFiltro = () => {
        setSelectedCategory('');
    };

    return (
        <div className="min-h-screen bg-[#13162E] py-8">
            <div className="w-full mx-auto px-4 md:px-8 lg:px-16 md:w-3/4">

                <h1 className="text-white text-xl md:text-3xl font-bold mb-8">
                    Explorar por Categorías
                </h1>

                <div className="flex flex-wrap items-center gap-4 mb-8">
                    <div className="flex-1 min-w-[50px] max-w-[250px]">
                        <label htmlFor="category-filter" className="sr-only">
                            Filtrar por categoría
                        </label>
                        <select
                            id="category-filter"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:white focus:border-transparent cursor-pointer"
                            style={{colorScheme:"dark"}}>

                            <option value="" className="bg-gray-800 text-white hover:bg-[#C2EAFC]">Todas las categorías</option>
                            {categoriasUnicas.map((categoria) => (
                                <option key={categoria} value={categoria} className="bg-gray-800 text-white hover:bg-#C2EAFC">
                                    {categoria}
                                </option>
                            ))}
                        </select>
                    </div>

                    {selectedCategory && (
                        <button
                            onClick={limpiarFiltro}
                            className="flex items-center gap-2 px-4 py-3 border-2 border-white text-white rounded-lg hover:bg-[#C2EAFC] hover:text-[#13162E] transition-colors font-semibold">
                            <X className="w-5 h-5" />
                        </button>
                    )}
                </div>

                <div className="mb-6">
                    <p className="text-gray-400 text-sm">
                        {selectedCategory ? (
                            <>
                                Mostrando <span className="text-white font-semibold">{cursosFiltrados.length}</span> cursos de{' '}
                                <span className="text-blue-400 font-semibold">{selectedCategory}</span>
                            </>
                        ) : (
                            <>
                                Mostrando <span className="text-white font-semibold">{cursosFiltrados.length}</span> cursos en total
                            </>
                        )}
                    </p>
                </div>

                {cursosFiltrados.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {cursosFiltrados.map((curso) => (
                            <TarjetaCurso
                                key={curso.id}
                                {...curso}
                                isFavorite={isFavorite(curso.id)}
                                onToggleFavorite={handleToggleFavorite}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-400 text-xl">
                            No se encontraron cursos en esta categoría
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SeccionCategoriasCategorias;
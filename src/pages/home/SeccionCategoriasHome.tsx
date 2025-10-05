import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import TarjetaCurso from '../../components/TarjetaCursos/TarjetaCursos';
import bdcursos from '../../data/videos.json';
import { useFavorites } from '../../components/Contexto/ContextoFavoritos';

interface CategoryRowProps {
    categoryName: string;
    courses: any[];
    isFavorite: (id: number) => boolean;
    onToggleFavorite: (id: number) => void;
}

const CategoryRow = ({ categoryName, courses, isFavorite, onToggleFavorite }: CategoryRowProps) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 800;
            const newPosition = direction === 'left'
                ? scrollContainerRef.current.scrollLeft - scrollAmount
                : scrollContainerRef.current.scrollLeft + scrollAmount;

            scrollContainerRef.current.scrollTo({
                left: newPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="mb-8">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-4 px-4 md:px-8 lg:px-16">{categoryName}</h3>

            <div className="relative group/row">
                <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 text-white rounded-full opacity-0 group-hover/row:opacity-100 transition-opacity hover:bg-black/80 ml-2" aria-label="Scroll left"> <ChevronLeft className="w-6 h-6" /></button>

                <div ref={scrollContainerRef} className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 lg:px-16 pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {courses.map((curso) => (
                        <div key={curso.id} className="flex-none w-86">
                            <TarjetaCurso {...curso} isFavorite={isFavorite(curso.id)} onToggleFavorite={onToggleFavorite} /></div>
                    ))}
                </div>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 text-white rounded-full opacity-0 group-hover/row:opacity-100 transition-opacity hover:bg-black/80 mr-2"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

const SeccionCategoriasHome = () => {
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    const handleToggleFavorite = (id: number) => {
        if (isFavorite(id)) {
            removeFavorite(id);
        } else {
            addFavorite(id);
        }
    };

    const categoriasUnicas = [...new Set(bdcursos.cursos.map(c => c.categoría))].slice(0, 3);

    const categoriasCursos = categoriasUnicas.map(categoria => ({
        nombre: categoria,
        cursos: bdcursos.cursos.filter(c => c.categoría === categoria).slice(0, 6)
    }));

    return (
        <section className="bg-[#13162E] py-8">
            {categoriasCursos.map((categoria) => (
                <CategoryRow
                    key={categoria.nombre}
                    categoryName={categoria.nombre}
                    courses={categoria.cursos}
                    isFavorite={isFavorite}
                    onToggleFavorite={handleToggleFavorite}
                />
            ))}
        </section>
    );
};

export default SeccionCategoriasHome;
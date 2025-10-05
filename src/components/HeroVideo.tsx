import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Share2, CircleUserRound, Clock} from 'lucide-react';
import bdcursos from '../data/videos.json';
import { useFavorites } from './Contexto/ContextoFavoritos';
import TarjetaCurso from './TarjetaCursos/TarjetaCursos';

const HeroVideo = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { addFavorite, removeFavorite, isFavorite } = useFavorites();

    const curso = bdcursos.cursos.find(c => c.id === Number(id));

    if (!curso) {
        return (
            <div className="min-h-screen bg-[#13162E] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-white text-2xl font-bold mb-4">Curso no encontrado</h2>
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 bg-[#C2EAFC] text-white rounded-lg hover:bg-[#C2EAFC]"
                    >
                        Volver al inicio
                    </button>
                </div>
            </div>
        );
    }

    const getYouTubeId = (url: string) => {
        const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
        return match ? match[1] : null;
    };

    const videoId = getYouTubeId(curso.videoUrl);

    const toggleFavorite = () => {
        if (isFavorite(curso.id)) {
            removeFavorite(curso.id);
        } else {
            addFavorite(curso.id);
        }
    };

    const handleToggleFavorite = (id: number) => {
        if (isFavorite(id)) {
            removeFavorite(id);
        } else {
            addFavorite(id);
        }
    };

    const cursosRelacionados = bdcursos.cursos
        .filter(c => c.categoría === curso.categoría && c.id !== curso.id)
        .slice(0, 4);

    return (
        <div className="min-h-screen bg-[#13162E]">
            <div className="mx-auto px-4 md:px-8 lg:px-4">
                <div className=" gap-8">

                    <div className="lg:col-span-2 space-y-6">

                        <div className="relative bg-black rounded-lg overflow-hidden aspect-[16/9] lg:aspect-[16/7]" >
                            {videoId ? (
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                    title={curso.título}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-white">
                                    Video no disponible
                                </div>
                            )}
                        </div>

                        <div>
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <h1 className="text-white text-2xl md:text-3xl font-bold flex-1">
                                    {curso.título}
                                </h1>
                                <div className="flex gap-2">
                                    <button
                                        onClick={toggleFavorite}
                                        className="p-3 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                                        aria-label="Favorito"
                                    >
                                        <Star
                                            className={`w-6 h-6 transition-colors ${isFavorite(curso.id)
                                                    ? 'fill-yellow-400 text-yellow-400'
                                                    : 'text-white'
                                                }`}
                                        />
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 text-sm text-white mb-4">
                                <span className="px-3 py-1 bg-[#C2EAFC] text-[#13162E] rounded font-semibold">
                                    {curso.categoría}
                                </span>
                                <span className="px-3 py-1 bg-gray-700 text-white rounded">
                                    {curso.nivel}
                                </span>
                                <span className='flex items-center gap-2'><Clock /> {curso.duración}</span>
                                <span className='flex items-center gap-2'><CircleUserRound /> {curso.instructor}</span>
                            </div>

                            <div className="bg-gray-800/50 rounded-lg p-6">
                                <h2 className="text-[#C2EAFC] text-xl font-semibold mb-3">Descripción</h2>
                                <p className="text-white leading-relaxed">
                                    {curso.descripción}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {cursosRelacionados.length > 0 && (
                    <div className="mt-12 mb-10">
                        <h2 className="text-white text-2xl font-bold mb-6">
                            Más de {curso.categoría}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {cursosRelacionados.map((cursoRel) => (
                                <div key={cursoRel.id} onClick={() => navigate(`/video/${cursoRel.id}`)}>
                                    <TarjetaCurso
                                        {...cursoRel}
                                        isFavorite={isFavorite(cursoRel.id)}
                                        onToggleFavorite={handleToggleFavorite}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HeroVideo;
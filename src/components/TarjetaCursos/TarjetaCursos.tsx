import { useState } from 'react';
import { Play, Star, CircleUserRound, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TarjetaCursoProps {
    id: number;
    título: string;
    descripción: string;
    categoría: string;
    thumbnail: string;
    duración: string;
    instructor: string;
    nivel: string;
    isFavorite?: boolean;
    onToggleFavorite?: (id: number) => void;
}

const TarjetaCurso = ({
    id,
    título,
    descripción,
    categoría,
    thumbnail,
    duración,
    instructor,
    nivel,
    isFavorite = false,
    onToggleFavorite
}: TarjetaCursoProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const toggleFavorite = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onToggleFavorite) {
            onToggleFavorite(id);
        }
    };

    const handlePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigate(`/video/${id}`);
    };

return (
    <div
        className="relative group cursor-pointer"
        onClick={() => navigate(`/video/${id}`)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <div className="relative overflow-hidden rounded-lg bg-gray-900 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:z-10">

            <div className="relative aspect-video w-full overflow-hidden">
                <img
                    src={thumbnail}
                    alt={título}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={handlePlay}
                        className="p-3 bg-white/30 backdrop-blur-sm rounded-full hover:bg-white/50 transition-colors"
                        aria-label="Reproducir"
                    >
                        <Play className="w-8 h-8 text-white fill-white" />
                    </button>
                </div>

                <button
                    onClick={toggleFavorite}
                    className="absolute top-2 right-2 p-2 bg-black/60 backdrop-blur-sm rounded-full hover:bg-black/80 transition-colors z-20"
                    aria-label="Marcar como favorito"
                >
                    <Star
                        className={`w-5 h-5 transition-colors ${isFavorite
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-white fill-transparent'
                            }`}
                    />
                </button>
            </div>

            <div className="p-3 space-y-2">
                <h3 className="text-white font-bold text-sm line-clamp-1">
                    {título}
                </h3>

                <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span className="px-1.5 py-0.5 bg-gray-700 rounded text-white text-xs">
                        {nivel}
                    </span>
                    <span className='flex items-center gap-2'> <Clock /> {duración}</span>
                </div>

                <p className="text-gray-300 text-xs line-clamp-2">
                    {descripción}
                </p>

                <p className="text-gray-400 text-xs flex items-center gap-2">
                    <CircleUserRound /> {instructor}
                </p>

            </div>
        </div>
    </div>
);
};

export default TarjetaCurso;
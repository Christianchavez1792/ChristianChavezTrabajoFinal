import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Info, CircleUserRound, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bdcursos from "../data/videos.json"

const HeroCarrusel = () => {
    const [IdActual, setIdActual] = useState(0);
    const [selectedCursos, setSelectedCursos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const shuffled = bdcursos.cursos.sort(() => 0.5 - Math.random());
        setSelectedCursos(shuffled.slice(0, 5));
    }, []);

    useEffect(() => {
        if (selectedCursos.length === 0) return;

        const interval = setInterval(() => {
            setIdActual((prev) => (prev + 1) % selectedCursos.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [selectedCursos.length]);

    const slideprevio = () => {
        setIdActual((prev) => prev === 0 ? selectedCursos.length - 1 : prev - 1);
    };

    const sliderposterior = () => {
        setIdActual((prev) => (prev + 1) % selectedCursos.length);
    };

    const handleReproducir = () => {
        navigate(`/video/${cursoActual.id}`);
    };

    if (selectedCursos.length === 0) {
        return <div className="h-screen bg-gray-900 animate-pulse"></div>;
    }

    const cursoActual = selectedCursos[IdActual];

    return (
        <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
            <div className="absolute inset-0">
                <img src={cursoActual.thumbnail} alt={cursoActual.título} className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            <div className="relative h-full flex items-center px-4 md:px-12 lg:px-16">
                <div className="max-w-2xl space-y-4 md:space-y-6">
                    <div className="inline-block">
                        <span className="px-2 py-1 bg-[#C2EAFC] text-[#13162E] text-xs font-bold rounded">
                            {cursoActual.categoría}
                        </span>
                    </div>
                    <h1 className="text-red-200xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        {cursoActual.título}
                    </h1>
                    <div className="flex items-center gap-4 text-xs md:text-base text-gray-300">
                        <span className="px-1 py-1 bg-white/20 rounded text-white font-semibold">
                            {cursoActual.nivel}
                        </span>
                        <span className="flex items-center gap-2"> <Clock /> {cursoActual.duración}</span>
                        <span className="flex items-center gap-2"><CircleUserRound /> {cursoActual.instructor}</span>
                    </div>
                    <p className="text-sm md:text-lg text-gray-200 line-clamp-3">
                        {cursoActual.descripción}
                    </p>
                    <div className="flex gap-3 md:gap-4">
                        <button  onClick={handleReproducir} className="flex items-center gap-1 px-3 text-sm md:px-8 py-2 md:py-3 lg:text-lg bg-white text-black font-bold rounded hover:bg-[#C2EAFC] border-0 transition-colors">
                            <Play className="w-3 h-3 fill-current" />
                            Reproducir
                        </button>
                    </div>
                </div>
            </div>

            <button
                onClick={slideprevio}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <button
                onClick={sliderposterior}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {selectedCursos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setIdActual(index)}
                        className={`h-1 rounded-full transition-all ${index === IdActual ? 'w-8 bg-white' : 'w-6 bg-[#C2EAFC] hover:bg-white/75'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarrusel
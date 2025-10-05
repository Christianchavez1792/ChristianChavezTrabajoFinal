import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode} from "react";

interface FavoritesContextType {
    favorites: number[];
    addFavorite: (id: number) => void;
    removeFavorite: (id: number) => void;
    isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<number[]>(() => {
        const savedFavorites = localStorage.getItem("cursosFavoritos");
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    useEffect(() => {
        localStorage.setItem("cursosFavoritos", JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (id: number) => {
        setFavorites(prev => [...prev, id]);
    };

    const removeFavorite = (id: number) => {
        setFavorites(prev => prev.filter(favId => favId !== id));
    };

    const isFavorite = (id: number) => {
        return favorites.includes(id);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites debe usarse dentro de FavoritesProvider');
    }
    return context;
};
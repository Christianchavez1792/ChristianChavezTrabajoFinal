import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav>
                <div className="w-full bg-[#13162E] px-4 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <a href="#">
                                <img src="/TalentBoostLogo.svg" alt="TalentBoost Logo" className="w-32 h-auto"
                                />
                            </a>
                        </div>

                        <div className="hidden md:flex flex-1 justify-center">
                            <ul className="flex items-center gap-12">
                                <li>
                                    <a href="#categorias" className="text-white focus:text-[#C2EAFC] transition-colors text-lg">Categorías</a>
                                </li>
                                <li>
                                    <a href="#favoritos" className="text-white focus:text-[#C2EAFC] transition-colors text-lg">Favoritos</a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center gap-4">
                            <a href="#ingresar" className=" bg-[#C2EAFC] text-[#13162E] px-4 rounded-4xl active:bg-white  transition-colors text-lg">Ingresar</a>

                            <button onClick={toggleMenu} className="md:hidden text-white p-2 focus:text-[#C2EAFC]  transition-colors" aria-label="Toggle menu">
                                {isMenuOpen ? (
                                    <X className="w-7 h-7" />
                                ) : (
                                    <Menu className="w-7 h-7" />
                                )}
                            </button>
                        </div>
                    </div>

                    <div
                        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                        <ul className="space-y- border-t border-[#C2EAFC] pt-4">
                            <li>
                                <a href="#categorias" className="block px-4 py-3 text-white focus:text-[#C2EAFC] rounded-lg transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>Categorías</a>
                            </li>
                            <li>
                                <a href="#estrenos" className="block px-4 py-3 text-white focus:text-[#C2EAFC] rounded-lg transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>Estrenos</a>
                            </li>
                            <li>
                                <a href="#favoritos" className="block px-4 py-3 text-white focus:text-[#C2EAFC] rounded-lg transition-colors text-lg" onClick={() => setIsMenuOpen(false)}>Favoritos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
export default Header;
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#0a0c1f] text-white border-t border-[#C2EAFC]">

            <div className="w-8xl lg:w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <section>
                        <div className='lg:w-sm space-y-8'>
                            <div className="flex items-center gap-4">
                                <img src="/TalentBoostLogo.svg" alt="TalentBoost Logo" className="w-50" />
                            </div>
                            <p className="text-white text-sm leading-relaxed">
                                Plataforma líder en capacitación empresarial. Ofrecemos cursos de alta calidad
                                para el desarrollo profesional de tu equipo y el crecimiento de tu empresa.
                            </p>
                        </div>
                    </section>

                    <section>
                        <div className='md:flex md:flex-col md:items-center'>
                            <h3 className="text-lg text-[#C2EAFC] font-semibold mb-4">Navegación</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link to={"/categorias"} className="text-white focus:text-[#C2EAFC] transition-colors text-lg">Categorias</Link>
                                </li>
                                <li>
                                    <Link to={"/favoritos"} className="text-white focus:text-[#C2EAFC] transition-colors text-lg">Favoritos</Link>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <div className= "md:flex md:flex-col md:items-center">
                            <h3 className="text-lg text-[#C2EAFC] font-semibold mb-4">Información</h3>
                            <ul className="space-y-3 mb-6">
                                <li>
                                    <a
                                        href="#faq"
                                        className="text-white hover:text-[#C2EAFC] transition-colors text-sm"
                                    >
                                        Preguntas Frecuentes
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#terminos"
                                        className="text-white hover:text-[#C2EAFC] transition-colors text-sm"
                                    >
                                        Términos y Condiciones
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#nosotros"
                                        className="text-white hover:text-[#C2EAFC] transition-colors text-sm"
                                    >
                                        Nosotros
                                    </a>
                                </li>
                            </ul>

                            <div className="flex gap-3">
                                <a href="#facebook" className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors" aria-label="Facebook">
                                    <SiFacebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="#instagram"
                                    className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 transition-colors"
                                    aria-label="Instagram"
                                >
                                    <SiInstagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="#linkedin"
                                    className="p-2 bg-gray-800 rounded-full hover:bg-blue-950 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <SiLinkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-gray-400">
                        <p>© 2025 TalentBoost. Todos los derechos reservados.</p>
                        <p>Diseñado por Christian Chavez</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
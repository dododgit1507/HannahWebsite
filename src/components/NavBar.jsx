import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`w-full py-4 px-6 transition-all duration-300 ${isScrolled ? 'bg-[var(--negro)] shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold text-[var(--blanco)]">
                        <span className="text-[var(--verde)]">Hannah</span> Produce
                    </h1>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/inicio" className="text-[var(--blanco)] hover:text-[var(--verde-limon)] transition-colors duration-300">Inicio</Link>
                    <Link to="/servicios" className="text-[var(--blanco)] hover:text-[var(--verde-limon)] transition-colors duration-300">Servicios</Link>
                    <Link to="/nosotros" className="text-[var(--blanco)] hover:text-[var(--verde-limon)] transition-colors duration-300">Nosotros</Link>
                    <Link to="/contacto" className="text-[var(--blanco)] hover:text-[var(--verde-limon)] transition-colors duration-300">Contacto</Link>
                    <button className="px-4 py-2 bg-[var(--verde)] text-[var(--negro)] rounded hover:bg-[var(--verde-limon)] transition-all duration-300"
                            onClick={() => navigate("/portafolio")}
                    >
                        Portafolio
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-[var(--blanco)] focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-[var(--negro)] absolute left-0 right-0 z-20 shadow-lg py-4 px-6 animate-fadeIn">
                    <div className="flex flex-col space-y-4">
                        <Link to="/inicio" className="text-[var(--blanco)] hover:text-[var(--verde-limon)] transition-colors duration-300">Inicio</Link>
                        <Link to="/servicios" className="text-[var(--blanco)] hover:text-[var(--verde-limon)] transition-colors duration-300">Servicios</Link>
                        <Link to="/nosotros" className="text-[var(--blanco)] hover:text-[var(--verde-limon)] transition-colors duration-300">Nosotros</Link>
                        <Link to="/contacto" className="text-[var(--blanco)] hover:text-[var(--verde-limon)] transition-colors duration-300">Contacto</Link>
                        <button className="px-4 py-2 bg-[var(--verde)] text-[var(--negro)] rounded hover:bg-[var(--verde-limon)] transition-all duration-300 w-full text-center"
                        onClick={() => navigate('/portafolio')}
                        >
                            Portafolio
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
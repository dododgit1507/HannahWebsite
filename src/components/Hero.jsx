import Aurora from './ReactBits/Aurora';
import NavBar from './NavBar';

const Hero = () => {
    return (
        <div className="relative w-full h-screen bg-[var(--negro)] overflow-hidden">
            {/* Aurora background effect */}
            <div className="absolute inset-0 z-0">
                <Aurora
                    colorStops={["#93ca07", "#d6f576", "#93ca07"]}
                    blend={0.6}
                    amplitude={1.2}
                    speed={0.4}
                />
            </div>
            
            {/* Navbar */}
            <div className="relative z-10">
                <NavBar />
            </div>
            
            {/* Hero content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-[var(--blanco)] mb-6">
                    Hanna <span className="text-[var(--verde-limon)]">Produce</span>
                </h1>
                <p className="text-xl md:text-2xl text-[var(--blanco)] max-w-2xl mb-8">
                    Productos frescos y orgánicos directamente del campo a tu mesa
                </p>
                <button className="px-8 py-3 text-lg font-medium bg-[var(--verde)] text-[var(--negro)] rounded-md hover:bg-[var(--verde-limon)] transition-all duration-300">
                    Explorar Productos
                </button>
            </div>
        </div>
    )
}

export default Hero
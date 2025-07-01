import Aurora from './ReactBits/backgrounds/Aurora';
import Threads from './ReactBits/backgrounds/Threads';
import NavBar from './NavBar';

const Hero = () => {
    return (
        <div className="relative w-full h-screen bg-[var(--negro)] overflow-hidden">
            {/* Aurora background effect */}
            <div className="absolute inset-0 z-0">
                {/* <Aurora
                    colorStops={["#93ca07", "#d6f576", "#93ca07"]}
                    blend={0.6}
                    amplitude={1.2}
                    speed={0.4}
                /> */}

                <div className="absolute inset-0 z-0">
                    <Threads
                        amplitude={4}
                        distance={0.7}
                        enableMouseInteraction={true}
                    />
                </div>
            </div>

            {/* Navbar */}
            <div className="relative z-10">
                <NavBar />
            </div>

            {/* Hero content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-[var(--blanco)] mb-6">
                    Hannah <span className="text-[var(--verde-limon)]">Produce</span>
                </h1>
                <p className="text-xl md:text-2xl text-[var(--blanco)] max-w-2xl mb-4">
                    Herramientas que manejan tus herramientas
                </p>
                <p className="text-lg text-[var(--gris-claro)] max-w-2xl mb-8">
                    Soluciones de automatización y producción audiovisual para optimizar tus procesos
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-3 text-lg font-medium bg-[var(--verde)] text-[var(--negro)] rounded-md hover:bg-[var(--verde-limon)] transition-all duration-300">
                        Nuestros Servicios
                    </button>
                    <button className="px-8 py-3 text-lg font-medium border border-[var(--verde)] text-[var(--blanco)] rounded-md hover:bg-[var(--verde-limon)] hover:text-[var(--negro)] transition-all duration-300">
                        Contactar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
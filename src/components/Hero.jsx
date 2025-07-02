import React from 'react';
import NavBar from './NavBar';
import CardSwap, { Card } from './ReactBits/components/CardSwap';
// import ProjectCard from './ProjectCard';
import { projectsData } from '@/utils/ProjectsData';

const Hero = () => {
    return (
        <div className="relative w-full h-screen bg-[var(--negro)] overflow-hidden">
            {/* Subtle background gradient */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[var(--negro)] via-[#121212] to-[#1a1a1a]"></div>

            {/* Navbar */}
            <div className="relative z-10">
                <NavBar />
            </div>

            {/* Hero content - Two column layout */}
            <div className="relative z-10 w-full h-full flex flex-col lg:flex-row">
                {/* Left column - Text content */}
                <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-8 lg:px-16 pt-16 lg:pt-0">
                    <h1 className="text-4xl md:text-6xl font-bold text-[var(--blanco)] mb-6">
                        Hannah <span className="text-[var(--verde-limon)]">Produce</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-[var(--blanco)] max-w-xl mb-4">
                        Herramientas que manejan tus herramientas
                    </p>
                    <p className="text-lg text-[var(--gris-claro)] max-w-xl mb-8">
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

                {/* Right column - CardSwap component */}
                <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
                    <CardSwap
                        width={400}
                        height={300}
                        cardDistance={40}
                        verticalDistance={50}
                        delay={2000}
                        pauseOnHover={false} // Si paso el mouse por encima se detiene
                        skewAmount={8}
                        easing="elastic"
                        onCardClick={(index) => console.log(`Clicked project: ${projectsData[index].title}`)}
                    >
                        {projectsData.map((project) => (
                            <Card key={project.id}>
                                <h3 className="font-semibold p-2 text-[var(--blanco)]">{project.title}</h3>
                                <img src={project.image} alt={project.title} />
                            </Card>
                        ))}
                    </CardSwap>
                </div>
            </div>
        </div>
    );
};

export default Hero;
import React from 'react';
import CardSwap, { Card } from './ReactBits/components/CardSwap';
import { projectsData } from '@/utils/ProjectsData';
import Threads from '@/components/ReactBits/backgrounds/Threads';

const Hero = () => {
    return (
        <div className="relative w-full h-screen bg-[var(--negro)] overflow-hidden">

            {/* Aurora background effect */}
            {/* <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 z-0">
                    <Threads
                        amplitude={4}
                        distance={0.7}
                        enableMouseInteraction={true}
                    />
                </div>
            </div> */}

            {/* Hero content - Two column layout */}
            <div className="relative z-10 w-full h-full flex flex-col lg:flex-row">
                {/* Left column - Text content */}
                <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-8 lg:px-16 pt-16 lg:pt-0">
                    <h1 className="text-4xl md:text-6xl font-bold text-[var(--blanco)] mb-6">
                        Hannah <span className="text-[var(--verde-limon)]">Produce</span>
                    </h1>
                    <h2 className="text-lg md:text-xl font-semibold text-[var(--blanco)] mb-4">
                        Herramientas que manejan tus herramientas
                    </h2>
                    <p className="text-base md:text-lg text-[var(--gris-claro)] max-w-xl mb-8">
                        Soluciones de automatización y producción audiovisual para optimizar tus procesos
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-3 text-base md:text-lg font-medium bg-[var(--verde)] text-[var(--negro)] rounded-md hover:bg-[var(--verde-limon)] transition-all duration-300">
                            Nuestros Servicios
                        </button>
                        <button className="px-8 py-3 text-base md:text-lg font-medium border border-[var(--verde)] text-[var(--blanco)] rounded-md hover:bg-[var(--verde-limon)] hover:text-[var(--negro)] transition-all duration-300">
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
                        delay={5000}
                        pauseOnHover={false} // Si paso el mouse por encima se detiene
                        skewAmount={8}
                        easing="elastic"
                        onCardClick={(index) => console.log(`Clicked project: ${projectsData[index].title}`)}
                    >
                        {projectsData.map((project) => (
                            <Card key={project.id} >
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
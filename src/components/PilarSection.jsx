import React from 'react';
import Squares from './ReactBits/backgrounds/Squeares';
import PilarCard from './ui/PilarCard';
import { pillars } from '@/utils/PilarContent';

const PilarSection = () => {
    return (
        <section className="relative py-20 overflow-hidden bg-[var(--negro)]">
            {/* Background Squares */}
            <div className="absolute inset-0 z-0 opacity-30">
                <Squares 
                    direction="diagonal" 
                    speed={0.5} 
                    borderColor="var(--gris)" 
                    squareSize={60}
                    hoverFillColor="var(--verde-limon)"
                />
            </div>
            
            {/* Content */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--blanco)] mb-4">
                        Nuestros <span className="text-[var(--verde-limon)]">Pilares</span> de Crecimiento
                    </h2>
                    <p className="text-lg text-[var(--gris-claro)] max-w-3xl mx-auto">
                        Construimos el éxito de tu empresa sobre bases sólidas, combinando experiencia, tecnología y estrategia para impulsar tu crecimiento sostenible.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((pillar) => (
                        <PilarCard key={pillar.id} pillar={pillar} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PilarSection;
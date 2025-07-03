import React from 'react';
import PilarCard from './ui/PilarCard';
import { pillars } from '@/utils/PilarContent';

//UI Components
import Section from '@/components/ui/Section';
import ScrollReveal from '@/components/ui/ScrollReveal';

const PilarSection = () => {
    return (
        <Section className="relative overflow-hidden">  
            {/* Content */}
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <ScrollReveal direction="down" delay={0.2} distance={30}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--blanco)] mb-4">
                            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-baseline gap-2 sm:gap-3">
                                <span>Nuestros Pilares de</span>
                                <span className="text-[var(--verde-limon)]">Crecimiento</span>
                            </div>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={0.4} distance={30}>
                        <p className="text-lg text-[var(--gris-claro)] max-w-3xl mx-auto">
                            Construimos el éxito de tu empresa sobre bases sólidas, combinando experiencia, tecnología y estrategia para impulsar tu crecimiento sostenible.
                        </p>
                    </ScrollReveal>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((pillar, index) => (
                        <ScrollReveal 
                            key={pillar.id || index} 
                            direction="up" 
                            delay={0.2 + index * 0.1} 
                            duration={0.5}
                            distance={50}
                        >
                            <PilarCard pillar={pillar} />
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default PilarSection;
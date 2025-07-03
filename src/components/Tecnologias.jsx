import React from 'react';
import Section from "@/components/ui/Section";
import { tecnologiasData } from '@/utils/TecnologiasData';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Tecnologias = () => {
    return (
        <Section>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <ScrollReveal direction="down" delay={0.2} distance={30}>
                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--blanco)] mb-4">
                            Tecnologías que <span className="text-[var(--verde-limon)]">dominamos</span>
                        </h2>
                    </ScrollReveal>
                </div>

                <div className='flex flex-col lg:flex-row gap-12'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Descripción de tecnologías - Lado izquierdo */}
                        <div className="flex flex-col space-y-6">
                            <ScrollReveal direction="left" delay={0.3} distance={30}>
                                <h3 className="text-2xl md:text-3xl font-bold text-[var(--verde-limon)]">
                                    Expertos en múltiples tecnologías
                                </h3>
                            </ScrollReveal>

                            <ScrollReveal direction="left" delay={0.4} distance={30}>
                                <p className="text-lg text-[var(--gris-claro)]">
                                    En Hannah Produce dominamos un amplio espectro de lenguajes de programación y herramientas
                                    que nos permiten crear soluciones robustas y escalables para cualquier necesidad.
                                </p>
                            </ScrollReveal>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <ScrollReveal direction="left" delay={0.5} distance={30}>
                                    <div className="bg-[var(--negro-claro)] p-5 rounded-lg">
                                        <h4 className="text-xl font-semibold text-[var(--verde-limon)] mb-3">Desarrollo Web</h4>
                                        <p className="text-[var(--gris-claro)]">React, Angular, Vue.js, Node.js, Express, Django y más frameworks modernos para crear experiencias web potentes y responsivas.</p>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal direction="left" delay={0.6} distance={30}>
                                    <div className="bg-[var(--negro-claro)] p-5 rounded-lg">
                                        <h4 className="text-xl font-semibold text-[var(--verde-limon)] mb-3">Producción Audiovisual</h4>
                                        <p className="text-[var(--gris-claro)]">Adobe Premiere, After Effects, DaVinci Resolve, Final Cut Pro y otras herramientas profesionales para crear contenido audiovisual de alta calidad.</p>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal direction="left" delay={0.7} distance={30}>
                                    <div className="bg-[var(--negro-claro)] p-5 rounded-lg">
                                        <h4 className="text-xl font-semibold text-[var(--verde-limon)] mb-3">Automatización</h4>
                                        <p className="text-[var(--gris-claro)]">Python, Langchain, para crear automatizaciones en base a scripts y procesos de IA.</p>
                                    </div>
                                </ScrollReveal>

                                <ScrollReveal direction="left" delay={0.8} distance={30}>
                                    <div className="bg-[var(--negro-claro)] p-5 rounded-lg">
                                        <h4 className="text-xl font-semibold text-[var(--verde-limon)] mb-3">Diseño 3D</h4>
                                        <p className="text-[var(--gris-claro)]">Blender, Cinema 4D, Maya y otras herramientas de modelado y animación 3D para crear visualizaciones impactantes.</p>
                                    </div>
                                </ScrollReveal>
                            </div>

                            <ScrollReveal direction="left" delay={0.9} distance={30}>
                                <p className="text-lg text-[var(--blanco)]">
                                    Nuestro equipo se mantiene constantemente actualizado con las últimas tecnologías y tendencias
                                    para ofrecer soluciones innovadoras y de vanguardia.
                                </p>
                            </ScrollReveal>
                        </div>

                        {/* Tecnologias que dominamos */}
                        <div className="flex-1">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {tecnologiasData.map((tech, index) => (
                                    <ScrollReveal 
                                        key={tech.id} 
                                        direction="up" 
                                        delay={0.1 + index * 0.05} 
                                        duration={0.4}
                                        distance={20}
                                    >
                                        <div className="bg-[var(--negro-claro)] p-3 sm:p-4 rounded-lg flex items-center justify-center">
                                            <img 
                                                src={tech.img} 
                                                alt={tech.content} 
                                                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 hover:scale-110 transition-all duration-300"
                                            />
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Tecnologias
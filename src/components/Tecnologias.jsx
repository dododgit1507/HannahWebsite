import React from 'react';
import Section from "@/components/ui/Section";
import BlurText from "./ReactBits/TextAnimations/BlurText";
import InfiniteScroll from "./ReactBits/components/InfiniteScroll";
import { tecnologiasData } from "@/utils/TecnologiasData";

const Tecnologias = () => {
    return (
        <Section>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--blanco)] mb-4">
                        <BlurText
                            text="Tecnologías que dominamos"
                            animateBy="words"
                            className="justify-center"
                            delay={100}
                            direction="top"
                            stepDuration={0.4}
                        />
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Descripción de tecnologías - Lado izquierdo */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-[var(--verde-limon)]">
                            Expertos en múltiples tecnologías
                        </h3>

                        <p className="text-lg text-[var(--gris-claro)]">
                            En Hannah Produce dominamos un amplio espectro de lenguajes de programación y herramientas
                            que nos permiten crear soluciones robustas y escalables para cualquier necesidad.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-[var(--negro-claro)] p-5 rounded-lg">
                                <h4 className="text-xl font-semibold text-[var(--verde-limon)] mb-3">Desarrollo Web</h4>
                                <p className="text-[var(--gris-claro)]">React, Angular, Vue.js, Node.js, Express, Django y más frameworks modernos para crear experiencias web potentes y responsivas.</p>
                            </div>

                            <div className="bg-[var(--negro-claro)] p-5 rounded-lg">
                                <h4 className="text-xl font-semibold text-[var(--verde-limon)] mb-3">Producción Audiovisual</h4>
                                <p className="text-[var(--gris-claro)]">Adobe Premiere, After Effects, DaVinci Resolve, Final Cut Pro y otras herramientas profesionales para crear contenido audiovisual de alta calidad.</p>
                            </div>

                            <div className="bg-[var(--negro-claro)] p-5 rounded-lg">
                                <h4 className="text-xl font-semibold text-[var(--verde-limon)] mb-3">Automatización</h4>
                                <p className="text-[var(--gris-claro)]">Python, Arduino, Raspberry Pi y tecnologías IoT para crear sistemas de automatización inteligentes y eficientes.</p>
                            </div>

                            <div className="bg-[var(--negro-claro)] p-5 rounded-lg">
                                <h4 className="text-xl font-semibold text-[var(--verde-limon)] mb-3">Diseño 3D</h4>
                                <p className="text-[var(--gris-claro)]">Blender, Cinema 4D, Maya y otras herramientas de modelado y animación 3D para crear visualizaciones impactantes.</p>
                            </div>
                        </div>

                        <p className="text-lg text-[var(--blanco)]">
                            Nuestro equipo se mantiene constantemente actualizado con las últimas tecnologías y tendencias
                            para ofrecer soluciones innovadoras y de vanguardia.
                        </p>
                    </div>

                    {/* InfiniteScroll - Lado derecho */}
                    <div className="h-[600px] overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <InfiniteScroll
                                width="100%"
                                maxHeight="600px"
                                negativeMargin="-0.2em"
                                items={tecnologiasData}
                                itemMinHeight={80}
                                isTilted={true}
                                tiltDirection="left"
                                autoplay={true}
                                autoplaySpeed={0.3}
                                autoplayDirection="down"
                                pauseOnHover={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Tecnologias
import React, { useState, useEffect } from 'react';
import Masonry from './ReactBits/components/Masonry';
import { colaboradoresData } from '@/utils/ColaboradoresData';
import { useNavigate } from 'react-router-dom';
import BlurText from './ReactBits/TextAnimations/BlurText';

const Colaboradores = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [visibleItems, setVisibleItems] = useState([]);

    // Cargar imágenes de forma progresiva para evitar bloqueo de scroll
    useEffect(() => {
        // Precargar imágenes antes de mostrarlas
        const preloadImages = async () => {
            const promises = colaboradoresData.map(
                (item) =>
                    new Promise((resolve) => {
                        const img = new Image();
                        img.src = item.img;
                        img.onload = () => resolve(item);
                        img.onerror = () => resolve(item); // Resolver incluso si hay error
                    })
            );

            // Cargar las imágenes en lotes para no bloquear el scroll
            const batchSize = 3;
            const batches = Math.ceil(colaboradoresData.length / batchSize);
            
            for (let i = 0; i < batches; i++) {
                const start = i * batchSize;
                const end = Math.min(start + batchSize, colaboradoresData.length);
                const batchPromises = promises.slice(start, end);
                
                const loadedItems = await Promise.all(batchPromises);
                setVisibleItems(prev => [...prev, ...loadedItems]);
                
                // Pequeña pausa entre lotes para permitir el scroll
                if (i < batches - 1) {
                    await new Promise(resolve => setTimeout(resolve, 100));
                }
            }
            
            setIsLoading(false);
        };

        preloadImages();
    }, []);

    return (
        <section className="py-20 bg-[var(--negro)]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--blanco)] mb-4">
                        <BlurText 
                            text="Nuestros Colaboradores" 
                            animateBy="words"
                            className="justify-center"
                            delay={100}
                            direction="top"
                            stepDuration={0.4}
                        />
                    </h2>
                    <p className="text-lg text-[var(--gris-claro)] max-w-3xl mx-auto mb-8">
                        En Hannah Produce nos enorgullece haber trabajado con empresas líderes en diversos sectores.
                        Nuestras soluciones de automatización y producción audiovisual han ayudado a estas organizaciones
                        a optimizar sus procesos y mejorar su presencia digital.
                    </p>
                    <p className="text-lg text-[var(--blanco)] max-w-3xl mx-auto">
                        Conoce algunas de las empresas que han confiado en nosotros para desarrollar
                        proyectos innovadores y de alto impacto.
                    </p>
                </div>

                <div className="h-[800px] w-full relative mb-16">
                    {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[var(--verde-limon)]"></div>
                        </div>
                    )}
                    <Masonry
                        items={visibleItems}
                        ease="power3.out"
                        duration={0.5} // Reducido para mejorar rendimiento
                        stagger={0.05} // Reducido para mejorar rendimiento
                        animateFrom="bottom"
                        scaleOnHover={true}
                        hoverScale={0.95}
                        blurToFocus={true}
                        colorShiftOnHover={true}
                    />
                </div>

                <div className="text-center">
                    <p className="text-lg text-[var(--gris-claro)] max-w-3xl mx-auto mb-8">
                        Cada proyecto es único y adaptamos nuestras soluciones a las necesidades específicas de cada cliente.
                        Trabajamos en estrecha colaboración con nuestros clientes para garantizar resultados excepcionales.
                    </p>
                    <button className="px-8 py-3 text-lg font-medium bg-[var(--verde)] text-[var(--negro)] rounded-md hover:bg-[var(--verde-limon)] transition-all duration-300"
                        onClick={() => navigate("/contacto")}>
                        Conviértete en colaborador
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Colaboradores;
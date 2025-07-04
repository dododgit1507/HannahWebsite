import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Section from "@/components/ui/Section";
import { clientesData } from '@/utils/ClientesData';

const ClientesCarrusel = () => {
    const carouselRef = useRef(null);
    const carouselInnerRef = useRef(null);
    
    useEffect(() => {
        if (!carouselRef.current || !carouselInnerRef.current) return;
        
        // Duplicar los elementos para crear un efecto de bucle infinito
        const originalItems = Array.from(carouselInnerRef.current.children);
        originalItems.forEach(item => {
            const clone = item.cloneNode(true);
            carouselInnerRef.current.appendChild(clone);
        });
        
        // Obtener el ancho total de los elementos originales
        const itemsWidth = originalItems.reduce((acc, item) => acc + item.offsetWidth + 48, 0); // 48px es el espacio entre elementos (space-x-12)
        
        // Configurar la animación con GSAP
        const tl = gsap.timeline({ repeat: -1 });
        
        // Animación de desplazamiento continuo
        tl.to(carouselInnerRef.current, {
            x: -itemsWidth,
            duration: 30,
            ease: "linear",
            onComplete: () => {
                // Resetear la posición cuando termine
                gsap.set(carouselInnerRef.current, { x: 0 });
            }
        });
        
        // Pausar la animación al pasar el ratón
        carouselRef.current.addEventListener('mouseenter', () => {
            tl.pause();
        });
        
        carouselRef.current.addEventListener('mouseleave', () => {
            tl.play();
        });
        
        return () => {
            tl.kill();
            if (carouselRef.current) {
                carouselRef.current.removeEventListener('mouseenter', () => tl.pause());
                carouselRef.current.removeEventListener('mouseleave', () => tl.play());
            }
        };
    }, []);
    
    return (
        <Section className="bg-[var(--negro-claro)]">
            <div className="container mx-auto px-6 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--blanco)] mb-8 text-center">
                    Nuestros <span className="text-[var(--verde-limon)]">Clientes</span>
                </h2>
            </div>
            
            <div 
                ref={carouselRef}
                className="relative w-full overflow-hidden"
            >
                <div 
                    ref={carouselInnerRef}
                    className="flex items-center space-x-12 py-4"
                    style={{ willChange: 'transform' }}
                >
                    {clientesData.map((cliente) => (
                        <div 
                            key={cliente.id} 
                            className="flex-shrink-0"
                        >
                            <div className="bg-[var(--negro)] rounded-lg p-4 shadow-lg w-[180px] h-[120px] flex items-center justify-center hover:scale-105 transition-transform duration-300">
                                <img 
                                    src={cliente.img} 
                                    alt={cliente.name}
                                    className="max-w-full max-h-full object-contain" 
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default ClientesCarrusel;

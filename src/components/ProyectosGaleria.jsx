import React, { useState } from 'react';
import { gsap } from 'gsap';

const ProyectosGaleria = ({ items }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    
    // Función para abrir la imagen en vista ampliada
    const openImage = (item) => {
        setSelectedImage(item);
        document.body.style.overflow = 'hidden'; // Prevenir scroll cuando el modal está abierto
        
        // Animar la apertura del modal
        gsap.fromTo(
            '.modal-overlay',
            { opacity: 0 },
            { opacity: 1, duration: 0.3 }
        );
        
        gsap.fromTo(
            '.modal-content',
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.2)' }
        );
    };
    
    // Función para cerrar la imagen
    const closeImage = () => {
        // Animar el cierre del modal
        gsap.to('.modal-overlay', { opacity: 0, duration: 0.3 });
        gsap.to('.modal-content', { 
            scale: 0.8, 
            opacity: 0, 
            duration: 0.3,
            onComplete: () => {
                setSelectedImage(null);
                document.body.style.overflow = ''; // Restaurar scroll
            }
        });
    };
    
    // Determinar el tamaño de la imagen basado en su altura
    const getImageSize = (height) => {
        if (height >= 600) return 'col-span-2 row-span-2'; // Grande
        if (height >= 400) return 'col-span-2 row-span-1'; // Mediana horizontal
        if (height >= 350) return 'col-span-1 row-span-2'; // Mediana vertical
        return 'col-span-1 row-span-1'; // Pequeña
    };
    
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                {items.map((item) => (
                    <div 
                        key={item.id} 
                        className={`${getImageSize(item.height)} overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl`}
                        onClick={() => openImage(item)}
                    >
                        <div className="relative w-full h-full">
                            <img 
                                src={item.img} 
                                alt={item.name} 
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                <h3 className="text-white font-bold text-lg">{item.name}</h3>
                                <p className="text-white/80 text-sm">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Modal para vista ampliada */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay bg-black/80">
                    <div className="relative max-w-4xl w-full modal-content">
                        <button 
                            className="absolute -top-12 right-0 text-white text-3xl hover:text-[var(--verde-limon)] transition-colors"
                            onClick={closeImage}
                            aria-label="Cerrar"
                        >
                            &times;
                        </button>
                        <div className="bg-[var(--negro-claro)] rounded-lg overflow-hidden shadow-2xl">
                            <img 
                                src={selectedImage.img} 
                                alt={selectedImage.name} 
                                className="w-full object-contain max-h-[80vh]" 
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-[var(--blanco)] mb-2">{selectedImage.name}</h3>
                                <p className="text-[var(--gris-claro)]">{selectedImage.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProyectosGaleria;

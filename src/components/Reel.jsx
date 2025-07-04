import ScrollReveal from "@/components/ui/ScrollReveal"

const Reel = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <h3 className="text-3xl font-bold text-[var(--blanco)] mb-12 text-center">Nuestro <span className="text-[var(--verde-limon)]">Reel</span></h3>

            <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Video a la izquierda */}
                <div className="w-full lg:w-3/5">
                    <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                        <iframe className="w-full h-full" src="https://www.youtube.com/embed/n_mFra6eEsI?si=BKqrou8Mhtq3w3-3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>

                {/* Descripción a la derecha */}
                <div className="w-full lg:w-2/5">
                    <ScrollReveal>
                        <h4 className="text-2xl font-bold text-[var(--verde-limon)] mb-4">Creatividad en Movimiento</h4>
                        <p className="text-[var(--gris-claro)] mb-6">
                            Este reel muestra una selección de nuestros mejores trabajos audiovisuales, donde combinamos técnicas
                            innovadoras de filmación, edición y postproducción para crear contenido que destaca y conecta con las audiencias.
                        </p>
                        <p className="text-[var(--gris-claro)] mb-6">
                            Cada proyecto refleja nuestra pasión por contar historias visualmente impactantes, ya sea para eventos
                            corporativos, campañas publicitarias o contenido digital para redes sociales.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-[var(--negro)] text-[var(--blanco)] px-3 py-1 rounded-full text-sm">Edición Profesional</span>
                            <span className="bg-[var(--negro)] text-[var(--blanco)] px-3 py-1 rounded-full text-sm">Motion Graphics</span>
                            <span className="bg-[var(--negro)] text-[var(--blanco)] px-3 py-1 rounded-full text-sm">Filmación 4K</span>
                            <span className="bg-[var(--negro)] text-[var(--blanco)] px-3 py-1 rounded-full text-sm">Dirección Creativa</span>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    )
}

export default Reel
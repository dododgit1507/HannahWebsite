//UI Components
import Section from "@/components/ui/Section"

const Herramientas = () => {
    return (
        <Section>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--blanco)] mb-4">
                        Herramientas que <span className="text-[var(--verde-limon)]">manejan</span> herramientas
                    </h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Imagen ilustrativa */}
                    <div className="relative overflow-hidden rounded-lg h-[400px] shadow-xl">
                        <img 
                            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                            alt="Automatización de herramientas" 
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                            <p className="text-[var(--blanco)] p-6 text-xl font-semibold">Automatizamos las herramientas que ya usas</p>
                        </div>
                    </div>
                    
                    {/* Contenido de texto */}
                    <div className="flex flex-col space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-[var(--verde-limon)]">
                            Automatizamos las herramientas que ya usas
                        </h3>
                        <p className="text-lg text-[var(--gris-claro)]">
                            Diseñamos soluciones personalizadas que optimizan tus procesos diarios, integrándose 
                            directamente en las plataformas que ya forman parte de tu trabajo.
                        </p>
                        <p className="text-lg text-[var(--gris-claro)]">
                            Creamos automatizaciones inteligentes que ahorran tiempo, reducen errores y aumentan la eficiencia, 
                            sin necesidad de cambiar tu ecosistema actual.
                        </p>
                        <blockquote className="border-l-4 border-[var(--verde-limon)] pl-4 italic text-xl text-[var(--blanco)]">
                            "Herramientas que usan tus herramientas"
                        </blockquote>
                        <div className="pt-4">
                            <button className="px-8 py-3 text-lg font-medium bg-[var(--verde)] text-[var(--negro)] rounded-md hover:bg-[var(--verde-limon)] transition-all duration-300">
                                Conoce más
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Herramientas
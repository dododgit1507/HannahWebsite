import MainLayout from "@/layouts/MainLayout"
import Section from "@/components/ui/Section"
import ScrollReveal from "@/components/ui/ScrollReveal"
import ClientesCarrusel from "@/components/ClientesCarrusel"
import ProyectosGaleria from "@/components/ProyectosGaleria"
import { colaboradoresData } from '@/utils/ColaboradoresData'

const Portafolio = () => {
    return (
        <MainLayout>
            <Section>
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--blanco)] mb-4">
                            Nuestro <span className="text-[var(--verde-limon)]">Portafolio</span>
                        </h2>
                        <p className="text-lg text-[var(--gris-claro)] max-w-3xl mx-auto mb-8">
                            Hemos colaborado con empresas líderes en diversos sectores, desarrollando soluciones
                            audiovisuales y de automatización que transforman sus operaciones y comunicación.
                        </p>
                    </div>

                    {/* Descripción de proyectos realizados */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-[var(--negro-claro)] p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-[var(--verde-limon)] mb-3">Automatización Industrial</h3>
                            <p className="text-[var(--gris-claro)] mb-4">
                                Implementamos sistemas de automatización que optimizan procesos productivos, reducen costos
                                y aumentan la eficiencia operativa en empresas manufactureras y de logística.
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-[var(--blanco)]">Clientes: 12+</span>
                                <span className="text-sm text-[var(--verde)]">Proyectos completados: 25</span>
                            </div>
                        </div>

                        <div className="bg-[var(--negro-claro)] p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-[var(--verde-limon)] mb-3">Producción Audiovisual</h3>
                            <p className="text-[var(--gris-claro)] mb-4">
                                Desarrollamos contenido audiovisual de alta calidad para campañas publicitarias, eventos corporativos
                                y plataformas digitales, elevando la imagen de marca de nuestros clientes.
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-[var(--blanco)]">Clientes: 20+</span>
                                <span className="text-sm text-[var(--verde)]">Proyectos completados: 45</span>
                            </div>
                        </div>

                        <div className="bg-[var(--negro-claro)] p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-bold text-[var(--verde-limon)] mb-3">Soluciones Tecnológicas</h3>
                            <p className="text-[var(--gris-claro)] mb-4">
                                Creamos herramientas digitales personalizadas que integran sistemas existentes y automatizan
                                flujos de trabajo, permitiendo a nuestros clientes enfocarse en su core business.
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-[var(--blanco)]">Clientes: 15+</span>
                                <span className="text-sm text-[var(--verde)]">Proyectos completados: 30</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            
            <Section>
                <div className="container mx-auto px-6">
                    <h3 className="text-3xl font-bold text-[var(--blanco)] mb-8 text-center">Algunos de nuestros <span className="text-[var(--verde-limon)]">proyectos</span></h3>
                    <ScrollReveal>
                        <ProyectosGaleria items={colaboradoresData} />
                    </ScrollReveal>
                </div>
            </Section>
            
            <ClientesCarrusel />
        </MainLayout>
    )
}

export default Portafolio

import MainLayout from "@/layouts/MainLayout"
import Section from "@/components/ui/Section"

const Portafolio = () => {
    return (
        <MainLayout>
            <Section>
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[var(--blanco)] mb-4">
                            Portafolio
                        </h2>
                    </div>
                </div>
            </Section>
        </MainLayout>
    )
}

export default Portafolio
//UI Components
import Section from "@/components/ui/Section"
import BlurText from "./ReactBits/TextAnimations/BlurText"

const Herramientas = () => {
    return (
        <Section>
            <h1 className="text-3xl md:text-5xl font-bold text-[var(--blanco)] mb-4">
                <BlurText 
                    text="Herramientas que manejan herramientas" 
                    animateBy="words"
                    className="justify-center"
                    delay={100}
                    direction="top"
                    stepDuration={0.4}
                />
            </h1>
        </Section>
    )
}

export default Herramientas
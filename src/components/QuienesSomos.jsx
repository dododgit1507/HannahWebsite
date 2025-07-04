//UI Components
import Section from "@/components/ui/Section";
import BlurText from "./ReactBits/TextAnimations/BlurText";

const QuienesSomos = () => {
  return (
    <Section className=" pb-0">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--blanco)] mb-4">
            <BlurText
              text="Quienes Somos"
              animateBy="words"
              className="justify-center"
              delay={100}
              direction="top"
              stepDuration={0.4}
            />
          </h2>
          <p className="text-lg text-[var(--gris-claro)] max-w-3xl mx-auto">
            Somos una lideres en la automatización y producción audiovisual,
            comprometida con la innovación y la excelencia para impulsar el
            crecimiento de tus proyectos.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default QuienesSomos;

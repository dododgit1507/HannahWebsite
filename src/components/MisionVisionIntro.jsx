//UI Components
import Section from "@/components/ui/Section";
import BlurText from "./ReactBits/TextAnimations/BlurText";

const MisionVisionVideo = () => {
  return (
    <Section className="pt-0 pb-0">
      <div className="d- flex row justify-between items-center gap-25">
        <div className="w-[900px] h-[500px]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/g1r1j3E0o5A"
            title="FlowButton"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <div className=" mx-auto text-center mb-8">
            <h2 className="text-2xl text-center md:text-3xl font-bold text-[var(--blanco)] mb-4">
              <BlurText
                text="Mision"
                animateBy="words"
                className="justify-center"
                delay={100}
                direction="top"
                stepDuration={0.4}
              />
            </h2>
            <p className="text-lg text-[var(--gris-claro)] max-w-3xl">
              Somos una empresa peruana que busca la información más adecuada
              para que las empresas aumenten su velocidad de reacción y así
              tomar la mejor decisión con la data obtenida y mejorar las
              relaciones comerciales entre las empresas y sus clientes finales.
            </p>
          </div>

          <div className=" mx-auto text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--blanco)] mb-4">
              <BlurText
                text="Vision"
                animateBy="words"
                className="justify-center"
                delay={100}
                direction="top"
                stepDuration={0.4}
              />
            </h2>
            <p className="text-lg text-[var(--gris-claro)] max-w-3xl">
              Ser la mejor alianza digital para el cliente, midiendo la
              productividad de productos o servicios en las distintas areas de
              las empresas y organizaciones en América Latina generando
              reputación y posicionamiento en el mercado.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MisionVisionVideo;

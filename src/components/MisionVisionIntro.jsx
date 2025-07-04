//UI Components
import Section from "@/components/ui/Section";
import BlurText from "./ReactBits/TextAnimations/BlurText";

const MisionVisionVideo = () => {
  return (
    <Section className="pt-8 sm:pt-12 lg:pt-6 pb-8 sm:pb-12 lg:pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Layout responsive: vertical en móvil, horizontal en desktop */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 xl:gap-16">
          
          {/* Video Container */}
          <div className="w-full lg:w-1/2 xl:w-[900px] order-1 lg:order-1">
            <div className="relative w-full h-0 pb-[56.25%] bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/g1r1j3E0o5A"
                title="FlowButton"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Misión y Visión Container */}
          <div className="w-full lg:w-1/2 order-2 lg:order-2 space-y-8 sm:space-y-10 lg:space-y-12">
            
            {/* Misión */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--blanco)] mb-4 sm:mb-6">
                <BlurText
                  text="Misión"
                  animateBy="words"
                  className="justify-center lg:justify-start"
                  delay={100}
                  direction="top"
                  stepDuration={0.4}
                />
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-[var(--gris-claro)] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Somos una empresa peruana que busca la información más adecuada
                para que las empresas aumenten su velocidad de reacción y así
                tomar la mejor decisión con la data obtenida y mejorar las
                relaciones comerciales entre las empresas y sus clientes finales.
              </p>
            </div>

            {/* Visión */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--blanco)] mb-4 sm:mb-6">
                <BlurText
                  text="Visión"
                  animateBy="words"
                  className="justify-center lg:justify-start"
                  delay={100}
                  direction="top"
                  stepDuration={0.4}
                />
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-[var(--gris-claro)] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Ser la mejor alianza digital para el cliente, midiendo la
                productividad de productos o servicios en las distintas áreas de
                las empresas y organizaciones en América Latina generando
                reputación y posicionamiento en el mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MisionVisionVideo;
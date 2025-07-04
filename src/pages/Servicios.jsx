import MainLayout from "@/layouts/MainLayout";
import ReusableCard from "../components/ui/Card-Reu";
import BlurText from "../components/ReactBits/TextAnimations/BlurText";
import CanvasRevealCard, {
  canvasPresets,
} from "../components/ui/card-reveal-reu";

const Servicios = () => {
  return (
    <MainLayout>
      {/* Inicial y Titulo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 mt-6 sm:mt-10 lg:mt-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--blanco)] mb-3 sm:mb-4 lg:mb-6">
            <BlurText
              text="Nuestros Servicios"
              animateBy="words"
              className="justify-center"
              delay={100}
              direction="top"
              stepDuration={0.4}
            />
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[var(--gris-claro)] max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
            No solo desarrollamos tecnología, creamos experiencias
            transformadoras. Combinamos creatividad, expertise técnico y visión
            estratégica para entregar soluciones que redefinen lo que es posible
            para tu empresa.
          </p>
        </div>

        {/* Cards de Servicios */}
        <div className="max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          {/* Mobile: Carrusel horizontal deslizable */}
          <div className="sm:hidden">
            <div className="flex gap-4 px-4 -mx-4 pb-4 overflow-x-auto">
              <div className="flex-shrink-0 w-80">
                <ReusableCard
                  title="Automatizacion con IA 🧠"
                  description="Transformamos tu negocio con soluciones de inteligencia artificial que automatizan procesos, optimizan decisiones y aumentan la productividad de tu empresa."
                  width="300px"
                  descriptionClassName="pb-4"
                  titleTranslateZ={100}
                  imageHeight="h-56"
                  descriptionTranslateZ={50}
                  imageTranslateZ={100}
                />
              </div>

              <div className="flex-shrink-0 w-80">
                <ReusableCard
                  title="Audiovisuales 🎥"
                  description="Creamos contenido audiovisual de alta calidad que comunica tu mensaje de forma impactante. Desde videos corporativos hasta producciones creativas que conectan con tu audiencia."
                  width="300px"
                  descriptionClassName="pb-4"
                  titleTranslateZ={100}
                  imageHeight="h-56"
                  descriptionTranslateZ={50}
                  imageTranslateZ={100}
                />
              </div>

              <div className="flex-shrink-0 w-80">
                <ReusableCard
                  title="Construccion de Software 💻"
                  descriptionClassName="pb-4"
                  description="Desarrollamos software personalizado y aplicaciones web/móviles que impulsan el crecimiento de tu negocio con tecnología de vanguardia y diseño centrado en el usuario."
                  width="300px"
                  imageHeight="h-56"
                  titleTranslateZ={100}
                  descriptionTranslateZ={50}
                  imageTranslateZ={100}
                />
              </div>
            </div>
          </div>

          {/* Grid para tablet y desktop */}
          <div className="hidden sm:flex sm:flex-row sm:flex-wrap lg:flex-nowrap gap-4 sm:gap-6 lg:gap-8">
            <div className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.33rem)]">
              <ReusableCard
                title="Automatizacion con IA 🧠"
                description="Transformamos tu negocio con soluciones de inteligencia artificial que automatizan procesos, optimizan decisiones y aumentan la productividad de tu empresa."
                width="100%"
                descriptionClassName="pb-4"
                titleTranslateZ={100}
                imageHeight="h-48 sm:h-56 lg:h-60"
                descriptionTranslateZ={50}
                imageTranslateZ={100}
              />
            </div>

            <div className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.33rem)]">
              <ReusableCard
                title="Audiovisuales 🎥"
                description="Creamos contenido audiovisual de alta calidad que comunica tu mensaje de forma impactante. Desde videos corporativos hasta producciones creativas que conectan con tu audiencia."
                width="100%"
                descriptionClassName="pb-4"
                titleTranslateZ={100}
                imageHeight="h-48 sm:h-56 lg:h-60"
                descriptionTranslateZ={50}
                imageTranslateZ={100}
              />
            </div>

            <div className="w-full sm:w-full lg:w-[calc(33.333%-1.33rem)] sm:mx-auto lg:mx-0 sm:max-w-md lg:max-w-none">
              <ReusableCard
                title="Construccion de Software 💻"
                descriptionClassName="pb-4"
                description="Desarrollamos software personalizado y aplicaciones web/móviles que impulsan el crecimiento de tu negocio con tecnología de vanguardia y diseño centrado en el usuario."
                width="100%"
                imageHeight="h-48 sm:h-56 lg:h-60"
                titleTranslateZ={100}
                descriptionTranslateZ={50}
                imageTranslateZ={100}
              />
            </div>
          </div>
        </div>

        {/* Sección de Planes */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--blanco)] mb-3 sm:mb-4 lg:mb-6">
            <BlurText
              text="Nuestros Planes"
              animateBy="words"
              className="justify-center"
              delay={100}
              direction="top"
              stepDuration={0.4}
            />
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-[var(--gris-claro)] max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
            Los planes de Hannah Produce están diseñados para adaptarse a las
            necesidades de tu empresa, ofreciendo flexibilidad y escalabilidad.
          </p>
        </div>

        {/* Planes - Responsive Grid */}
        <div className="pb-10 sm:pb-16 lg:pb-20">
          {/* Mobile: Carrusel horizontal */}
          <div className="sm:hidden">
            <div className="flex gap-6 px-4 -mx-4 pb-4 overflow-x-auto">
              <div className="flex-shrink-0 w-72">
                <CanvasRevealCard
                  planTitle="Plan Básico"
                  iconText="$15.00"
                  planDescription="Ideal para pequeñas empresas que buscan iniciar su transformación digital."
                  buttonText="Seleccionar Plan"
                  disabled={false}
                  canvasConfig={canvasPresets.premiumGreenDark}
                />
              </div>

              <div className="flex-shrink-0 w-72">
                <CanvasRevealCard
                  planTitle="Plan Pyme"
                  iconText="$25.00"
                  planDescription="Ideal para pequeñas empresas que buscan iniciar su transformación digital."
                  buttonText="Seleccionar Plan"
                  disabled={false}
                  canvasConfig={canvasPresets.premiumGreenDark}
                />
              </div>

              <div className="flex-shrink-0 w-72">
                <CanvasRevealCard
                  planTitle="Plan Corporativo"
                  iconText="$35.00"
                  canvasConfig={canvasPresets.premiumGreenDark}
                  planDescription="Ideal para pequeñas empresas que buscan iniciar su transformación digital."
                  buttonText="Seleccionar Plan"
                  disabled={false}
                />
              </div>

              <div className="flex-shrink-0 w-72">
                <CanvasRevealCard
                  planTitle="Plan Premium"
                  iconText="$45.00"
                  canvasConfig={canvasPresets.premiumGreenDark}
                  planDescription="Ideal para pequeñas empresas que buscan iniciar su transformación digital."
                  buttonText="Seleccionar Plan"
                  disabled={false}
                />
              </div>
            </div>
          </div>

          {/* Grid para tablet y desktop */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
            <div className="w-full max-w-sm">
              <CanvasRevealCard
                planTitle="Plan Básico"
                iconText="$15.00"
                planDescription="Ideal para pequeñas empresas que buscan iniciar su transformación digital."
                buttonText="Seleccionar Plan"
                disabled={false}
                canvasConfig={canvasPresets.premiumGreenDark}
              />
            </div>

            <div className="w-full max-w-sm">
              <CanvasRevealCard
                planTitle="Plan Pyme"
                iconText="$25.00"
                planDescription="Ideal para pequeñas empresas que buscan iniciar su transformación digital."
                buttonText="Seleccionar Plan"
                disabled={false}
                canvasConfig={canvasPresets.premiumGreenDark}
              />
            </div>

            <div className="w-full max-w-sm">
              <CanvasRevealCard
                planTitle="Plan Corporativo"
                iconText="$35.00"
                canvasConfig={canvasPresets.premiumGreenDark}
                planDescription="Ideal para pequeñas empresas que buscan iniciar su transformación digital."
                buttonText="Seleccionar Plan"
                disabled={false}
              />
            </div>

            <div className="w-full max-w-sm">
              <CanvasRevealCard
                planTitle="Plan Premium"
                iconText="$45.00"
                canvasConfig={canvasPresets.premiumGreenDark}
                planDescription="Ideal para pequeñas empresas que buscan iniciar su transformación digital."
                buttonText="Seleccionar Plan"
                disabled={false}
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Servicios;
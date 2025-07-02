import MainLayout from "@/layouts/MainLayout";
import ReusableCard from "../components/ui/Card-Reu";

const Servicios = () => {
  return (
    <MainLayout>
      {/* Inicial y Titulo */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-5 mt-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--blanco)] mb-4">
            Nuestros{" "}
            <span className="text-[var(--verde-limon)]">Servicios</span>
          </h2>
          <p className="text-lg text-[var(--gris-claro)] max-w-3xl mx-auto">
            No solo desarrollamos tecnología, creamos experiencias
            transformadoras. Combinamos creatividad, expertise técnico y visión
            estratégica para entregar soluciones que redefinen lo que es posible
            para tu empresa.
          </p>
        </div>

        {/* Cards de Servicios */}
        <div className=" max-w-7xl mx-auto">
          <div className="flex justify-between gap-8 mb-5">
            <ReusableCard
              title="Automatizacion con IA 🧠"
              description="Transformamos tu negocio con soluciones de inteligencia artificial que automatizan procesos, optimizan decisiones y aumentan la productividad de tu empresa."
              width="300px"
              descriptionClassName="pb-4"
              titleTranslateZ={100}
              imageHeight="h-50"
              descriptionTranslateZ={50}
              imageTranslateZ={100}
              rightButton={false}
            />
            <ReusableCard
              title="Audiovisuales 🎥"
              description="Creamos contenido audiovisual de alta calidad que comunica tu mensaje de forma impactante. Desde videos corporativos hasta producciones creativas que conectan con tu audiencia."
              width="300px"
              descriptionClassName="pb-4"
              titleTranslateZ={100}
              imageHeight="h-50"
              descriptionTranslateZ={50}
              rightButton={false}
              imageTranslateZ={100}
            />

            <ReusableCard
              title="Construccion de Software 💻"
              rightButton={false}
              descriptionClassName="pb-4"
              description="Desarrollamos software personalizado y aplicaciones web/móviles que impulsan el crecimiento de tu negocio con tecnología de vanguardia y diseño centrado en el usuario."
              width="300px"
              imageHeight="h-50"
              titleTranslateZ={100}
              descriptionTranslateZ={50}
              imageTranslateZ={100}
            />
          </div>
        </div>

        {/* Sección de Planes */}

      </div>
    </MainLayout>
  );
};

export default Servicios;

// src/components/ReusableCard.jsx
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card-view";

const ReusableCard = ({
  // Contenido
  title = "Default Title",
  description = "Default description text",
  image = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imageAlt = "Card image",
  
  // Botones
  rightButton = {
    text: "Adquirir",
    type: "button",
    href: null,
    target: null,
    onClick: () => console.log("Button clicked")
  },
  
  // Estilos personalizables
  containerClassName = "inter-var",
  cardBodyClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  imageClassName = "",
  rightButtonClassName = "",
  
  // Tamaños
  width = "30rem",
  imageHeight = "h-60",
  
  // Efectos 3D
  titleTranslateZ = "50",
  descriptionTranslateZ = "60",
  imageTranslateZ = "100",
  buttonTranslateZ = 20,
  
  // Configuración de imagen
  showImage = true,
  
  // Shadow color
  shadowColor = "emerald-500"
}) => {
  
  // Función para renderizar botones
  const renderButton = (button, defaultClassName, customClassName) => {
    const baseClasses = `px-4 py-2 rounded-xl text-xs font-normal transition-colors duration-200 ${defaultClassName} ${customClassName}`;
    
    if (button.type === "link" && button.href) {
      return (
        <CardItem
          translateZ={buttonTranslateZ}
          as="a"
          href={button.href}
          target={button.target}
          className={baseClasses}
        >
          {button.text}
        </CardItem>
      );
    }
    
    return (
      <CardItem
        translateZ={buttonTranslateZ}
        as="button"
        onClick={button.onClick}
        className={baseClasses}
      >
        {button.text}
      </CardItem>
    );
  };

  return (
    <CardContainer className={containerClassName}>
      <CardBody 
        className={`bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-${shadowColor}/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[${width}] h-auto rounded-xl p-6 border ${cardBodyClassName}`}
      >
        {/* Título */}
        <CardItem
          translateZ={titleTranslateZ}
          className={`text-xl font-bold text-neutral-600 dark:text-white ${titleClassName}`}
        >
          {title}
        </CardItem>
        
        {/* Descripción */}
        <CardItem
          as="p"
          translateZ={descriptionTranslateZ}
          className={`text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 ${descriptionClassName}`}
        >
          {description}
        </CardItem>
        
        {/* Imagen (opcional) */}
        {showImage && image && (
          <CardItem translateZ={imageTranslateZ} className="w-full mt-4">
            <img
              src={image}
              height="1000"
              width="1000"
              className={`${imageHeight} w-full object-cover rounded-xl group-hover/card:shadow-xl ${imageClassName}`}
              alt={imageAlt}
            />
          </CardItem>
        )}
        
        {/* Botones */}
        <div className="flex justify-end items-center mt-20">
          
          {renderButton(
            rightButton,
            "bg-black dark:bg-white dark:text-black text-white font-bold hover:bg-gray-800 dark:hover:bg-gray-200",
            rightButtonClassName
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ReusableCard;
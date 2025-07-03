// src/components/ReusableCard.jsx - Con animaciones CSS integradas
import React, { useState, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card-view";

const ReusableCard = ({
  // Contenido
  title = "Default Title",
  description = "Default description text",
  image = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  imageAlt = "Card image",
  
  // Estilos personalizables
  containerClassName = "inter-var",
  cardBodyClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  imageClassName = "",
  
  // Tamaños
  width = "30rem",
  imageHeight = "h-60",
  cardHeight = "h-[500px]",
  
  // Efectos 3D
  titleTranslateZ = "50",
  descriptionTranslateZ = "60",
  imageTranslateZ = "100",
  
  // Configuración de imagen
  showImage = true,
  
  // Shadow color
  shadowColor = "emerald",
  
  // Props de loading
  isLoading = false,
  loadingDelay = 800,
  animationDelay = 0,
  showSkeleton = true
}) => {
  
  // Estado de carga
  const [isContentLoaded, setIsContentLoaded] = useState(!isLoading);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Configuración de shadows
  const shadowConfigs = {
    emerald: {
      base: "dark:hover:shadow-2xl",
      colored: "dark:hover:shadow-emerald-500/10",
      glow: "hover:shadow-emerald-500/20"
    },
    blue: {
      base: "dark:hover:shadow-2xl",
      colored: "dark:hover:shadow-blue-500/10", 
      glow: "hover:shadow-blue-500/20"
    },
    purple: {
      base: "dark:hover:shadow-2xl",
      colored: "dark:hover:shadow-purple-500/10",
      glow: "hover:shadow-purple-500/20"
    },
    red: {
      base: "dark:hover:shadow-2xl",
      colored: "dark:hover:shadow-red-500/10",
      glow: "hover:shadow-red-500/20"
    },
    green: {
      base: "dark:hover:shadow-2xl", 
      colored: "dark:hover:shadow-green-500/10",
      glow: "hover:shadow-green-500/20"
    },
    cyan: {
      base: "dark:hover:shadow-2xl",
      colored: "dark:hover:shadow-cyan-500/10",
      glow: "hover:shadow-cyan-500/20"
    },
    pink: {
      base: "dark:hover:shadow-2xl",
      colored: "dark:hover:shadow-pink-500/10",
      glow: "hover:shadow-pink-500/20"
    },
    orange: {
      base: "dark:hover:shadow-2xl",
      colored: "dark:hover:shadow-orange-500/10",
      glow: "hover:shadow-orange-500/20"
    },
    indigo: {
      base: "dark:hover:shadow-2xl",
      colored: "dark:hover:shadow-indigo-500/10",
      glow: "hover:shadow-indigo-500/20"
    }
  };

  // Simular carga de contenido
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsContentLoaded(true);
      }, loadingDelay);
      
      return () => clearTimeout(timer);
    }
  }, [isLoading, loadingDelay]);

  // Manejar carga de imagen
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Obtener configuración de shadow
  const currentShadow = shadowConfigs[shadowColor] || shadowConfigs.emerald;
  const shadowClasses = `${currentShadow.base} ${currentShadow.colored} ${currentShadow.glow}`;

  // Estilos CSS para las animaciones
  const animationStyles = `
    <style>
      /* Keyframes para las animaciones */
      @keyframes shimmer {
        0% {
          background-position: -200px 0;
        }
        100% {
          background-position: calc(200px + 100%) 0;
        }
      }

      @keyframes fadeInBlur {
        from {
          opacity: 0;
          filter: blur(10px);
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          filter: blur(0px);
          transform: translateY(0px);
        }
      }

      @keyframes textFadeIn {
        from {
          opacity: 0;
          filter: blur(4px);
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          filter: blur(0px);
          transform: translateY(0px);
        }
      }

      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }

      /* Clases de skeleton */
      .skeleton {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200px 100%;
        animation: shimmer 1.5s infinite;
        border-radius: 4px;
      }

      .skeleton-dark {
        background: linear-gradient(90deg, #1f2937 25%, #374151 50%, #1f2937 75%);
        background-size: 200px 100%;
        animation: shimmer 1.5s infinite;
      }

      /* Animaciones de carga de la card */
      .card-blur-loading {
        opacity: 0;
        filter: blur(10px);
        transform: translateY(20px);
      }

      .card-blur-loaded {
        animation: fadeInBlur 0.8s ease-out forwards;
      }

      /* Animaciones de texto */
      .text-blur-loading {
        opacity: 0;
        filter: blur(4px);
        transform: translateY(10px);
      }

      .text-blur-loaded {
        animation: textFadeIn 0.6s ease-out forwards;
      }

      /* Shimmer effect para la card completa */
      .card-shimmer {
        position: relative;
        overflow: hidden;
      }

      .card-shimmer::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          90deg,
          transparent 0%,
          rgba(255, 255, 255, 0.1) 50%,
          transparent 100%
        );
        animation: shimmer 2s infinite;
        pointer-events: none;
      }

      .dark .card-shimmer::before {
        background: linear-gradient(
          90deg,
          transparent 0%,
          rgba(255, 255, 255, 0.05) 50%,
          transparent 100%
        );
      }

      /* Delays para stagger effect */
      .card-delay-1 {
        animation-delay: 0.1s;
      }

      .card-delay-2 {
        animation-delay: 0.2s;
      }

      .card-delay-3 {
        animation-delay: 0.3s;
      }

      .card-delay-4 {
        animation-delay: 0.4s;
      }

      .card-delay-5 {
        animation-delay: 0.5s;
      }

      /* Transiciones suaves para imágenes */
      .image-fade-in {
        transition: opacity 0.3s ease-in-out, filter 0.3s ease-in-out;
      }

      /* Loading pulse effect */
      .loading-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }

      /* Hover effects mejorados */
      .card-hover-effect {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .card-hover-effect:hover {
        transform: translateY(-2px);
      }

      /* Responsive adjustments */
      @media (max-width: 640px) {
        .card-blur-loading,
        .card-blur-loaded {
          transform: translateY(10px);
        }
        
        .card-blur-loaded {
          animation-duration: 0.6s;
        }
      }
    </style>
  `;

  // Clases de animación
  const getAnimationClasses = () => {
    if (!isContentLoaded) {
      return "card-blur-loading";
    }
    
    const delayClass = animationDelay > 0 ? `card-delay-${Math.min(animationDelay, 5)}` : '';
    return `card-blur-loaded ${delayClass}`;
  };

  // Renderizar skeleton loader
  const renderSkeleton = () => (
    <>
      <div dangerouslySetInnerHTML={{ __html: animationStyles }} />
      <CardContainer className={containerClassName}>
        <CardBody 
          className={`
            bg-gray-50 
            dark:bg-gray-900 
            relative 
            ${cardHeight} 
            rounded-xl 
            p-6 
            border 
            border-gray-200 
            dark:border-gray-700 
            flex 
            flex-col 
            w-auto 
            sm:w-[${width}]
            card-shimmer
            loading-pulse
          `}
        >
          {/* Skeleton título */}
          <div className="skeleton dark:skeleton-dark h-7 w-3/4 mb-3 rounded"></div>
          
          {/* Skeleton descripción */}
          <div className="flex-1 space-y-2 mb-4">
            <div className="skeleton dark:skeleton-dark h-4 w-full rounded"></div>
            <div className="skeleton dark:skeleton-dark h-4 w-5/6 rounded"></div>
            <div className="skeleton dark:skeleton-dark h-4 w-4/6 rounded"></div>
          </div>
          
          {/* Skeleton imagen */}
          {showImage && (
            <div className={`skeleton dark:skeleton-dark ${imageHeight} w-full rounded-xl mt-4`}></div>
          )}
        </CardBody>
      </CardContainer>
    </>
  );

  // Si está cargando y debe mostrar skeleton
  if (isLoading && !isContentLoaded && showSkeleton) {
    return renderSkeleton();
  }

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: animationStyles }} />
      <div className={`${getAnimationClasses()} card-hover-effect`}>
        <CardContainer className={containerClassName}>
          <CardBody 
            className={`
              bg-gray-50 
              relative 
              group/card 
              ${shadowClasses}
              dark:bg-black 
              dark:border-white/[0.2] 
              border-black/[0.1] 
              w-auto 
              sm:w-[${width}] 
              ${cardHeight} 
              rounded-xl 
              p-6 
              border 
              flex 
              flex-col 
              transition-all 
              duration-300 
              ease-in-out
              ${cardBodyClassName}
            `}
          >
            {/* Título con animación de texto */}
            <CardItem
              translateZ={titleTranslateZ}
              className={`
                text-xl 
                font-bold 
                text-neutral-600 
                dark:text-white 
                mb-3 
                ${isContentLoaded ? 'text-blur-loaded' : 'text-blur-loading'}
                ${titleClassName}
              `}
            >
              {title}
            </CardItem>
            
            {/* Descripción con animación de texto */}
            <CardItem
              as="div"
              translateZ={descriptionTranslateZ}
              className={`flex-1 flex items-start ${descriptionClassName}`}
            >
              <p className={`
                text-neutral-500 
                text-sm 
                dark:text-neutral-300 
                line-clamp-4 
                overflow-hidden
                ${isContentLoaded ? 'text-blur-loaded' : 'text-blur-loading'}
              `}>
                {description}
              </p>
            </CardItem>
            
            {/* Imagen con lazy loading */}
            {showImage && image && (
              <CardItem translateZ={imageTranslateZ} className="w-full mt-4">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={image}
                    height="1000"
                    width="1000"
                    className={`
                      ${imageHeight} 
                      w-full 
                      object-cover 
                      rounded-xl 
                      group-hover/card:shadow-xl 
                      transition-all 
                      duration-300
                      image-fade-in
                      ${imageLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}
                      ${imageClassName}
                    `}
                    alt={imageAlt}
                    onLoad={handleImageLoad}
                    loading="lazy"
                  />
                  
                  {/* Placeholder mientras carga la imagen */}
                  {!imageLoaded && (
                    <div className={`
                      absolute 
                      inset-0 
                      skeleton 
                      dark:skeleton-dark 
                      ${imageHeight} 
                      rounded-xl
                      loading-pulse
                    `}></div>
                  )}
                </div>
              </CardItem>
            )}
          </CardBody>
        </CardContainer>
      </div>
    </>
  );
};

export default ReusableCard;
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
// src/components/CanvasRevealCard.jsx - Componente reutilizable optimizado con paleta personalizada
"use client";
import React, { useState, useCallback, memo } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./canvas-reveal";

// Componente de texto por defecto optimizado
const DefaultIcon = memo(({ text = "✨", className = "" }) => (
  <div className={`
    h-16 w-16 flex items-center justify-center
    text-4xl font-bold text-[#F1F1F1] dark:text-[#F1F1F1] 
    group-hover/canvas-card:text-[#F1F1F1] transition-colors duration-200
    ${className}
  `}>
    {text}
  </div>
));

// Componente de texto alternativo
const TextIcon = memo(({ 
  text = "Pro", 
  size = "text-2xl", 
  className = "" 
}) => (
  <div className={`
    h-16 w-16 flex items-center justify-center
    ${size} font-bold text-[#040404] dark:text-[#F1F1F1] 
    group-hover/canvas-card:text-[#040404] transition-all duration-200
    bg-[#F1F1F1]/20 dark:bg-[#646463]/20 rounded-full border-2 border-[#a4a4a4]/30 dark:border-[#646463]/30
    group-hover/canvas-card:bg-[#F1F1F1]/90 group-hover/canvas-card:border-[#93ca07]/50
    group-hover/canvas-card:scale-110
    ${className}
  `}>
    {text}
  </div>
));

const CornerIcon = memo(({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
    {...rest}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
));

// Componente principal
const CanvasRevealCard = memo(({
  // Contenido básico
  icon: CustomIcon = DefaultIcon,
  iconText = "✨",
  iconSize = "text-2xl",
  
  // Contenido del hover (información adicional)
  planTitle = "Premium Plan",
  planDescription = "Perfect for growing teams and businesses looking to scale their operations.",
  buttonText = "Get Started",
  onButtonClick = () => console.log("Button clicked"),
  
  // Configuración del efecto Canvas
  canvasConfig = {
    animationSpeed: 3,
    containerClassName: "bg-emerald-900",
    colors: undefined,
    dotSize: undefined
  },
  
  // Personalización de colores usando tu paleta
  textTheme = "dark", // "dark" | "light" | "brand"
  
  // Personalización visual
  cardClassName = "",
  width = "max-w-sm",
  height = "h-[30rem]",
  showCornerIcons = true,
  
  // Estados y comportamiento
  clickable = true,
  disabled = false,
  
  // Overlay personalizado
  customOverlay = null,
  
  // Timing de animaciones
  hoverDelay = 0,
  animationDuration = 200
}) => {
  const [hovered, setHovered] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Referencias para limpiar timers
  const [timers, setTimers] = useState({ enterTimer: null, leaveTimer: null });

  // Configuración de temas de texto usando tu paleta
  const textThemes = {
    dark: {
      title: "text-[#F1F1F1]", // Negro principal
      description: "text-[#F1F1F1]", // Gris
      button: {
        bg: "bg-[#040404]/80",
        text: "text-[#F1F1F1]",
        hover: "hover:bg-[#040404]",
        border: "border-[#040404]/30"
      }
    },
    light: {
      title: "text-[#F1F1F1]", // Blanco
      description: "text-[#F1F1F1]/90", // Blanco con opacidad
      button: {
        bg: "bg-[#F1F1F1]/20",
        text: "text-[#040404]",
        hover: "hover:bg-[#F1F1F1]/30",
        border: "border-[#F1F1F1]/30"
      }
    },
    brand: {
      title: "text-[#93ca07]", // Verde principal
      description: "text-[#F1F1F1]", // Blanco para descripción
      button: {
        bg: "bg-[#93ca07]",
        text: "text-[#040404]",
        hover: "hover:bg-[#d6f576]",
        border: "border-[#93ca07]"
      }
    },
    contrast: {
      title: "text-[#040404]", // Negro principal para máximo contraste
      description: "text-[#040404]/80", // Negro con opacidad
      button: {
        bg: "bg-[#93ca07]",
        text: "text-[#040404]",
        hover: "hover:bg-[#d6f576]",
        border: "border-[#93ca07]"
      }
    }
  };

  const currentTheme = textThemes[textTheme] || textThemes.contrast;

  // Handlers optimizados con limpieza de timers
  const handleMouseEnter = useCallback(() => {
    if (disabled) return;
    
    // Limpiar cualquier timer pendiente
    if (timers.leaveTimer) {
      clearTimeout(timers.leaveTimer);
      setTimers(prev => ({ ...prev, leaveTimer: null }));
    }
    
    // Establecer estado inmediato
    setHovered(true);
    
    // Delay para mostrar contenido después del efecto canvas
    const enterTimer = setTimeout(() => {
      setShowContent(true);
    }, hoverDelay + 300);
    
    setTimers(prev => ({ ...prev, enterTimer }));
  }, [disabled, hoverDelay, timers.leaveTimer]);

  const handleMouseLeave = useCallback(() => {
    // Limpiar timer de entrada si está pendiente
    if (timers.enterTimer) {
      clearTimeout(timers.enterTimer);
      setTimers(prev => ({ ...prev, enterTimer: null }));
    }
    
    // Reset inmediato del estado
    setHovered(false);
    setShowContent(false);
    
    // Pequeño delay para asegurar que la animación se complete
    const leaveTimer = setTimeout(() => {
      setHovered(false);
      setShowContent(false);
    }, 50);
    
    setTimers(prev => ({ ...prev, leaveTimer }));
  }, [timers.enterTimer]);

  // Cleanup al desmontar componente
  React.useEffect(() => {
    return () => {
      if (timers.enterTimer) clearTimeout(timers.enterTimer);
      if (timers.leaveTimer) clearTimeout(timers.leaveTimer);
    };
  }, [timers.enterTimer, timers.leaveTimer]);

  const handleButtonClick = useCallback((e) => {
    if (disabled) return;
    e.stopPropagation();
    onButtonClick();
  }, [disabled, onButtonClick]);

  // Clases dinámicas
  const cardClasses = `
    border border-[#a4a4a4]/20 group/canvas-card flex items-center justify-center 
    dark:border-[#646463]/20 ${width} w-full mx-auto p-4 relative ${height} 
    cursor-${clickable && !disabled ? 'pointer' : 'default'}
    ${disabled ? 'opacity-50' : ''}
    transition-all duration-300 ease-in-out
    hover:shadow-lg hover:shadow-[#93ca07]/10 hover:scale-[1.02]
    hover:border-[#93ca07]/30
    ${cardClassName}
  `;

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cardClasses}
      role={clickable ? "button" : "presentation"}
      tabIndex={clickable && !disabled ? 0 : -1}
    >
      {/* Corner Icons */}
      {showCornerIcons && (
        <>
          <CornerIcon className="absolute h-6 w-6 -top-3 -left-3 text-[#646463] dark:text-[#a4a4a4] transition-colors duration-200 group-hover/canvas-card:text-[#93ca07]" />
          <CornerIcon className="absolute h-6 w-6 -bottom-3 -left-3 text-[#646463] dark:text-[#a4a4a4] transition-colors duration-200 group-hover/canvas-card:text-[#93ca07]" />
          <CornerIcon className="absolute h-6 w-6 -top-3 -right-3 text-[#646463] dark:text-[#a4a4a4] transition-colors duration-200 group-hover/canvas-card:text-[#93ca07]" />
          <CornerIcon className="absolute h-6 w-6 -bottom-3 -right-3 text-[#646463] dark:text-[#a4a4a4] transition-colors duration-200 group-hover/canvas-card:text-[#93ca07]" />
        </>
      )}

      {/* Canvas Reveal Effect */}
      <AnimatePresence mode="wait">
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect {...canvasConfig} />
            {customOverlay}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido principal (siempre visible) */}
      <div className="relative z-20 h-full w-full flex flex-col items-center justify-center">
        {/* Icono inicial */}
        <div className={`
          text-center transition-all duration-${animationDuration} ease-in-out
          ${showContent 
            ? 'opacity-0 -translate-y-8 scale-75' 
            : 'opacity-100 translate-y-0 scale-100'
          }
        `}>
          {CustomIcon === DefaultIcon ? (
            <DefaultIcon 
              text={iconText} 
              className={`${iconSize}`} 
            />
          ) : (
            <CustomIcon />
          )}
        </div>
      </div>

      {/* Contenido del plan (aparece en hover) */}
      <AnimatePresence mode="wait">
        {showContent && hovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.3, 
              ease: "easeOut",
              exit: { duration: 0.15 }
            }}
            className="absolute inset-0 z-30 p-6 flex flex-col justify-between"
          >
            {/* Contenido superior */}
            <div className="flex-1 flex flex-col justify-center text-center">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: hovered ? 0.1 : 0 }}
                className={`text-2xl font-bold mb-4 ${currentTheme.title}`}
              >
                {planTitle}
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: hovered ? 0.2 : 0 }}
                className={`text-sm leading-relaxed ${currentTheme.description}`}
              >
                {planDescription}
              </motion.p>
            </div>

            {/* Botón en la esquina inferior derecha */}
            <div className="flex justify-end">
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  delay: hovered ? 0.3 : 0, 
                  type: "spring", 
                  stiffness: 200,
                  exit: { duration: 0.1 }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleButtonClick}
                className={`
                  ${currentTheme.button.bg} ${currentTheme.button.text} 
                  ${currentTheme.button.hover} backdrop-blur-sm 
                  border ${currentTheme.button.border}
                  px-4 py-2 rounded-lg text-sm font-medium
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-[#93ca07]/50
                  disabled:opacity-50 disabled:cursor-not-allowed
                  shadow-lg
                `}
                disabled={disabled}
              >
                {buttonText}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

// Componente contenedor para múltiples cards
const CanvasRevealCardContainer = memo(({ 
  cards = [],
  containerClassName = "py-20 flex flex-col lg:flex-row items-center justify-center bg-[#F1F1F1] dark:bg-[#040404] w-full gap-4 mx-auto px-8",
  children 
}) => (
  <div className={containerClassName}>
    {children || cards.map((card, index) => (
      <CanvasRevealCard
        key={card.id || index}
        {...card}
      />
    ))}
  </div>
));

// Configuraciones predefinidas actualizadas con tu paleta
export const canvasPresets = {
  verde: {
    animationSpeed: 5.1,
    containerClassName: "bg-gradient-to-br from-[#93ca07] to-[#d6f576]",
    colors: [[147, 202, 7]], // Tu verde principal
    dotSize: 3
  },
  negro: {
    animationSpeed: 3,
    containerClassName: "bg-[#040404]",
    colors: [[4, 4, 4], [100, 100, 99]], // Negro y gris
    dotSize: 2
  },
  gris: {
    animationSpeed: 3,
    containerClassName: "bg-gradient-to-br from-[#646463] to-[#a4a4a4]",
    colors: [[100, 100, 99], [164, 164, 164]] // Tus grises
  },
  // ✨ PRESET ESPECIAL PARA PIXELES BLANCOS
  whitePixels: {
    animationSpeed: 3,
    containerClassName: "bg-gradient-to-br from-cyan-500 to-teal-600", // Fondo similar a tu imagen
    colors: [[255, 255, 255]], // Píxeles blancos puros
    dotSize: 2
  },
  // ✨ PRESET CON PIXELES VERDE OSCURO (como el rosado de tu imagen)
  greenDarkPixels: {
    animationSpeed: 3,
    containerClassName: "bg-gradient-to-br from-gray-900 via-black to-gray-800", // Fondo oscuro como tu imagen
    colors: [[34, 102, 34], [22, 78, 22]], // Verde oscuro intenso similar al rosado
    dotSize: 2
  },
  // ✨ VARIANTE CON TU VERDE DE MARCA
  brandGreenPixels: {
    animationSpeed: 3.5,
    containerClassName: "bg-gradient-to-br from-gray-900 via-black to-gray-800",
    colors: [[147, 202, 7], [93, 162, 5]], // Tu verde principal más oscuro
    dotSize: 2
  },
  // ✨ VERDE ESMERALDA OSCURO
  emeraldDarkPixels: {
    animationSpeed: 3,
    containerClassName: "bg-gradient-to-br from-gray-900 via-black to-gray-800",
    colors: [[16, 78, 56], [6, 95, 70]], // Verde esmeralda oscuro
    dotSize: 2
  },
  emerald: {
    animationSpeed: 5.1,
    containerClassName: "bg-emerald-900"
  },
  pink: {
    animationSpeed: 3,
    containerClassName: "bg-black",
    colors: [[236, 72, 153], [232, 121, 249]],
    dotSize: 2
  },
  sky: {
    animationSpeed: 3,
    containerClassName: "bg-sky-600",
    colors: [[125, 211, 252]]
  },
  // ✨ SKY CON PIXELES BLANCOS
  skyWhite: {
    animationSpeed: 3,
    containerClassName: "bg-gradient-to-br from-sky-500 to-cyan-600",
    colors: [[255, 255, 255]], // Píxeles blancos
    dotSize: 2
  },
  purple: {
    animationSpeed: 4,
    containerClassName: "bg-purple-900",
    colors: [[168, 85, 247], [147, 51, 234]]
  },
  // Presets específicos para tu marca
  brandPrimary: {
    animationSpeed: 4,
    containerClassName: "bg-gradient-to-br from-[#93ca07] to-[#040404]",
    colors: [[147, 202, 7], [214, 245, 118]],
    dotSize: 3
  },
  brandSecondary: {
    animationSpeed: 3.5,
    containerClassName: "bg-gradient-to-tr from-[#646463] via-[#a4a4a4] to-[#F1F1F1]",
    colors: [[100, 100, 99], [164, 164, 164], [241, 241, 241]],
    dotSize: 2
  },
  // ✨ PRESET PARA PLAN PREMIUM CON PIXELES VERDE OSCURO
  premiumGreenDark: {
    animationSpeed: 3.5,
    containerClassName: "bg-gradient-to-br from-gray-900 via-black to-gray-800", // Fondo oscuro
    colors: [[34, 102, 34], [22, 78, 22], [16, 64, 16]], // Varios tonos de verde oscuro
    dotSize: 3
  }
};

// Asignar displayNames para debugging
CanvasRevealCard.displayName = 'CanvasRevealCard';
CanvasRevealCardContainer.displayName = 'CanvasRevealCardContainer';
DefaultIcon.displayName = 'DefaultIcon';
TextIcon.displayName = 'TextIcon';
CornerIcon.displayName = 'CornerIcon';

export { CanvasRevealCard, CanvasRevealCardContainer, TextIcon };
export default CanvasRevealCard;
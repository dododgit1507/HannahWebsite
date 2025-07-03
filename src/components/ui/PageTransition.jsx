import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

/**
 * PageTransition component that provides smooth transitions between pages
 * @param {Object} props
 * @param {React.ReactNode} props.children - The page content
 * @param {string} props.type - Transition type ('fade', 'slide', 'zoom', 'flip')
 * @param {number} props.duration - Duration of the transition in seconds
 */
const PageTransition = ({ 
  children, 
  type = 'fade', 
  duration = 0.5 
}) => {
  const location = useLocation();
  
  // Define transition variants based on type
  const getVariants = () => {
    switch (type) {
      case 'slide':
        return {
          initial: { opacity: 0, x: -300 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 300 }
        };
      case 'zoom':
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 1.2 }
        };
      case 'flip':
        return {
          initial: { opacity: 0, rotateY: 90 },
          animate: { opacity: 1, rotateY: 0 },
          exit: { opacity: 0, rotateY: -90 }
        };
      case 'fade':
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 }
        };
    }
  };

  const variants = getVariants();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        transition={{ 
          duration,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;

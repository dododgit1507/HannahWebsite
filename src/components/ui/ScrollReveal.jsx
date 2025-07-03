import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

/**
 * ScrollReveal component that animates children when they come into view
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content to be revealed
 * @param {string} props.direction - The direction from which the element appears ('up', 'down', 'left', 'right')
 * @param {number} props.delay - Delay before animation starts (in seconds)
 * @param {number} props.duration - Duration of the animation (in seconds)
 * @param {number} props.distance - Distance the element travels during animation (in pixels)
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.once - Whether to animate only once or every time the element comes into view
 * @param {number} props.threshold - Percentage of element that needs to be visible to trigger animation (0-1)
 */
const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  distance = 50,
  className = '',
  once = true,
  threshold = 0.1,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { 
    once, 
    threshold 
  });

  // Define initial positions based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance };
      case 'down':
        return { opacity: 0, y: -distance };
      case 'left':
        return { opacity: 0, x: distance };
      case 'right':
        return { opacity: 0, x: -distance };
      default:
        return { opacity: 0, y: distance };
    }
  };

  // Define animation variants
  const variants = {
    hidden: getInitialPosition(),
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { 
        duration, 
        delay, 
        ease: "easeOut" 
      }
    }
  };

  // Start animation when element comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

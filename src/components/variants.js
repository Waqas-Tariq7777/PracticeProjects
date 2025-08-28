export const fadeIn = (direction, delay = 0) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",      // spring feels smoother than tween
        stiffness: 80,       // controls speed
        damping: 15,         // controls bounce / smoothness
        delay,
      },
    },
  };
};

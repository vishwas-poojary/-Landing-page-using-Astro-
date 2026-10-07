export const initAccessibility = () => {
  // Checks user preference for reduced motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.setAttribute("data-no-lenis", "true");
  }
};

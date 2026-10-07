import Lenis from "lenis";

let lenis: Lenis | undefined;
let videoObserver: IntersectionObserver | undefined;
let revealObserver: IntersectionObserver | undefined;

export const initLenis = () => {
  if (typeof window === "undefined") return;

  // Respect prefers-reduced-motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  if (lenis) {
    lenis.destroy();
    lenis = undefined;
  }

  // Optimize mobile by avoiding custom smooth wheel on small touch devices
  if (window.innerWidth < 768) {
    return;
  }

  try {
    lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  } catch (e) {
    console.error("Lenis init failed", e);
  }
};

export const destroyLenis = () => {
  if (lenis) {
    lenis.destroy();
    lenis = undefined;
  }
};

// Video Optimization Observer: Pause videos outside viewport to conserve GPU & battery
export const initVideoObserver = () => {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

  videoObserver?.disconnect();

  const videos = document.querySelectorAll<HTMLVideoElement>("video");
  videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          if (video.paused && !video.hasAttribute("data-manual-pause")) {
            video.play().catch(() => {});
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      });
    },
    { threshold: 0.15 }
  );

  videos.forEach((video) => videoObserver?.observe(video));
};

// Scroll Reveal Choreography Observer
export const initScrollReveal = () => {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

  revealObserver?.disconnect();

  const elements = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          revealObserver?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
  );

  elements.forEach((el) => revealObserver?.observe(el));
};

if (typeof window !== "undefined") {
  window.addEventListener("resize", () => {
    if ((window.innerWidth < 768 && lenis) || (window.innerWidth >= 768 && !lenis)) {
      initLenis();
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    initLenis();
    initVideoObserver();
    initScrollReveal();
  });

  document.addEventListener("astro:page-load", () => {
    initLenis();
    initVideoObserver();
    initScrollReveal();
  });
}

import { useEffect } from "react";
import Lenis from "lenis";

function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      // Smooth mouse wheel
      smoothWheel: true,

      // Smooth touch scrolling
      syncTouch: true,

      // Touch inertia
      syncTouchLerp: 0.08,
      touchInertiaExponent: 2.0,

      // Touch sensitivity
      touchMultiplier: 1.2,

      // Mouse wheel sensitivity
      wheelMultiplier: 1,

      // General smoothing
      lerp: 0.08,

      // Let Lenis handle its own animation frame
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}

export default SmoothScroll;

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function Section({ children, className = "" }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.7, 1, 1, 0.7],
  );

  return (
    <motion.section
      ref={sectionRef}
      className={`flex h-dvh w-full items-center justify-center overflow-hidden ${className}`}
    >
      <motion.div
        style={{
          opacity,
        }}
        className="w-full"
      >
        {children}
      </motion.div>
    </motion.section>
  );
}

export default Section;
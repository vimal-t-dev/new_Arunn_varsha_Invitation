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
    [0, 0.2, 0.8, 1],
    [0.5, 1, 1, 0.5],
  );

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  return (
    <motion.section
      ref={sectionRef}
      className={`flex h-dvh w-full items-center justify-center overflow-hidden ${className}`}
    >
      <motion.div
        style={{
          opacity,
          y,
        }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
}

export default Section;

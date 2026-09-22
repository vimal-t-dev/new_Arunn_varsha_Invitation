import { motion } from "motion/react";

function Section({ children, className = "" }) {
  return (
    <section
      className={`relative min-h-dvh w-full overflow-hidden ${className}`}
    >
      <motion.div className="w-full">
        {children}
      </motion.div>
    </section>
  );
}

export default Section;
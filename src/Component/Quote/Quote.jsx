import { motion } from "motion/react";

import quoteBg from "../../assets/wedding/Quote_BG.jpg";

function Quote() {
  return (
    <section
      className="relative h-[100dvh] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${quoteBg})`,
      }}
    >
      {/* ========================================= */}
      {/* BACKGROUND FADE */}
      {/* ========================================= */}

      <div className="absolute inset-0 bg-[#fffaf5]/35" />

      {/* ========================================= */}
      {/* CONTENT */}
      {/* ========================================= */}

      <div className="relative z-10 mx-auto flex h-full w-full max-w-md flex-col items-center justify-center px-8 text-center">
        {/* ========================================= */}
        {/* FOREVER */}
        {/* ========================================= */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="
            maghifirea
            text-[clamp(38px,8dvh,58px)]
            leading-none
            text-[#74163C]
          "
        >
          Forever
        </motion.h2>

        {/* ========================================= */}
        {/* TOGETHER */}
        {/* ========================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="
            mt-[0.5dvh]
            maghifirea
            text-[clamp(30px,6dvh,45px)]
            italic
            leading-none
            text-[#B47716]
          "
        >
          Together
        </motion.p>

        {/* ========================================= */}
        {/* INFINITY */}
        {/* ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: "easeOut",
          }}
          className="
            mt-[3dvh]
            text-[clamp(24px,4dvh,32px)]
            text-[#A56818]
          "
        >
          ∞
        </motion.div>

        {/* ========================================= */}
        {/* QUOTE */}
        {/* ========================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="
            mt-[3dvh]
            max-w-[280px]
            creme-espana
            text-[clamp(19px,3.5dvh,27px)]
            leading-[1.45]
            text-[#4A2923]
          "
        >
          However near or far
          <br />
          you travel,
          <br />
          your blessings will
          <br />
          always be
          <br />
          part of our story.
        </motion.p>

        {/* ========================================= */}
        {/* WITH LOVE */}
        {/* ========================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="
            mt-[4dvh]
            font-serif
            text-[clamp(13px,2.2dvh,17px)]
            text-[#A56818]
          "
        >
          With love,
        </motion.p>

        {/* ========================================= */}
        {/* NAMES */}
        {/* ========================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.95,
          }}
          className="
            mt-[0.5dvh]
            font-serif
            text-[clamp(20px,3.5dvh,27px)]
            italic
            text-[#4A2923]
          "
        >
          Arunn
          <span className="mx-2 text-[#74163C]">♥</span>
          Varsha
        </motion.p>
      </div>
    </section>
  );
}

export default Quote;

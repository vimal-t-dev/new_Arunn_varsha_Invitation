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

      <div className="relative z-10 mx-auto flex h-full w-full max-w-md flex-col items-center justify-center px-8 text-center mt-[-30px]">
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

        {/* ========================================= */}
{/* FAMILY NAMES */}
{/* ========================================= */}

<div className="mt-[2.2dvh] flex w-full max-w-[360px] justify-between gap-4">

  {/* ========================================= */}
  {/* GROOM FAMILY */}
  {/* ========================================= */}

  <motion.div
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
      delay: 1.1,
      ease: "easeOut",
    }}
    className="flex w-1/2 flex-col items-center text-center"
  >

    {/* Decorative heading */}
    <div className="mb-[0.6dvh] flex items-center gap-2">
      <span className="h-px w-5 bg-[#B47716]/60" />

      <p
        className="
          creme-espana
          text-[clamp(11px,1.8dvh,14px)]
          tracking-[0.08em]
          text-[#A56818]
        "
      >
        Groom's Family
      </p>

      <span className="h-px w-5 bg-[#B47716]/60" />
    </div>

    {/* Family Members */}
    <div
      className="
        maghifirea
        text-[clamp(14px,2.4dvh,18px)]
        leading-[1.35]
        text-[#4A2923]
      "
    >
      <p>G. Thirugnanam</p>
      <p>R. Radhamani</p>
      <p>T. Vimal</p>
    </div>

  </motion.div>


  {/* ========================================= */}
  {/* BRIDE FAMILY */}
  {/* ========================================= */}

  <motion.div
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
      delay: 1.2,
      ease: "easeOut",
    }}
    className="flex w-1/2 flex-col items-center text-center"
  >

    {/* Decorative heading */}
    <div className="mb-[0.6dvh] flex items-center gap-2">
      <span className="h-px w-5 bg-[#B47716]/60" />

      <p
        className="
          creme-espana
          text-[clamp(11px,1.8dvh,14px)]
          tracking-[0.08em]
          text-[#A56818]
        "
      >
        Bride's Family
      </p>

      <span className="h-px w-5 bg-[#B47716]/60" />
    </div>

    {/* Family Members */}
    <div
      className="
        maghifirea
        text-[clamp(14px,2.4dvh,18px)]
        leading-[1.35]
        text-[#4A2923]
      "
    >
      <p>P. Jayaraj</p>
      <p>J. Shreevidhya</p>
      <p>J. Aditya</p>
    </div>

  </motion.div>

</div>
      </div>
    </section>
  );
}

export default Quote;

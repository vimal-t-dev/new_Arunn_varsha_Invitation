import { motion } from "motion/react";

function ThankYou() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-[#260414]">
      {/* ========================================= */}
      {/* SUBTLE BACKGROUND PARTICLES */}
      {/* ========================================= */}

      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[18%] top-[23%] h-[2px] w-[2px] rounded-full bg-[#e9a83b]" />
        <span className="absolute right-[28%] top-[17%] h-[2px] w-[2px] rounded-full bg-[#e9a83b]" />
        <span className="absolute left-[14%] top-[68%] h-[2px] w-[2px] rounded-full bg-[#e9a83b]" />
        <span className="absolute right-[20%] top-[64%] h-[2px] w-[2px] rounded-full bg-[#e9a83b]" />
        <span className="absolute right-[17%] top-[32%] h-[2px] w-[2px] rounded-full bg-[#e9a83b]" />
      </div>

      {/* ========================================= */}
      {/* MAIN CONTENT */}
      {/* ========================================= */}

      <div className="relative z-10 mx-auto flex h-full w-full max-w-md flex-col items-center justify-center px-8 text-center">

        {/* ========================================= */}
        {/* STAR */}
        {/* ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
            rotate: -45,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mb-[2dvh] text-[clamp(20px,4dvh,30px)] text-[#f4b84a]"
        >
          ✦
        </motion.div>

        {/* ========================================= */}
        {/* THANK YOU */}
        {/* ========================================= */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
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
            ease: "easeOut",
          }}
          className="
            font-serif
            text-[clamp(55px,13dvh,88px)]
            font-medium
            italic
            leading-[0.82]
            text-[#ffe09a]
          "
        >
          Thank
          <br />
          You
        </motion.h1>

        {/* ========================================= */}
        {/* MESSAGE */}
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
            duration: 0.9,
            delay: 0.25,
          }}
          className="
            mt-[5dvh]
            max-w-[290px]
            font-serif
            text-[clamp(21px,4dvh,30px)]
            leading-[1.25]
            text-[#f4c75d]
          "
        >
          for being a part of
          <br />
          our happiness
        </motion.p>

        {/* ========================================= */}
        {/* HEART */}
        {/* ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.55,
          }}
          className="
            mt-[7dvh]
            text-[clamp(22px,4dvh,30px)]
            text-[#f2ad42]
          "
        >
          ♥
        </motion.div>

        {/* ========================================= */}
        {/* FOOTER */}
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
            delay: 0.75,
          }}
          className="mt-[6dvh]"
        >
          <p className="text-[clamp(8px,1.5dvh,11px)] tracking-[0.12em] text-[#e9bd61]">
            made with love by
          </p>

          <div className="mt-[1.2dvh] flex items-center justify-center gap-2">
            <span className="text-[clamp(9px,1.6dvh,12px)] text-[#f0c56a]">
              @ _vimal_
            </span>

            {/* Instagram circle */}
            <motion.div
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.08 }}
              className="
                flex
                h-[clamp(32px,6dvh,42px)]
                w-[clamp(32px,6dvh,42px)]
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-[#f9ce34]
                via-[#ee2a7b]
                to-[#6228d7]
                text-white
                shadow-lg
              "
            >
              <span className="text-[clamp(16px,3dvh,21px)]">
                ◎
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ========================================= */}
      {/* BOTTOM CURVE */}
      {/* ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-2px]
          left-[-5%]
          h-[8dvh]
          w-[110%]
          rounded-[50%_50%_0_0]
          bg-[#16020c]
        "
      />
    </section>
  );
}

export default ThankYou;
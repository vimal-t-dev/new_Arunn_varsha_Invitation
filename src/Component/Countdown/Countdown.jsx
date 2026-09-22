import { useEffect, useState } from "react";
import { motion } from "motion/react";

import countdownBg from "../../assets/wedding/Countdown_BG.jpg";
import weddingVideo from "../../assets/wedding/Wedding-Video.mp4";

function Countdown() {
  // =========================================================
  // WEDDING DATE
  // =========================================================

  const weddingDate = new Date("2026-10-25T06:00:00+05:30").getTime();

  // =========================================================
  // COUNTDOWN STATE
  // =========================================================

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // =========================================================
  // CALCULATE TIME
  // =========================================================

  function calculateTimeLeft() {
    const now = new Date().getTime();

    const difference = weddingDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((difference / (1000 * 60)) % 60);

    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  // =========================================================
  // COUNTDOWN TIMER
  // =========================================================

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // =========================================================
  // FORMAT NUMBER
  // =========================================================

  const formatNumber = (number) => {
    return String(number).padStart(2, "0");
  };

  // =========================================================
  // COUNTDOWN DATA
  // =========================================================

  const countdownItems = [
    {
      value: timeLeft.days,
      label: "DAYS",
    },
    {
      value: timeLeft.hours,
      label: "HOURS",
    },
    {
      value: timeLeft.minutes,
      label: "MINUTES",
    },
    {
      value: timeLeft.seconds,
      label: "SECONDS",
    },
  ];

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <section
      className="relative h-[100dvh] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${countdownBg})`,
      }}
    >
      {/* ================================================= */}
      {/* BACKGROUND FADE */}
      {/* ================================================= */}

      <div className="absolute inset-0 bg-[#fffaf0]/55" />

      {/* ================================================= */}
      {/* MAIN CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto flex h-full w-full max-w-md flex-col items-center px-5 py-[2dvh] text-center">
        {/* ================================================= */}
        {/* TOP TITLE */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: -15,
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
          }}
          className="shrink-0 pt-[1dvh]"
        >
          <p className="text-[clamp(8px,1.4dvh,11px)] uppercase tracking-[0.4em] text-[#7d173c]">
            Counting Down To Our
          </p>

          <p className="mt-[0.4dvh] text-[clamp(8px,1.4dvh,11px)] uppercase tracking-[0.4em] text-[#7d173c]">
            Forever
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* COUNTDOWN BOX */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mt-[2.2dvh] grid w-full grid-cols-4 gap-[1vw] rounded-[20px] border-2 border-[#d5a84d] bg-[#fffaf0]/90 p-[0.8vw] shadow-md"
        >
          {countdownItems.map((item, index) => (
            <div
              key={item.label}
              className="flex min-w-0 flex-col items-center justify-center rounded-[16px] bg-[#74163c] py-[1.7dvh] shadow-sm"
            >
              {/* NUMBER */}

              <motion.span
                key={item.value}
                initial={{
                  opacity: 0.5,
                  y: -3,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="font-serif text-[clamp(25px,5dvh,38px)] font-semibold leading-none text-white"
              >
                {formatNumber(item.value)}
              </motion.span>

              {/* LABEL */}

              <span className="mt-[1dvh] text-[clamp(6px,1.1dvh,9px)] font-semibold text-white">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ================================================= */}
        {/* VIDEO */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
          className="relative mt-[2.5dvh] w-[min(88vw,320px)] overflow-hidden rounded-[26px] border border-[#d8b875] shadow-xl"
        >
          {/* VIDEO */}

          <video
            src={weddingVideo}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="block h-[clamp(300px,49dvh,450px)] w-full object-cover"
          />

          {/* SOFT VIDEO OVERLAY */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#5b1734]/10 via-transparent to-white/5" />
        </motion.div>

        {/* ================================================= */}
        {/* QUOTE */}
        {/* ================================================= */}

        <motion.div
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
            duration: 0.8,
            delay: 0.5,
          }}
          className="mt-[2.5dvh] max-w-[290px] shrink-0 px-2"
        >
          <p className="font-serif text-[clamp(16px,2.7dvh,22px)] italic leading-[1.45] text-[#8a1740]">
            A beautiful moment before a
            <br />
            beautiful forever...
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Countdown;

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import React from "react";

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
          className="
    mt-[2.2dvh]
    flex
    w-full
    items-center
    justify-center
    rounded-[18px]
    bg-gradient-to-r
    from-[#B8CDB8]
    via-[#C6D5C2]
    to-[#D8D8C0]
    px-[3vw]
    py-[2.2dvh]
  "
        >
          {countdownItems.map((item, index) => (
            <React.Fragment key={item.label}>
              {/* COUNTDOWN ITEM */}
              <div
                className="
          flex
          min-w-0
          flex-1
          flex-col
          items-center
          justify-center
        "
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
                  className="
            font-['Montserrat']
            text-[clamp(30px,6.5dvh,52px)]
            font-medium
            leading-none
            tracking-[-0.02em]
            text-[#151b2b]
          "
                >
                  {formatNumber(item.value)}
                </motion.span>

                {/* LABEL */}
                <span
                  className="
            mt-[1.2dvh]
            text-[clamp(7px,1.25dvh,11px)]
            font-medium
            tracking-wide
            text-[#172033]
          "
                >
                  {item.label}
                </span>
              </div>

              {/* COLON */}
              {index < countdownItems.length - 1 && (
                <span
                  className="
            mb-[2.3dvh]
            flex
            items-center
            justify-center
            px-[0.3vw]
            font-serif
            text-[clamp(25px,5.5dvh,44px)]
            font-medium
            leading-none
            text-[#151b2b]
          "
                >
                  :
                </span>
              )}
            </React.Fragment>
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
            preload="metadata"
            className="block h-[clamp(300px,49dvh,450px)] w-full object-cover"
            style={{
              transform: "translateZ(0)",
            }}
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

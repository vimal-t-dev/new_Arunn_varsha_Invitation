import { useEffect, useState } from "react";
import { motion } from "motion/react";

import openingInvitation from "../../assets/wedding/opening-invitation.jpg";

function DoorIntro({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isVisible]);

  const handleOpen = () => {
    if (isOpening) return;

    setIsOpening(true);

    // Start music
    if (onOpen) {
      onOpen();
    }

    setTimeout(() => {
      setIsVisible(false);
    }, 1500);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#1a0f0a]">
      {/* ================================================= */}
      {/* LEFT DOOR */}
      {/* ================================================= */}

      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: isOpening ? "-100%" : "0%",
        }}
        transition={{
          duration: 1.5,
          ease: [0.65, 0, 0.35, 1],
        }}
        onClick={handleOpen}
        className="absolute left-0 top-0 h-full w-1/2 cursor-pointer overflow-hidden"
      >
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundImage: `url(${openingInvitation})`,
            backgroundSize: "200% 100%",
            backgroundPosition: "left center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </motion.div>

      {/* ================================================= */}
      {/* RIGHT DOOR */}
      {/* ================================================= */}

      <motion.div
        initial={{ x: 0 }}
        animate={{
          x: isOpening ? "100%" : "0%",
        }}
        transition={{
          duration: 1.5,
          ease: [0.65, 0, 0.35, 1],
        }}
        onClick={handleOpen}
        className="absolute right-0 top-0 h-full w-1/2 cursor-pointer overflow-hidden"
      >
        <div
          className="absolute inset-0 h-full w-full"
          style={{
            backgroundImage: `url(${openingInvitation})`,
            backgroundSize: "200% 100%",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </motion.div>

      {/* ================================================= */}
      {/* OVERALL DARK SHADE */}
      {/* ================================================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: isOpening ? 0 : 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="pointer-events-none absolute inset-0 z-20 bg-black/20"
      />

      {/* ================================================= */}
{/* ARUNN - CENTER TOP */}
{/* ================================================= */}

{!isOpening && (
  <motion.div
    initial={{
      opacity: 0,
      y: -15,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      delay: 0.4,
      duration: 0.8,
    }}
    className="
      pointer-events-none
      absolute
      left-1/2
      top-[47%]
      z-30
      -translate-x-1/2
      -translate-y-1/2
      text-center
    "
  >
    <p
      className="
        maghifirea
        whitespace-nowrap
        text-[clamp(30px,7vw,54px)]
        font-normal
        tracking-wide
        text-[#F8E7B0]
        drop-shadow-[0_2px_5px_rgba(0,0,0,0.35)]
      "
    >
      Arunn
    </p>
  </motion.div>
)}

    {/* ================================================= */}
{/* HEART BETWEEN NAMES */}
{/* ================================================= */}

{!isOpening && (
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.7,
    }}
    animate={{
      opacity: 1,
      scale: 1,
    }}
    transition={{
      delay: 0.5,
      duration: 0.6,
    }}
    className="
      pointer-events-none
      absolute
      left-1/2
      top-[51.5%]
      z-30
      -translate-x-1/2
      -translate-y-1/2
    "
  >
    <span
      className="
        text-[clamp(20px,5vw,32px)]
        text-[#E8A1A8]
        drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]
      "
    >
      ♥
    </span>
  </motion.div>
)}

      {/* ================================================= */}
{/* VARSHA - CENTER BOTTOM */}
{/* ================================================= */}

{!isOpening && (
  <motion.div
    initial={{
      opacity: 0,
      y: 15,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      delay: 0.55,
      duration: 0.8,
    }}
    className="
      pointer-events-none
      absolute
      left-1/2
      top-[56%]
      z-30
      -translate-x-1/2
      -translate-y-1/2
      text-center
    "
  >
    <p
      className="
        maghifirea
        whitespace-nowrap
        text-[clamp(30px,7vw,54px)]
        font-normal
        tracking-wide
        text-[#F8E7B0]
        drop-shadow-[0_2px_5px_rgba(0,0,0,0.35)]
      "
    >
      Varsha
    </p>
  </motion.div>
)}

      {/* ================================================= */}
      {/* WEDDING - CENTER */}
      {/* ================================================= */}

      {!isOpening && (
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.7,
            duration: 0.8,
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[65%]
            z-30
            -translate-x-1/2
            -translate-y-1/2
            text-center
          "
        >
          <p
            className="
              font-serif
              text-[clamp(30px,8vw,58px)]
              italic
              font-medium
              tracking-wide
              text-amber-300    
              drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]
            "
          >
            Wedding
          </p>

          {/* Decorative line */}
          <div className="mx-auto mt-2 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#e3bd69]/80" />

            <span className="text-sm text-[#e3bd69]">✦</span>

            <span className="h-px w-10 bg-[#e3bd69]/80" />
          </div>
        </motion.div>
      )}

      {/* ================================================= */}
      {/* OPEN BUTTON */}
      {/* ================================================= */}

      {!isOpening && (
  <motion.button
    type="button"
    onClick={handleOpen}
    initial={{
      opacity: 0,
      y: 20,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      delay: 1,
      duration: 0.8,
    }}
    whileTap={{
      scale: 0.96,
    }}
    className="
      group
      absolute
      bottom-[9%]
      left-1/2
      z-50
      -translate-x-1/2

      overflow-hidden
      rounded-full
      p-[2px]

      shadow-[0_8px_30px_rgba(70,25,15,0.35)]
    "
  >
    {/* ============================================== */}
    {/* ROTATING GOLD BORDER */}
    {/* ============================================== */}

    <span
      className="
        absolute
        inset-[-150%]
        animate-[spin_3s_linear_infinite]
        bg-[conic-gradient(from_0deg,transparent_0deg,transparent_280deg,#e3bd69_315deg,#fff1ad_335deg,#e3bd69_350deg,transparent_360deg)]
      "
    />

    {/* ============================================== */}
    {/* BUTTON CONTENT */}
    {/* ============================================== */}

    <span
      className="
        relative
        flex
        items-center
        gap-3

        rounded-full

        bg-[#4a171b]/95

        px-7
        py-3.5

        text-[10px]
        font-medium
        uppercase
        tracking-[0.28em]
        text-[#f8dfa0]

        backdrop-blur-md

        transition-all
        duration-300

        group-hover:bg-[#5a1b22]
      "
    >
      {/* Decorative icon */}
      <span
        className="
          flex
          h-6
          w-6
          items-center
          justify-center
          rounded-full
          text-[11px]
          text-[#e3bd69]
          transition-transform
          duration-300
          group-hover:rotate-45
        "
      >
        ✦
      </span>

      {/* Text */}
      <span>
        Touch To Open
      </span>

      {/* Arrow */}
      <span
        className="
          text-sm
          text-[#e3bd69]
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      >
        ✦
      </span>
    </span>
  </motion.button>
)}

      {/* ================================================= */}
      {/* OPENING LIGHT */}
      {/* ================================================= */}

      {isOpening && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: [0, 0.18, 0],
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute inset-0 z-[100] bg-white"
        />
      )}
    </div>
  );
}

export default DoorIntro;

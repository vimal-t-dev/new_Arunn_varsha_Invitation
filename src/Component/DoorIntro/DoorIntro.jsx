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
      {/* ARUNN - LEFT DOOR */}
      {/* ================================================= */}

      {!isOpening && (
        <motion.div
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="
            pointer-events-none
            absolute
            left-[25%]
            top-[48%]
            z-30
            -translate-x-1/2
            -translate-y-1/2
            text-center
          "
        >
          <p
            className="
              font-serif
              text-[clamp(28px,7vw,54px)]
              italic
              font-medium
              tracking-wide
              text-[#6B1734]
              drop-shadow-[0_2px_5px_rgba(0,0,0,0.45)]
            "
          >
            Arunn
          </p>

          {/* Small decorative line */}
          <div className="mx-auto mt-2 h-px w-16 bg-[#e3bd69]/80" />
        </motion.div>
      )}

      {/* ================================================= */}
      {/* VARSHA - RIGHT DOOR */}
      {/* ================================================= */}

      {!isOpening && (
        <motion.div
          initial={{
            opacity: 0,
            x: 20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="
            pointer-events-none
            absolute
            right-[25%]
            top-[48%]
            z-30
            translate-x-1/2
            -translate-y-1/2
            text-center
          "
        >
          <p
            className="
              font-serif
              text-[clamp(28px,7vw,54px)]
              italic
              font-medium
              tracking-wide
              text-[#6B1734]
              drop-shadow-[0_2px_5px_rgba(0,0,0,0.45)]
            "
          >
            Varsha
          </p>

          {/* Small decorative line */}
          <div className="mx-auto mt-2 h-px w-16 bg-[#e3bd69]/80" />
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
            absolute
            bottom-[10%]
            left-1/2
            z-50
            -translate-x-1/2
            border
            border-[#e3bd69]
            bg-[#3b1712]/90
            px-8
            py-3.5
            text-[9px]
            font-medium
            uppercase
            tracking-[0.35em]
            text-[#f5d98a]
            shadow-xl
          "
        >
          Touch To Open
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

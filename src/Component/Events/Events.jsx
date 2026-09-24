import { motion } from "motion/react";

import eventsBg from "../../assets/wedding/Events_BG.jpg";
import weddingImage from "../../assets/wedding/Wedding-Image.jpeg";
import receptionImage from "../../assets/wedding/Reception-Image.jpeg";

function Events() {
  // =========================================================
  // OPEN LOCATION
  // =========================================================

  const openLocation = () => {
    const location = "Balanjika Mahal, Perumal Kovil, Kunnathur Pudur";

    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      location,
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section
      className="relative h-[100dvh] w-full overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${eventsBg})`,
      }}
    >
      {/* ================================================= */}
      {/* BACKGROUND OVERLAY */}
      {/* ================================================= */}

      <div className="absolute inset-0 bg-[#eee8dc]/55" />

      {/* ================================================= */}
      {/* MAIN CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto flex h-full w-full max-w-md flex-col items-center justify-center px-4 py-[2dvh]">
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
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
          className="shrink-0 text-center"
        >
          {/* SMALL TITLE */}

          <p className="text-[clamp(7px,1.2dvh,10px)] font-medium uppercase tracking-[0.4em] text-[#8a1740]">
            Celebrate With Us
          </p>

          {/* MAIN TITLE */}

          <h2 className="mt-[0.4dvh] font-serif text-[clamp(34px,6dvh,48px)] leading-[0.95] text-white drop-shadow-md">
            Wedding
          </h2>

          {/* SUB TITLE */}

          <p className="mt-[0.2dvh] font-serif text-[clamp(25px,4.5dvh,36px)] italic leading-none text-[#d19a24]">
            Festivities
          </p>
        </motion.div>

        {/* ================================================= */}
        {/* EVENTS CONTAINER */}
        {/* ================================================= */}

        <div className="mt-[2.2dvh] flex w-full flex-col gap-[1.6dvh]">
          {/* ================================================= */}
          {/* WEDDING CARD */}
          {/* ================================================= */}

          <motion.div
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
              duration: 0.8,
              delay: 0.15,
            }}
            className="flex h-[clamp(210px,29dvh,250px)] w-full shrink-0 overflow-hidden rounded-[24px] bg-[#fffaf0] shadow-xl"
          >
            {/* --------------------------------------------- */}
            {/* WEDDING CONTENT */}
            {/* --------------------------------------------- */}

            <div className="flex w-[57%] flex-col justify-between px-[4vw] py-[2dvh] text-left">
              {/* TOP CONTENT */}

              <div>
                {/* LABEL */}

                <p className="text-[clamp(6px,1dvh,8px)] font-semibold uppercase tracking-[0.35em] text-[#a16a19]">
                  01 • Wedding
                </p>

                {/* TITLE */}

                <h3 className="mt-[0.5dvh] font-serif text-[clamp(22px,3.7dvh,30px)] leading-[0.95] text-[#74163c]">
                  Wedding
                  <br />
                  Muhurtham
                </h3>

                {/* DATE */}

                <div className="mt-[1.5dvh]">
                  <p className="text-[clamp(10px,1.6dvh,13px)] leading-[1.35] text-[#39251f]">
                    Sunday, 25
                    <br />
                    October 2026
                  </p>

                  {/* TIME */}

                  <p className="mt-[0.8dvh] text-[clamp(10px,1.6dvh,13px)] text-[#39251f]">
                    6:00 AM
                  </p>
                </div>
              </div>

              {/* BOTTOM CONTENT */}

              <div>
                {/* VENUE */}

                <p className="text-[clamp(7px,1.15dvh,9px)] leading-[1.35] text-[#5b4037]">
                  Balanjika Mahal
                  <br />
                  Perumal Kovil,
                  <br />
                  Kunnathur Pudur
                </p>

                {/* LOCATION BUTTON */}

                <motion.button
                  whileTap={{
                    scale: 0.94,
                  }}
                  whileHover={{
                    scale: 1.03,
                  }}
                  onClick={openLocation}
                  className="mt-[0.8dvh] rounded-full bg-[#8d1644] px-[3.5vw] py-[0.75dvh] text-[clamp(7px,1.1dvh,9px)] font-semibold text-white shadow-md"
                >
                  📍 &nbsp; Open Location
                </motion.button>
              </div>
            </div>

            {/* --------------------------------------------- */}
            {/* WEDDING IMAGE */}
            {/* --------------------------------------------- */}

            <div className="relative w-[43%] overflow-hidden bg-white">
              <img
                src={weddingImage}
                alt="Wedding ceremony"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* RECEPTION CARD */}
          {/* ================================================= */}

          <motion.div
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
              duration: 0.8,
              delay: 0.3,
            }}
            className="flex h-[clamp(210px,29dvh,250px)] w-full shrink-0 overflow-hidden rounded-[24px] bg-[#fffaf0] shadow-xl"
          >
            {/* --------------------------------------------- */}
            {/* RECEPTION IMAGE */}
            {/* --------------------------------------------- */}

            <div className="relative w-[43%] overflow-hidden bg-white">
              <img
                src={receptionImage}
                alt="Wedding reception"
                className="h-full w-full object-cover"
              />
            </div>

            {/* --------------------------------------------- */}
            {/* RECEPTION CONTENT */}
            {/* --------------------------------------------- */}

            <div className="flex w-[57%] flex-col justify-between px-[4vw] py-[2dvh] text-left">
              {/* TOP CONTENT */}

              <div>
                {/* LABEL */}

                <p className="text-[clamp(6px,1dvh,8px)] font-semibold uppercase tracking-[0.35em] text-[#a16a19]">
                  02 • Reception
                </p>

                {/* TITLE */}

                <h3 className="mt-[0.6dvh] font-serif text-[clamp(23px,3.8dvh,31px)] leading-none text-[#74163c]">
                  Reception
                </h3>

                {/* DATE */}

                <div className="mt-[1.5dvh]">
                  <p className="text-[clamp(10px,1.6dvh,13px)] leading-[1.35] text-[#39251f]">
                    Sunday, 25
                    <br />
                    October 2026
                  </p>

                  {/* TIME */}

                  <p className="mt-[0.8dvh] text-[clamp(10px,1.6dvh,13px)] text-[#39251f]">
                    11:00 AM onwards
                  </p>
                </div>
              </div>

              {/* BOTTOM CONTENT */}

              <div>
                {/* VENUE */}

                <p className="text-[clamp(7px,1.15dvh,9px)] leading-[1.35] text-[#5b4037]">
                  Balanjika Mahal
                  <br />
                  Kunnathur Pudur
                </p>

                {/* LOCATION BUTTON */}

                <motion.button
                  whileTap={{
                    scale: 0.94,
                  }}
                  whileHover={{
                    scale: 1.03,
                  }}
                  onClick={openLocation}
                  className="mt-[0.8dvh] rounded-full bg-[#8d1644] px-[3.5vw] py-[0.75dvh] text-[clamp(7px,1.1dvh,9px)] font-semibold text-white shadow-md"
                >
                  📍 &nbsp; Open Location
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Events;

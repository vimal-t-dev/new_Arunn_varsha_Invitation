import HomeBG from "../../assets/wedding/Home_BG.jpeg";

function WeddingHome() {
  return (
    <section className="relative h-dvh w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={HomeBG}
        alt="Wedding background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Soft faded overlay */}
      <div className="absolute inset-0 bg-[#fffaf0]/35" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col items-center text-center">
        {/* Blessings */}
        <p className="mt-[18vh] px-6 text-[10px] font-bold tracking-[0.25em] text-yellow-900 sm:text-xs font-mono">
          WITH THE BLESSINGS OF OUR FAMILIES
        </p>

        {/* Om */}
        <div className="mt-[3vh] text-4xl text-[#b47716]">ௐ</div>

        {/* Bride & Groom Names */}
        {/* <div className="mt-[5vh]">
          <h1 className="font-['Magilio'] text-4xl font-normal text-[#74163c] sm:text-5xl">
            Arunn
          </h1>

          <p className="my-1 font-['Magilio'] text-2xl font-normal text-[#a56818]">
            &
          </p>

          <h1 className="font-['Magilio'] text-4xl font-normal text-[#74163c] sm:text-5xl">
            Varsha
          </h1>
        </div> */}

        {/* Groom Details */}
        <div className="mt-[5vh]">
          <h2 className="font-['Magilio'] text-2xl font-bold text-[#74163c] sm:text-3xl">
            Arunn
          </h2>

          <p className="mt-1 px-4 text-[10px] text-[#24120f] sm:text-xs">
            S/O Mr. Thirugnanam & Mrs. Radhamani
          </p>
        </div>

        {/* Bride Details */}
        <div className="mt-[3vh]">
          <h2 className="font-['Magilio'] text-2xl font-bold text-[#74163c] sm:text-3xl">
            Varsha
          </h2>

          <p className="mt-1 px-4 text-[10px] text-[#24120f] sm:text-xs">
            D/O Mr. Jayaraj & Mrs. Shreevidhya
          </p>
        </div>

        {/* Quote */}
        <div className="mt-[4vh] px-8">
          <p className="font-serif text-lg italic leading-relaxed text-[#6b1734] sm:text-xl">
            "Two hearts, two families,
            <br />
            one beautiful beginning."
          </p>
        </div>

        {/* Invitation Message */}
        <div className="mt-[2vh] max-w-[330px] px-6">
          <p className="text-xs leading-relaxed text-[#24120f] sm:text-sm">
            Together with their families, they invite you to
            <br className="hidden sm:block" />
            celebrate the beginning of their forever.
          </p>
        </div>

        {/* Scroll To Begin */}
        <div className="mt-[10vh] flex flex-col items-center">
          <p className="text-[12px] tracking-[0.25em] text-[#a56818]">
            SCROLL TO BEGIN
          </p>

          <span className="mt-2 text-xl text-[#b47716] font-semibold">↓</span>
        </div>
      </div>
    </section>
  );
}

export default WeddingHome;

import { useEffect, useRef, useState } from "react";

import weddingMusic from "../../assets/wedding/Wedding-Music.m4a";

function MusicPlayer({ startMusic }) {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  // Set default volume to 50%
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  // Start music when requested by the DoorIntro
  useEffect(() => {
    if (!startMusic || !audioRef.current) return;

    const playMusic = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Music could not start:", error);
      }s
    };

    playMusic();
  }, [startMusic]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Music could not play:", error);
      }
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={weddingMusic} loop preload="auto" />

      {/* Music Button */}
      {startMusic && (
        <button
          type="button"
          onClick={toggleMusic}
          aria-label={isPlaying ? "Mute music" : "Play music"}
          className="
      fixed
      right-4
      top-4
      z-[9000]
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      border-[#d5a84d]
      bg-[#fffaf0]/90
      text-[#74163c]
      shadow-lg
      backdrop-blur-sm
      transition-transform
      active:scale-95
    "
        >
          <span
            className={isPlaying ? "animate-spin" : ""}
            style={{
              animationDuration: "3s",
            }}
          >
            {isPlaying ? "♫" : "🔇"}
          </span>
        </button>
      )}
    </>
  );
}

export default MusicPlayer;

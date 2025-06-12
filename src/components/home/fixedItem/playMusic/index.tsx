import { useEffect, useRef, useState } from "react";
import { Volume } from "../../../../../public/svg";
import settingsData from "@/database/settings.json";
import { useLoadingStore } from "@/store";

const { settings } = settingsData;

const PlayMusic = () => {
  const [isSoundOn, setIsSoundOn] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const { randomDuration } = useLoadingStore();
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!hasStarted) {
      audio.currentTime = 0;
      audio.volume = 0;
      audio.muted = false;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            let volume = 0;
            const fade = setInterval(() => {
              if (volume < 1) {
                volume += 0.1;
                audio.volume = Math.min(volume, 1);
              } else {
                clearInterval(fade);
              }
            }, 200);
          })
          .catch((error) => {
            console.error("Audio play failed:", error);
          });
      }
      setHasStarted(true);
      setIsSoundOn(true);
    } else {
      audio.muted = !audio.muted;
      setIsSoundOn(!audio.muted);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={`${process.env.NEXT_PUBLIC_UPLOADS_BASE_URL}${settings.backgroundMusic}`}
        loop
        muted
        className="hidden"
      />
      <div
        onClick={handleClick}
        className={`play-music text-tertiary md:h-[40px] md:rounded-[10px] md:border md:border-[#554E48] dark:md:border-[#fff3e240] md:px-3 flex justify-center items-center cursor-pointer md:bg-[#ffffff5b] md:dark:bg-[#0c0c0c4f] md:backdrop-blur-sm ${
          !hasStarted ? "animate-pulse" : ""
        }`}
      >
        <Volume isSoundOn={isSoundOn} />
      </div>
    </>
  );
};

export default PlayMusic;

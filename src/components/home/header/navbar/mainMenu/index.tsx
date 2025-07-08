"use client";

import Section from "@/components/layout/section";
import { useHeaderStore } from "@/store";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const MainMenu = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setIsHeaderShow } = useHeaderStore();

  const [animationPhase, setAnimationPhase] = useState<
    "closed" | "opening" | "open" | "closing" | "hidden"
  >("closed");

  useEffect(() => {
    if (isMenuOpen) {
      setAnimationPhase("opening");
      const openTimeout = setTimeout(() => setAnimationPhase("open"), 10);
      return () => clearTimeout(openTimeout);
    } else if (animationPhase === "open") {
      setAnimationPhase("closing");
      const closeTimeout = setTimeout(() => {
        setAnimationPhase("hidden");
        setIsHeaderShow(true);
      }, 700);
      return () => clearTimeout(closeTimeout);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const body = document.body;
    if (!isMenuOpen) {
      body.classList.remove("overflow-hidden");
    } else {
      body.classList.add("overflow-hidden");
    }
  }, [isMenuOpen]);

  const getTranslateClass = () => {
    switch (animationPhase) {
      case "closed":
      case "hidden":
        return "translate-y-[-100%] duration-700 transition-transform";
      case "opening":
      case "open":
        return "translate-y-0 duration-700 transition-transform";
      case "closing":
        return "translate-y-[100%] duration-700 transition-transform";
      default:
        return "";
    }
  };

  const getOpacityClass = () => {
    switch (animationPhase) {
      case "opening":
      case "open":
        return "opacity-100 pointer-events-auto";
      case "closing":
        return "opacity-0 delay-[550ms] pointer-events-none";
      case "closed":
      case "hidden":
        return "opacity-0 delay-[550ms] pointer-events-none";
      default:
        return "opacity-0 pointer-events-none";
    }
  };

  return (
    <Section
      identifier="main-menu"
      className={`
        fixed top-0 left-0 right-0 w-full h-full z-[1500]
        
        ${getTranslateClass()}
        
      `}
    >
      <div
        data-cursor="text"
        className={`main-menu-inner w-full h-full flex items-center justify-center bg-[#ffffff] dark:bg-[#111111] ${getOpacityClass()}`}
      >
        <Link
          href="#story-of-soil"
          className={`text-black dark:text-white text-8xl ${
            animationPhase == "open"
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          } duration-300`}
          onClick={() => setIsMenuOpen(false)}
        >
          Story Of Soil
        </Link>
        <Link
          href="#fourteen-infallibles"
          className={`text-black dark:text-white text-8xl ${
            animationPhase == "open"
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          } duration-300`}
          onClick={() => setIsMenuOpen(false)}
        >
          Forteen Infallibles
        </Link>
        <Link
          href="#rise-of-divine-reign"
          className={`text-black dark:text-white text-8xl ${
            animationPhase == "open"
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          } duration-300`}
          onClick={() => setIsMenuOpen(false)}
        >
          Rise Of Divine Reign
        </Link>
      </div>
    </Section>
  );
};

export default MainMenu;

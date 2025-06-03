"use client";

import Section from "@/components/layout/section";
import HomeNavbar from "./navbar";
import { Down } from "../../../../public/svg";
import { useEffect, useState } from "react";
import MainMenu from "./navbar/mainMenu";
import { GradientText, MainText } from "@/components/layout/text";
import headerData from "@/database/header.json";
import { useStore, useLoadingStore, useHeaderStore } from "@/store";
import Grid from "@/components/layout/grid";
import Seasons from "../mainSection/seasons";
import Typewriter from "@/components/layout/typewriter";

const { header } = headerData;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrollCount, setScrollCount] = useState<number>(0);
  const { language } = useStore();
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const { randomDuration } = useLoadingStore();

  const { isHeaderShow, setIsHeaderShow } = useHeaderStore();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkScreenSize = () => {
      const isLarge = window.innerWidth > 900;
      setIsLargeScreen(isLarge);
    };

    checkScreenSize(); // check initially

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (isLargeScreen === null) return;

    if (isLargeScreen) {
      setIsHeaderShow(true);
    } else {
      setIsHeaderShow(false);
    }
  }, [isLargeScreen]);

  useEffect(() => {
    let touchStartY: number | null = null;

    const handleWheel = (event: WheelEvent) => {
      if (isTransitioning) return;

      if (event.deltaY > 50 && scrollCount < 7) {
        triggerTransition(scrollCount + 1);
      } else if (event.deltaY < -50 && scrollCount > 0) {
        triggerTransition(scrollCount - 1);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isTransitioning) return;

      if (event.key === "ArrowDown" && scrollCount < 7) {
        triggerTransition(scrollCount + 1);
      } else if (event.key === "ArrowUp" && scrollCount > 0) {
        triggerTransition(scrollCount - 1);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (isTransitioning || touchStartY === null) return;

      const touchEndY = event.touches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (deltaY > 50 && scrollCount < 7) {
        triggerTransition(scrollCount + 1);
        touchStartY = null;
      } else if (deltaY < -50 && scrollCount > 0) {
        triggerTransition(scrollCount - 1);
        touchStartY = null;
      }
    };

    if (isHeaderShow) {
      window.addEventListener("wheel", handleWheel, { passive: true });
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
    }

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [scrollCount, isTransitioning, isHeaderShow]);

  const triggerTransition = (newCount: number) => {
    setIsTransitioning(true);
    setScrollCount(newCount);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 700);
  };

  return (
    <Section
      identifier="header"
      className="flex flex-col md:h-screen md:overflow-hidden relative z-20"
    >
      <div
        className={`${
          scrollCount == 1 ||
          scrollCount == 3 ||
          scrollCount == 5 ||
          scrollCount == 7
            ? "bg-[#fff]"
            : "bg-body"
        } noise hidden md:block`}
      ></div>
      <section className="hidden md:block pb-9 md:pb-0 px-[32px] sm:px-[40px] md:px-[48px] lg:px-[64px]">
        <HomeNavbar setIsMenuOpen={setIsMenuOpen} />
      </section>
      <Grid
        zIndex={25}
        dark={
          scrollCount == 1 ||
          scrollCount == 3 ||
          scrollCount == 5 ||
          scrollCount == 7
            ? true
            : false
        }
      />
      <MainMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Seasons scrollCount={scrollCount} setScrollCount={setScrollCount} />

      <div className="w-full h-full flex pt-[60px] sm:pt-[80px] md:py-[36px]">
        <div
          id="header-wrapper"
          className={`max-w-[1280px] w-full md:m-auto md:px-[48px] lg:px-[64px]`}
        >
          {/* <div
            className={`glow-bofrder duration-500 delay-700 ease-out h-full`}
          ></div> */}
          <section
            className={`w-full h-full md:px-[16px] rounded-[25px] flex items-center`}
          >
            <section className="w-full">
              <section className="flex md:justify-center">
                <GradientText
                  weight="bold"
                  lang={language}
                  className={`${
                    language == "en"
                      ? "main-section-title-ltr md:text-[40px]"
                      : "main-section-title-rtl md:text-[40px]"
                  }`}
                >
                  {language == "ar"
                    ? header.title.translations.ar
                    : language == "fa"
                    ? header.title.translations.fa
                    : header.title.translations.en}
                </GradientText>
              </section>
              <div className="block md:hidden">
                <MainText
                  weight="regular"
                  lang={language}
                  className={`text-tertiary ${
                    language == "en"
                      ? "my-4 text-[18px] sm:text-[20px] leading-[32px] sm:leading-[36px]"
                      : "my-4 text-[16px] sm:text-[18px] leading-[32px] sm:leading-[36px]"
                  }`}
                >
                  {language == "ar"
                    ? header.text.translations.ar
                    : language == "fa"
                    ? header.text.translations.fa
                    : header.text.translations.en}
                </MainText>
              </div>
              <div className="hidden md:block">
                <Typewriter
                  isFinished={isFinished}
                  setIsFinished={setIsFinished}
                  speed={30}
                  weight="regular"
                  lang={language}
                  delay={randomDuration + 1100}
                  className={`text-tertiary text-center ${
                    language == "en"
                      ? "my-4 md:my-5 lg:my-6 text-[22px] leading-[40px]"
                      : "my-4 md:my-5 lg:my-6 text-[20px] leading-[40px]"
                  }`}
                >
                  {language == "ar"
                    ? header.text.translations.ar
                    : language == "fa"
                    ? header.text.translations.fa
                    : header.text.translations.en}
                </Typewriter>
              </div>
              <div className="flex justify-center items-center">
                <div
                  className={`${
                    isFinished
                      ? "visible opacity-100 duration-200 scroll"
                      : "invisible opacity-0"
                  } ease-in hidden md:block text-tertiary`}
                >
                  <svg
                    width="20"
                    height="24"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 1L8 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 12L8 19L1 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
      {/* <section className="hidden md:block pb-9 md:pb-0 px-[32px] sm:px-[40px] md:px-[48px] lg:px-[64px]">
        <Section special>
          <div className="w-full flex justify-center items-center pb-9">
            <div
              className={`w-[24px] h-[52px] border-[2px] border-[#ffe4bf] rounded-full p-[2px] flex justify-center ${
                isFinished
                  ? "visible opacity-100 duration-200"
                  : "invisible opacity-0"
              } ease-in`}
            >
              <div
                className={`w-[16px] h-[16px] rounded-full bg-tertiary ${
                  isFinished ? "scroll" : ""
                }`}
              ></div>
            </div>
          </div>
        </Section>
      </section> */}
    </Section>
  );
};

export default Header;

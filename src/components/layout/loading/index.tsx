"use client";

import { useEffect, useState } from "react";
import Section from "../section";
import { useHeaderStore, useLoadingStore } from "@/store";
import Image from "next/image";
import settingsData from "@/database/settings.json";

const { settings } = settingsData;

const Loading = () => {
  const {
    progress,
    randomDuration,
    isLoadingShow,
    setProgress,
    setRandomDuration,
    setIsLoadingShow,
  } = useLoadingStore();

  const { setIsHeaderShow } = useHeaderStore();

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };
    checkDarkMode();
    const observer = new MutationObserver(() => {
      checkDarkMode();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const STROKE_WIDTH = 4;
  const CIRCLE_RADIUS = 70 - STROKE_WIDTH / 2;
  const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;
  const STEP_TIME = 50;

  useEffect(() => {
    if (!isLoadingShow) return;

    const randomMs = Math.floor(Math.random() * (4500 - 2000 + 1)) + 2000;
    setRandomDuration(randomMs);

    const totalSteps = Math.ceil(randomMs / STEP_TIME);
    const increment = 100 / totalSteps;

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => setIsLoadingShow(false), 500);
      }
      setProgress(Math.floor(currentProgress));
    }, STEP_TIME);

    return () => clearInterval(interval);
  }, [isLoadingShow, setProgress, setRandomDuration, setIsLoadingShow]);

  useEffect(() => {
    if (!isLoadingShow) {
      setIsHeaderShow(true);
      setTimeout(() => {
        setRandomDuration(500);
      }, 500);
    }
  }, [isLoadingShow, setRandomDuration]);

  return (
    <>
      <Section
        className={`fixed top-0 left-0 w-full h-full z-[1010] pt-9 pointer-events-none ${
          isLoadingShow
            ? "visible opacity-100"
            : "invisible opacity-0 delay-[1700ms]"
        }`}
      >
        <div className="relative w-full h-full flex justify-center">
          <div
            className={`absolute ${
              isLoadingShow
                ? "top-[calc(50%-100px)]"
                : "top-[0px] delay-[650ms]"
            } duration-[1000ms]`}
          >
            <div
              className={`${
                isLoadingShow
                  ? "w-[160px] h-[200px]"
                  : "w-[48px] h-[56px] delay-[650ms]"
              } relative z-[1050] duration-[1000ms]`}
            >
              <Image
                src={`${
                  isDarkMode
                    ? process.env.NEXT_PUBLIC_UPLOADS_BASE_URL +
                      settings.logoUrl
                    : process.env.NEXT_PUBLIC_UPLOADS_BASE_URL +
                      settings.logoDarkUrl
                }`}
                alt="logo"
                fill
                objectFit="cover"
                style={{
                  opacity: `${progress}%`,
                  transition: `opacity 0.313s ease`,
                }}
              />
            </div>
          </div>
        </div>
      </Section>
      <Section
        identifier="loading"
        className={`${
          isLoadingShow ? "visible opacity-100" : "invisible opacity-0"
        } w-full h-screen fixed z-[1000] top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[#dbdbdb] dark:bg-[#151515]`}
      >
        <div
          className="absolute top-0 left-0 h-full bg-[#ffffff] dark:bg-[#11110f]"
          style={{
            width: `${progress}%`,
            transition: `width 0.313s ease`,
          }}
        ></div>

        {/* <div className="flex mt-4 items-center">
        <div
          className="w-[320px] sm:w-[360px] md:w-[400px] lg:w-[440px] xl:w-[480px] h-[8px] rounded-md bg-[#1a1a1a] overflow-hidden flex"
          style={{
            opacity: `${progress}%`,
            transition: `opacity 0.313s ease`,
          }}
        >
          <div
            className="bg-tertiary"
            style={{
              width: `${progress}%`,
              height: "100%",
              transition: "width 0.313s ease",
            }}
          ></div>
        </div>
      </div> */}
      </Section>
    </>
  );
};

export default Loading;

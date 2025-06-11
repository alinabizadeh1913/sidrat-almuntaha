"use client";

import Section from "@/components/layout/section";
import HomeNavbar from "./navbar";
import { useEffect, useState } from "react";
import MainMenu from "./navbar/mainMenu";
import { GradientText, MainText } from "@/components/layout/text";
import headerData from "@/database/header.json";
import { useStore, useLoadingStore, useHeaderStore } from "@/store";
import Grid from "@/components/layout/grid";
import Typewriter from "@/components/layout/typewriter";

const { header } = headerData;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { language } = useStore();
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const { randomDuration } = useLoadingStore();

  return (
    <Section
      identifier="header"
      className="flex flex-col md:h-screen md:overflow-hidden relative"
    >
      <section className="hidden md:block pb-9 md:pb-0 px-[32px] sm:px-[40px] md:px-[48px] lg:px-[64px]">
        <HomeNavbar setIsMenuOpen={setIsMenuOpen} />
      </section>

      <MainMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className="w-full h-full flex pt-[40px] sm:pt-[60px] md:py-[36px]">
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
              <section className="flex justify-center">
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
                  align={"center"}
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
    </Section>
  );
};

export default Header;

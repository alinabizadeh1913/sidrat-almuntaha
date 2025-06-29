"use client";

import { useEffect, useState, useRef } from "react";
import Header from "./header";
import HomeNavbar from "./header/navbar";
import SeasonsMobile from "./mainSection/mobile";
import MobileFooter from "./footer/mobile";
import StoryOfSoil from "./mainSection/story_of_soil";
import FourteenInfallibles from "./mainSection/fourteen_infallibles";
import RiseOfDivineReign from "./mainSection/rise_of_divine_reign";
import SuspendedHouse from "./mainSection/suspended_house";
import DayOfJudgment from "./mainSection/day_of_judgment";
import EternalFall from "./mainSection/eternal_fall";
import EndlessSerenity from "./mainSection/endless_serenity";
import Grid from "../layout/grid";
import Footer from "./footer";
import ScrollToTop from "./fixedItem/scrollToTop";
import PlayMusic from "./fixedItem/playMusic";

const HomeComponents = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const StoryOfSoilContainerRef = useRef<HTMLDivElement>(null);
  const FourteenInfalliblesContainerRef = useRef<HTMLDivElement>(null);
  const RiseOfDivineReignContainerRef = useRef<HTMLDivElement>(null);
  const SuspendedHouseContainerRef = useRef<HTMLDivElement>(null);
  const DayOfJudgmentContainerRef = useRef<HTMLDivElement>(null);
  const EternalFallContainerRef = useRef<HTMLDivElement>(null);
  const EndlessSerenityContainerRef = useRef<HTMLDivElement>(null);

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(!isDark);
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

  return (
    <>
      <section className="block md:hidden pb-9 px-[32px] z-[100] relative">
        <HomeNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </section>

      <Header />

      <section className="pb-7 px-[32px] md:px-[48px] lg:px-[56px] fixed z-[250] bottom-0 left-0">
        <ScrollToTop />
      </section>
      <section className="pb-7 px-[32px] md:px-[48px] lg:px-[56px] fixed z-[250] bottom-0 right-0">
        <PlayMusic />
      </section>

      <StoryOfSoil StoryOfSoilContainerRef={StoryOfSoilContainerRef} />
      <FourteenInfallibles
        FourteenInfalliblesContainerRef={FourteenInfalliblesContainerRef}
      />
      <RiseOfDivineReign
        RiseOfDivineReignContainerRef={RiseOfDivineReignContainerRef}
      />
      <SuspendedHouse SuspendedHouseContainerRef={SuspendedHouseContainerRef} />
      <DayOfJudgment DayOfJudgmentContainerRef={DayOfJudgmentContainerRef} />
      <EternalFall EternalFallContainerRef={EternalFallContainerRef} />
      <EndlessSerenity
        EndlessSerenityContainerRef={EndlessSerenityContainerRef}
      />

      {/* <Footer /> */}

      <SeasonsMobile />

      <section className="block md:hidden">
        <MobileFooter />
      </section>

      <div className="noise bg-[#fff] dark:bg-[#0c0c0c]" />

      <Grid dark={isDarkMode} />
    </>
  );
};

export default HomeComponents;

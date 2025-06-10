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
import Lenis from "lenis";

const HomeComponents = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const StoryOfSoilContainerRef = useRef<HTMLDivElement>(null);
  const FourteenInfalliblesContainerRef = useRef<HTMLDivElement>(null);
  const RiseOfDivineReignContainerRef = useRef<HTMLDivElement>(null);
  const SuspendedHouseContainerRef = useRef<HTMLDivElement>(null);
  const DayOfJudgmentContainerRef = useRef<HTMLDivElement>(null);
  const EternalFallContainerRef = useRef<HTMLDivElement>(null);
  const EndlessSerenityContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <section className="block md:hidden pb-9 px-[32px] z-[100] relative">
        <HomeNavbar setIsMenuOpen={setIsMenuOpen} />
      </section>

      <Header />

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

      <SeasonsMobile />

      <section className="block md:hidden">
        <MobileFooter />
      </section>

      <div className="noise" />
    </>
  );
};

export default HomeComponents;

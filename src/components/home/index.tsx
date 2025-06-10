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

      <StoryOfSoil />
      <FourteenInfallibles />
      <RiseOfDivineReign />
      <SuspendedHouse />
      <DayOfJudgment />
      <EternalFall />
      <EndlessSerenity />

      <SeasonsMobile />

      <section className="block md:hidden">
        <MobileFooter />
      </section>

      <div className="noise" />
    </>
  );
};

export default HomeComponents;

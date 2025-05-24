"use client";

import { useState } from "react";
import Header from "./header";
import HomeNavbar from "./header/navbar";
import SeasonsMobile from "./mainSection/mobile";
import MobileFooter from "./footer/mobile";

const HomeComponents = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <section className="block md:hidden pb-9 px-[32px] stickdsy top-0 z-[100] bg-[#0c0c0ca4] backdrop-blur-md">
        <HomeNavbar setIsMenuOpen={setIsMenuOpen} />
      </section>
      <Header />
      <SeasonsMobile />
      <section className="block md:hidden">
        <MobileFooter />
      </section>
      <div className="noise block md:hidden"></div>
    </>
  );
};

export default HomeComponents;

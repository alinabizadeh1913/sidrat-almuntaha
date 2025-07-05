"use client";

import { usePathname } from "next/navigation";
import Section from "../section";
import HomeNavbar from "@/components/home/header/navbar";
import { useState } from "react";

const MainNavBar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      {pathname !== "/" && (
        <Section>
          <section className="md:pb-0 px-[32px] md:px-[48px] lg:px-[56px]">
            <HomeNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </section>
        </Section>
      )}
    </>
  );
};

export default MainNavBar;

"use client";

import Section from "@/components/layout/section";
import Image from "next/image";
import { BarIcon } from "../../../../../public/svg";
import { useEffect, useState } from "react";
import ChangeLanguage from "./language";
import settingsData from "@/database/settings.json";
import SearchBox from "./search";
import { useHeaderStore } from "@/store";
import ChangeTheme from "./theme";

const { settings } = settingsData;

const HomeNavbar = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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

  const [navbarShow, setNavbarShow] = useState(false);
  const { isHeaderShow, setIsHeaderShow } = useHeaderStore();

  useEffect(() => {
    setNavbarShow(true);
  }, []);

  return (
    <nav
      style={{
        direction: "ltr",
      }}
    >
      <Section special>
        <div className="w-full flex items-center justify-between pt-7 md:pt-6 lg:pt-7 relative">
          <div className="w-5/12 flex items-center">
            <div className="w-fit flex items-center gap-x-[16px]" data-cursor="action">
              <ChangeLanguage />
              <ChangeTheme />
              <SearchBox />
            </div>
          </div>
          <div className="w-2/12 flex justify-center">
            <div
              data-cursor="action"
              className="w-[48px] h-[56px] relative z-[30] select-none"
            >
              <Image
                src={`${
                  isDarkMode
                    ? process.env.NEXT_PUBLIC_UPLOADS_BASE_URL +
                      settings.logoUrl
                    : process.env.NEXT_PUBLIC_UPLOADS_BASE_URL +
                      settings.logoDarkUrl
                }`}
                alt="sidrat-almuntaha-logo"
                fill
                objectFit="contain"
              />
            </div>
          </div>
          <div className="w-5/12 flex justify-end">
            <div
              data-cursor="action"
              className="cursor-pointer text-tertiary relative z-[30]"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                setIsHeaderShow(false);
              }}
            >
              <BarIcon />
            </div>
          </div>
        </div>
      </Section>
    </nav>
  );
};

export default HomeNavbar;

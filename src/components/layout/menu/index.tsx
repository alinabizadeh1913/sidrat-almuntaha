"use client";

import { useState, useEffect, useRef } from "react";
import {
  CheckMark,
  CursorEffectsIcon,
  Globe,
  LinkIcon,
  Moon,
  Plus,
  RightIcon,
  Search,
  Sun,
  ThemeIcon,
} from "../../../../public/svg";
import { MainText } from "../text";
import { useCursorEffectsStore, useStore, useThemeStore } from "@/store";

const ContextMenu = () => {
  const { language, setLanguage } = useStore();
  const { theme, setTheme } = useThemeStore();
  const { isCursorEffectsShow, setIsCursorEffectsShow } =
    useCursorEffectsStore();

  useEffect(() => {
    const language = localStorage.getItem("language");

    if (language) {
      if (language === "en") {
        setLanguage("en");
      } else if (language === "ar") {
        setLanguage("ar");
      } else {
        setLanguage("fa");
      }
    }
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      if (theme === "dark") {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      } else {
        setTheme("light");
        document.documentElement.classList.add("light");
      }
    }
  }, []);

  useEffect(() => {
    const cursorEffects = localStorage.getItem("cursorEffects");

    if (cursorEffects) {
      if (cursorEffects === "enable") {
        setIsCursorEffectsShow(true);
      } else {
        setIsCursorEffectsShow(false);
      }
    }
  }, []);

  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [linkHref, setLinkHref] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleRightClick = (e: MouseEvent) => {
    e.preventDefault();

    let target = e.target as HTMLElement;
    let anchor = target.closest("a") as HTMLAnchorElement | null;

    if (anchor && anchor.href) {
      setLinkHref(anchor.href);
    } else {
      setLinkHref(null);
    }

    const { clientX, clientY } = e;
    const menuWidth = menuRef.current?.offsetWidth || 0;
    const menuHeight = menuRef.current?.offsetHeight || 0;

    let x = clientX;
    let y = clientY;

    if (x + menuWidth > window.innerWidth) {
      x = window.innerWidth - menuWidth;
    }

    if (y + menuHeight > window.innerHeight) {
      y = window.innerHeight - menuHeight;
    }

    setMenuPosition({ x, y });
    setIsMenuOpen(true);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsMenuOpen(false);
      setLinkHref(null);
    }
  };

  useEffect(() => {
    window.addEventListener("contextmenu", handleRightClick);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("contextmenu", handleRightClick);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const openLinkInNewTab = () => {
    if (linkHref) {
      window.open(linkHref, "_blank");
      setIsMenuOpen(false);
      setLinkHref(null);
    }
  };

  return (
    <>
      {isMenuOpen && (
        <div
          data-cursor="action"
          dir="ltr"
          ref={menuRef}
          className="fixed z-[20000]"
          style={{
            top: `${menuPosition.y}px`,
            left: `${menuPosition.x}px`,
            display: "block",
          }}
        >
          <div className="w-[250px] bg-[#1f1f1f] rounded-xl shadow-md">
            <div className="flex flex-col">
              {linkHref && (
                <div
                  className="flex items-center p-3 hover:bg-[#3a3a3a] rounded-tl-xl rounded-tr-xl"
                  onClick={openLinkInNewTab}
                >
                  <div className="text-[#fff] w-[30px] flex justify-center items-center">
                    <LinkIcon />
                  </div>
                  <MainText
                    lang="en"
                    weight="regular"
                    className="text-[#fff] ms-2"
                  >
                    Open link in new tab
                  </MainText>
                </div>
              )}
              <div
                className={`flex items-center justify-between p-3 hover:bg-[#3a3a3a] relative ${
                  linkHref ? "" : "rounded-tl-xl rounded-tr-xl"
                }`}
                id="language-wrapper"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <div className="text-[#fff] w-[30px] flex justify-center items-center">
                    <Globe size="small" />
                  </div>
                  <MainText
                    lang="en"
                    weight="regular"
                    className="text-[#fff] ms-2"
                  >
                    Language
                  </MainText>
                </div>
                <div className="flex items-center text-[#fff]">
                  <RightIcon />
                </div>
                <div className="language-inner absolute top-0 left-[calc(100%+4px)] bg-[#1f1f1f] w-[125px] rounded-xl flex flex-col overflow-hidden">
                  <div
                    className="p-3 hover:bg-[#3a3a3a] flex items-center justify-between"
                    onClick={() => {
                      setLanguage("en");
                      localStorage.setItem("language", "en");
                    }}
                  >
                    <MainText
                      lang="en"
                      weight="regular"
                      className="text-[#fff] ms-2"
                    >
                      English
                    </MainText>
                    <div className="flex items-center text-[#fff]">
                      {language == "en" && <CheckMark />}
                    </div>
                  </div>
                  <div
                    className="p-3 hover:bg-[#3a3a3a] flex items-center justify-between"
                    onClick={() => {
                      setLanguage("ar");
                      localStorage.setItem("language", "ar");
                    }}
                  >
                    <MainText
                      lang="en"
                      weight="regular"
                      className="text-[#fff] ms-2"
                    >
                      Arabic
                    </MainText>
                    <div className="flex items-center text-[#fff]">
                      {language == "ar" && <CheckMark />}
                    </div>
                  </div>
                  <div
                    className="p-3 hover:bg-[#3a3a3a] flex items-center justify-between"
                    onClick={() => {
                      setLanguage("fa");
                      localStorage.setItem("language", "fa");
                    }}
                  >
                    <MainText
                      lang="en"
                      weight="regular"
                      className="text-[#fff] ms-2"
                    >
                      Persion
                    </MainText>
                    <div className="flex items-center text-[#fff]">
                      {language == "fa" && <CheckMark />}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`flex items-center justify-between p-3 hover:bg-[#3a3a3a] relative`}
                id="theme-wrapper"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <div className="text-[#fff] w-[30px] flex justify-center items-center">
                    <ThemeIcon />
                  </div>
                  <MainText
                    lang="en"
                    weight="regular"
                    className="text-[#fff] ms-2"
                  >
                    Theme
                  </MainText>
                </div>
                <div className="flex items-center text-[#fff]">
                  <RightIcon />
                </div>
                <div className="theme-inner absolute top-0 left-[calc(100%+4px)] bg-[#1f1f1f] w-[125px] rounded-xl flex flex-col overflow-hidden">
                  <div
                    className="p-3 hover:bg-[#3a3a3a] flex items-center justify-between"
                    onClick={() => {
                      setTheme("dark");
                      localStorage.setItem("theme", "dark");
                      document.documentElement.classList.add("dark");
                    }}
                  >
                    <MainText
                      lang="en"
                      weight="regular"
                      className="text-[#fff] ms-2"
                    >
                      Dark
                    </MainText>
                    <div className="flex items-center text-[#fff]">
                      {theme == "dark" && <CheckMark />}
                    </div>
                  </div>
                  <div
                    className="p-3 hover:bg-[#3a3a3a] flex items-center justify-between"
                    onClick={() => {
                      setTheme("light");
                      localStorage.setItem("theme", "light");
                      document.documentElement.classList.remove("dark");
                    }}
                  >
                    <MainText
                      lang="en"
                      weight="regular"
                      className="text-[#fff] ms-2"
                    >
                      Light
                    </MainText>
                    <div className="flex items-center text-[#fff]">
                      {theme == "light" && <CheckMark />}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex items-center p-3 hover:bg-[#3a3a3a]"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="text-[#fff] w-[30px] flex justify-center items-center">
                  <Search direction="ltr" size="small" />
                </div>
                <MainText
                  lang="en"
                  weight="regular"
                  className="text-[#fff] ms-2"
                >
                  Search
                </MainText>
              </div>

              <div
                className="flex items-center justify-between p-3 hover:bg-[#3a3a3a] rounded-bl-xl rounded-br-xl relative"
                id="cursor-lines"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <div className="text-[#fff] w-[30px] flex justify-center items-center">
                    <CursorEffectsIcon />
                  </div>
                  <MainText
                    lang="en"
                    weight="regular"
                    className="text-[#fff] ms-2"
                  >
                    Cursor Effects
                  </MainText>
                </div>
                <div className="flex items-center text-[#fff]">
                  <RightIcon />
                </div>
                <div className="cursor-lines-inner absolute top-0 left-[calc(100%+4px)] bg-[#1f1f1f] w-[125px] rounded-xl flex flex-col overflow-hidden">
                  <div
                    className="p-3 hover:bg-[#3a3a3a] flex items-center justify-between"
                    onClick={() => {
                      setIsCursorEffectsShow(true);
                      localStorage.setItem("cursorEffects", "enable");
                    }}
                  >
                    <MainText
                      lang="en"
                      weight="regular"
                      className="text-[#fff] ms-2"
                    >
                      Enable
                    </MainText>
                    <div className="flex items-center text-[#fff]">
                      {isCursorEffectsShow && <CheckMark />}
                    </div>
                  </div>
                  <div
                    className="p-3 hover:bg-[#3a3a3a] flex items-center justify-between"
                    onClick={() => {
                      setIsCursorEffectsShow(false);
                      localStorage.setItem("cursorEffects", "disable");
                    }}
                  >
                    <MainText
                      lang="en"
                      weight="regular"
                      className="text-[#fff] ms-2"
                    >
                      Disable
                    </MainText>
                    <div className="flex items-center text-[#fff]">
                      {!isCursorEffectsShow && <CheckMark />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContextMenu;

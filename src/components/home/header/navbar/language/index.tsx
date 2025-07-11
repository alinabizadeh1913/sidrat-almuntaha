"use client";

import { Globe } from "../../../../../../public/svg";
import { MainText } from "@/components/layout/text";
import { useEffect, useRef, useState } from "react";
import { useStore } from "@/store";

const ChangeLanguage = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, setLanguage } = useStore();

  const languageRef = useRef<HTMLDivElement>(null);

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
    const handleOutSideClick = (e: MouseEvent) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(e.target as Node)
      ) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("click", handleOutSideClick);

    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  }, [languageRef]);

  return (
    <>
      <div
        data-cursor="action"
        className={`change-language md:w-[89px] md:h-[38px] rounded-[10px] md:border md:border-[#554E48] dark:md:border-[#fff3e240] relative z-[30] md:bg-[#f6f6f6] md:dark:bg-[#151515] md:hover:bg-[#ececec] md:dark:hover:bg-[#181818]`}
        ref={languageRef}
      >
        <div
          className={`${
            language == "en" ? "direction-ltr" : "direction-rtl"
          } md:w-full md:h-full cursor-pointer flex items-center justify-center gap-x-2 text-tertiary`}
          onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        >
          <MainText
            className="hidden md:block text-[14px] text-tertiary"
            lang={language}
            weight="regular"
          >
            {language == "ar" ? "عربي" : language == "fa" ? "فارسی" : "English"}
          </MainText>
          <Globe />
        </div>
        <div
          className={`${
            isLanguageOpen
              ? "translate-y-0 visible opacity-100"
              : "translate-y-[20px] invisible opacity-0"
          } absolute top-[155%] md:top-[130%] left-0 right-0 w-[89px] md:w-full border-primary rounded-[10px] py-2 flex flex-col gap-y-[6px] bg-[#f6f6f6] dark:bg-[#151515] duration-300`}
        >
          <div
            className="en-language cursor-pointer"
            onClick={() => {
              setLanguage("en");
              setIsLanguageOpen(false);
              localStorage.setItem("language", "en");
            }}
          >
            <MainText
              className="text-[14px] text-tertiary text-center"
              lang="en"
              weight="regular"
            >
              English
            </MainText>
          </div>
          <div
            className="ar-language cursor-pointer"
            onClick={() => {
              setLanguage("ar");
              setIsLanguageOpen(false);
              localStorage.setItem("language", "ar");
            }}
          >
            <MainText
              className="text-[14px] text-tertiary text-center"
              lang="ar"
              weight="regular"
            >
              عربي
            </MainText>
          </div>
          <div
            className="fa-language cursor-pointer"
            onClick={() => {
              setLanguage("fa");
              setIsLanguageOpen(false);
              localStorage.setItem("language", "fa");
            }}
          >
            <MainText
              className="text-[14px] text-tertiary text-center"
              lang="fa"
              weight="regular"
            >
              فارسی
            </MainText>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChangeLanguage;

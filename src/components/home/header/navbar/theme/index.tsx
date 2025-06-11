"use client";

import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "../../../../../../public/svg";

const ChangeTheme = () => {
  const [status, setStatus] = useState<"light" | "dark">("dark");
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  const themeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutSideClick = (e: MouseEvent) => {
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) {
        setIsThemeOpen(false);
      }
    };

    document.addEventListener("click", handleOutSideClick);

    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  }, [themeRef]);

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme) {
      if (theme === "dark") {
        setStatus("dark");
        document.documentElement.classList.add("dark");
      } else {
        setStatus("light");
        document.documentElement.classList.add("light");
      }
    }
  }, []);

  return (
    <>
      <div
        className={`change-theme text-[14px] text-tertiary md:h-[40px] rounded-[10px] md:border md:border-[#554E48] dark:md:border-[#fff3e240] md:px-3 relative z-[30] flex justify-center items-center cursor-pointer`}
        ref={themeRef}
      >
        <div
          className={`md:w-full md:h-full cursor-pointer flex items-center justify-center text-tertiary`}
          onClick={() => setIsThemeOpen(!isThemeOpen)}
        >
          {status === "dark" ? <Moon /> : <Sun />}
        </div>
        <div
          className={`${
            isThemeOpen
              ? "translate-y-0 visible opacity-100"
              : "translate-y-[20px] invisible opacity-0"
          } absolute top-[155%] md:top-[130%] left-0 right-0 w-full border-primary rounded-[10px] py-[8px] flex flex-col gap-y-[10px] bg-[#151616] md:bg-[#ffffff09] backdrop-blur-[10px] duration-300`}
        >
          <div
            className="theme-dark cursor-pointer flex items-center justify-center"
            onClick={() => {
              setIsThemeOpen(false);
              setTimeout(() => {
                setStatus("dark");
                localStorage.setItem("theme", "dark");
                document.documentElement.classList.add("dark");
              }, 500);
            }}
          >
            <Moon />
          </div>
          <div
            className="theme-light cursor-pointer flex items-center justify-center"
            onClick={() => {
              setIsThemeOpen(false);
              setTimeout(() => {
                setStatus("light");
                localStorage.setItem("theme", "light");
                document.documentElement.classList.remove("dark");
              }, 500);
            }}
          >
            <Sun />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangeTheme;

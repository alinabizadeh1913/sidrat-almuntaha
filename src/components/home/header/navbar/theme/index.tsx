"use client";

import { useEffect } from "react";
import { Moon, Sun } from "../../../../../../public/svg";
import { useThemeStore } from "@/store";

const ChangeTheme = () => {
  const { theme, setTheme } = useThemeStore();

  const changeTheme = () => {
    if (theme === "light") {
      setTimeout(() => {
        setTheme("dark");
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      }, 700);
    } else {
      setTimeout(() => {
        setTheme("light");
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }, 700);
    }
  };

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

  return (
    <>
      <div
        data-cursor="action"
        className={`change-theme text-[14px] text-tertiary md:h-[38px] rounded-[10px] md:border md:border-[#554E48] dark:md:border-[#fff3e240] md:px-[10px] relative z-[30] flex justify-center items-center cursor-pointer md:bg-transparent md:hover:bg-[#ecececc4] md:dark:bg-transparent md:dark:hover:bg-[#25210f9d] backdrop-blur-md`}
        onClick={changeTheme}
      >
        {theme === "dark" ? <Sun /> : <Moon />}
      </div>
    </>
  );
};

export default ChangeTheme;

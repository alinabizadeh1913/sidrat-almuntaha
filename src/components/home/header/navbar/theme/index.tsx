"use client";

import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "../../../../../../public/svg";

const ChangeTheme = () => {
  const [status, setStatus] = useState<"light" | "dark">("dark");
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  const changeTheme = () => {
    if (status === "light") {
      setTimeout(() => {
        setStatus("dark");
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
      }, 700);
    } else {
      setTimeout(() => {
        setStatus("light");
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
      }, 700);
    }
  };

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
        onClick={changeTheme}
      >
        {status === "dark" ? <Sun /> : <Moon />}
      </div>
    </>
  );
};

export default ChangeTheme;

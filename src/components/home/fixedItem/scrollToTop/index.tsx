"use client";

import { useEffect, useState } from "react";
import { ScrollTop } from "../../../../../public/svg";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowButton(window.scrollY > 2000);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    // به جای کار با lenis اینجا، فقط یه event منتشر می‌کنیم
    window.dispatchEvent(new Event("scrollToTop"));
  };

  return (
    <div
      onClick={handleClick}
      className={`scroll-to-top text-tertiary md:h-[38px] md:rounded-[10px] md:border md:border-[#554E48] dark:md:border-[#fff3e240] md:px-[10px] flex justify-center items-center cursor-pointer md:bg-[#f6f6f6] md:dark:bg-[#151515] md:hover:bg-[#ececec] md:dark:hover:bg-[#181818] transition-opacity duration-300 
        ${showButton ? "opacity-100 visible" : "opacity-0 invisible"}`}
    >
      <ScrollTop />
    </div>
  );
};

export default ScrollToTop;

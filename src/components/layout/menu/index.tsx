"use client";

import { useState, useEffect, useRef } from "react";
import { Globe, Search } from "../../../../public/svg";
import { MainText } from "../text";

const ContextMenu = () => {
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleRightClick = (e: MouseEvent) => {
    e.preventDefault();

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

  return (
    <>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed z-[9999]"
          style={{
            top: `${menuPosition.y}px`,
            left: `${menuPosition.x}px`,
            display: "block",
          }}
        >
          <div className="w-[250px] bg-[#1f1f1f] rounded-xl shadow-md py-2">
            <div className="flex flex-col gap-y-1">
              <div
                className="flex items-center justify-between py-2 px-3 hover:bg-[#3a3a3a]"
                onClick={() => setIsMenuOpen(false)}
              >
                <MainText
                  lang="en"
                  weight="regular"
                  className="text-[18px] text-[#fff]"
                >
                  Search
                </MainText>
                <div className="text-[#fff]">
                  <Search direction="ltr" />
                </div>
              </div>
              <div
                className="flex items-center justify-between py-2 px-3 hover:bg-[#3a3a3a]"
                onClick={() => setIsMenuOpen(false)}
              >
                <MainText
                  lang="en"
                  weight="regular"
                  className="text-[18px] text-[#fff]"
                >
                  Theme
                </MainText>
                <div className="text-[#fff]">
                  <Search direction="ltr" />
                </div>
              </div>
              <div
                className="flex items-center justify-between py-2 px-3 hover:bg-[#3a3a3a]"
                onClick={() => setIsMenuOpen(false)}
              >
                <MainText
                  lang="en"
                  weight="regular"
                  className="text-[18px] text-[#fff]"
                >
                  Settings
                </MainText>
                <div className="text-[#fff]">
                  <Search direction="ltr" />
                </div>
              </div>
              <div
                className="flex items-center justify-between py-2 px-3 hover:bg-[#3a3a3a]"
                onClick={() => setIsMenuOpen(false)}
              >
                <MainText
                  lang="en"
                  weight="regular"
                  className="text-[18px] text-[#fff]"
                >
                  Language
                </MainText>
                <div className="text-[#fff]">
                  <Globe />
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

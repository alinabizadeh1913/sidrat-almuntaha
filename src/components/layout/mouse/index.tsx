"use client";

import { useCursorLinesStore } from "@/store";
import { useEffect, useRef, useState } from "react";

const MouseMove = () => {
  const mouseRef = useRef<HTMLDivElement | null>(null);
  const { isCursorEffectsShow } = useCursorLinesStore();
  const [cursorType, setCursorType] = useState<
    "default" | "text" | "action" | "picture"
  >("default");

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });

      animationFrameId = requestAnimationFrame(() => {
        if (mouseRef.current) {
          const scale = cursorType === "text" ? 1.7 : 1;
          mouseRef.current.style.transform = `translate(${clientX - 24.5}px, ${
            clientY - 24.5
          }px) scale(${scale})`;
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [cursorType]);

  useEffect(() => {
    if (mouseRef.current) {
      const scale = cursorType === "text" ? 1.7 : 1;
      mouseRef.current.style.transform = `translate(${
        mousePosition.x - 24.5
      }px, ${mousePosition.y - 24.5}px) scale(${scale})`;
    }
  }, [cursorType]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorValue = target
        .closest("[data-cursor]")
        ?.getAttribute("data-cursor");

      if (cursorValue === "text") {
        setCursorType("text");
      } else if (cursorValue === "action") {
        setCursorType("action");
      } else if (cursorValue === "picture") {
        setCursorType("picture");
      } else {
        setCursorType("default");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOver);
    };
  }, []);

  return (
    // <div
    //   ref={mouseRef}
    //   className={`fixed w-0 h-0 top-0 left-0 z-[20] pointer-events-none transition-none ${
    //     isCursorLinesShow ? "hidden md:block" : "hidden"
    //   }`}
    // >
    //   <svg className="absolute top-[-100vh] left-1/2 w-screen h-[200vh] text-[rgba(24,21,18,0.8)] dark:text-[rgba(255,255,255,0.6)]">
    //     <line
    //       x1="0"
    //       y1="0"
    //       x2="0"
    //       y2="100%"
    //       stroke="currentColor"
    //       strokeWidth="1"
    //     />
    //   </svg>
    //   <svg className="absolute left-[-100vw] top-1/2 w-[200vw] h-screen text-[rgba(24,21,18,0.8)] dark:text-[rgba(255,255,255,0.6)]">
    //     <line
    //       x1="0"
    //       y1="0"
    //       x2="100%"
    //       y2="0"
    //       stroke="currentColor"
    //       strokeWidth="1"
    //     />
    //   </svg>
    // </div>
    <>
      <div
        ref={mouseRef}
        className={`fixed ${
          cursorType == "text"
            ? "bg-[#fff] mix-blend-difference"
            : cursorType == "default"
            ? "border-secondary"
            : cursorType == "picture"
            ? "backdrop-blur-md bg-[#ffffff09]"
            : "invisible opacity-0"
        } w-[50px] h-[50px] top-0 left-0 rounded-full z-[2000] pointer-events-none flex justify-center duration-200 items-center ${
          isCursorEffectsShow ? "hidden md:flex" : "hidden"
        }`}
      >
        <div
          className={`bg-primary w-[8px] h-[8px] rounded-full ${
            cursorType == "text" || cursorType == "picture"
              ? "invisible opacity-0"
              : ""
          }`}
        ></div>
      </div>
    </>
  );
};

export default MouseMove;

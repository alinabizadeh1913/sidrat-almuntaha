"use client";

import { useContextMenuStore } from "@/store";
import { useEffect, useRef } from "react";

const MouseMove = () => {
  const mouseRef = useRef<HTMLDivElement | null>(null);
  const { isContextMenuShow } = useContextMenuStore();

  useEffect(() => {
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (mouseRef.current) {
        const { clientX, clientY } = e;

        animationFrameId = requestAnimationFrame(() => {
          if (mouseRef.current) {
            mouseRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
          }
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={mouseRef}
      className={`fixed w-0 h-0 top-0 left-0 z-[20] pointer-events-none transition-none ${
        isContextMenuShow ? "hidden md:block" : "hidden"
      }`}
    >
      <svg className="absolute top-[-100vh] left-1/2 w-screen h-[200vh] text-[rgba(24,21,18,0.8)] dark:text-[rgba(255,255,255,0.6)]">
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="100%"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
      <svg className="absolute left-[-100vw] top-1/2 w-[200vw] h-screen text-[rgba(24,21,18,0.8)] dark:text-[rgba(255,255,255,0.6)]">
        <line
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default MouseMove;

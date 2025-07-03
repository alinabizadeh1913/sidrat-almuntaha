"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import DirectionHandler from "./direction";
import Loading from "./loading";
import MainNavBar from "./navbar";
import { useLoadingStore } from "@/store";
import MouseMove from "./mouse";
import ContextMenu from "./menu";

let rafId: number;
function startLenis(lenis: Lenis) {
  function loop(time: number) {
    lenis.raf(time);
    rafId = requestAnimationFrame(loop);
  }
  rafId = requestAnimationFrame(loop);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isLoadingShow } = useLoadingStore();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const body = document.body;
    if (!isLoadingShow) {
      setTimeout(() => body.classList.remove("overflow-hidden"), 1700);
    } else {
      body.classList.add("overflow-hidden");
    }
  }, [isLoadingShow]);

  useEffect(() => {
    if (!isLoadingShow) {
      const timeout = setTimeout(() => {
        const lenis = new Lenis({
          duration: 2.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });
        lenisRef.current = lenis;
        startLenis(lenis);
      }, 1700);

      return () => clearTimeout(timeout);
    } else {
      if (lenisRef.current) {
        cancelAnimationFrame(rafId);
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    }
  }, [isLoadingShow]);

  useEffect(() => {
    const onScrollToTop = () => {
      if (lenisRef.current) {
        cancelAnimationFrame(rafId);
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        const newLenis = new Lenis({
          duration: 2.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });
        lenisRef.current = newLenis;
        startLenis(newLenis);
      }, 700);
    };

    window.addEventListener("scrollToTop", onScrollToTop);
    return () => window.removeEventListener("scrollToTop", onScrollToTop);
  }, []);

  return (
    <>
      <ContextMenu />
      <MouseMove />
      <Loading />
      <DirectionHandler />
      <MainNavBar />
      <main>{children}</main>
    </>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";

interface Point {
  x: number;
  y: number;
}

const Grid = ({ dark }: { dark?: boolean }) => {
  const [gridSpacing, setGridSpacing] = useState<number>(110);
  const [radius, setRadius] = useState<number>(130);

  const BASE_OPACITY = 0.006;
  const ACTIVE_OPACITY = dark ? 1 : 0.313;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouse, setMouse] = useState<Point | null>(null);

  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  useEffect(() => {
    const updateSizeAndGrid = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setWindowSize({ width, height });

      if (width >= 1536) {
        setGridSpacing(110);
        setRadius(130);
      } else if (width >= 1280) {
        setGridSpacing(100);
        setRadius(120);
      } else if (width >= 1024) {
        setGridSpacing(90);
        setRadius(110);
      } else if (width >= 900) {
        setGridSpacing(80);
        setRadius(100);
      } else {
        setGridSpacing(70);
        setRadius(90);
      }
    };

    updateSizeAndGrid();
    window.addEventListener("resize", updateSizeAndGrid);
    return () => window.removeEventListener("resize", updateSizeAndGrid);
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    const handleLeave = () => setMouse(null);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = windowSize.width;
    canvas.height = windowSize.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "rgba(21, 22, 22," + BASE_OPACITY + ")";
    ctx.lineWidth = 0.313;

    for (let x = 0; x <= canvas.width; x += gridSpacing) {
      for (let y = 0; y <= canvas.height; y += gridSpacing) {
        const isVertical = true;
        const isHorizontal = true;

        let opacity = BASE_OPACITY;
        if (mouse) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < radius) {
            opacity =
              ACTIVE_OPACITY -
              (distance / radius) * (ACTIVE_OPACITY - BASE_OPACITY);
          }
        }

        ctx.strokeStyle = dark
          ? `rgba(0,0,0,${opacity})`
          : `rgba(255,255,255,${opacity})`;

        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    }
  }, [mouse, windowSize]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="hidden md:block w-full h-full transition-opacity duration-[100ms]"
      />
    </div>
  );
};

export default Grid;

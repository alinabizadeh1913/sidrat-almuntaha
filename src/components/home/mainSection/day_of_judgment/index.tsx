"use client";

import { SeasonButton } from "@/components/layout/button";
import { useEffect, useState, useRef } from "react";
import { MainSectionDescription, MainSectionTitle } from "..";
import seasonsData from "@/database/seasons.json";
import { useStore } from "@/store";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const { seasons } = seasonsData;

const DayOfJudgment = ({
  DayOfJudgmentContainerRef,
}: {
  DayOfJudgmentContainerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const [active, setActive] = useState<boolean>(true);
  const language = useStore((state) => state.language);

  const { scrollYProgress } = useScroll({
    target: DayOfJudgmentContainerRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Initial and exit animations
  const initialOpacity = 0;

  // Transform values with spring physics
  const firstImageOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.4, 0.6, 0.8], [1, 1, 0, 0]),
    springConfig
  );
  const secondImageOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.4, 0.6, 0.8], [0, 0, 1, 1]),
    springConfig
  );
  const lineHeight = useSpring(
    useTransform(scrollYProgress, [0.1, 0.3, 0.5, 0.7], [0, 0.7, 1, 1]),
    springConfig
  );
  const lineOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.7, 0.8], [1, 1, 1, 0]),
    springConfig
  );
  const titleY = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.7, 1], [50, 0, 0, -50]),
    springConfig
  );
  const titleOpacity = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.1, 0.7, 0.8],
      [initialOpacity, 1, 1, initialOpacity]
    ),
    springConfig
  );
  const descriptionY = useSpring(
    useTransform(scrollYProgress, [0.1, 0.3, 0.7, 1], [25, 0, 0, -25]),
    springConfig
  );
  const descriptionOpacity = useSpring(
    useTransform(
      scrollYProgress,
      [0.1, 0.2, 0.7, 0.8],
      [initialOpacity, 1, 1, initialOpacity]
    ),
    springConfig
  );
  const imageY = useSpring(
    useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-100, 0, 0, 100]),
    springConfig
  );
  const imageOpacity = useSpring(
    useTransform(
      scrollYProgress,
      [0.05, 0.2, 0.7, 0.8],
      [initialOpacity, 1, 1, initialOpacity]
    ),
    springConfig
  );
  const buttonY = useSpring(
    useTransform(scrollYProgress, [0.2, 0.4, 0.7, 1], [20, 0, 0, -20]),
    springConfig
  );
  const buttonOpacity = useSpring(
    useTransform(
      scrollYProgress,
      [0.2, 0.3, 0.7, 0.8],
      [initialOpacity, 1, 1, initialOpacity]
    ),
    springConfig
  );

  return (
    <div
      ref={DayOfJudgmentContainerRef}
      className={`main-section w-full h-[200vh] hidden md:block`}
      id="story-of-soil"
    >
      <div className="w-full h-screen sticky top-0 overflow-hidden z-[100]">
        <div className="max-w-[1000px] w-full h-full m-auto flex justify-center md:px-[40px] xl:px-0">
          <div className="w-full flex items-center justify-between">
            <div className="content relative">
              <motion.div
                className={`${
                  language == "en" ? "left-0" : "right-0"
                } absolute top-0 line-bg w-[3px] rounded-lg`}
                style={{
                  height: useTransform(
                    lineHeight,
                    (value) => `${value * 100}%`
                  ),
                  opacity: lineOpacity,
                }}
              />
              <div className="content-inner md:ms-[31px] lg:ms-[39px]">
                <motion.div
                  style={{
                    y: titleY,
                    opacity: titleOpacity,
                  }}
                >
                  <MainSectionTitle active={active} lang={language}>
                    {language == "ar"
                      ? seasons[4].title.translations.ar
                      : language == "fa"
                      ? seasons[4].title.translations.fa
                      : seasons[4].title.translations.en}
                  </MainSectionTitle>
                </motion.div>
                <motion.div
                  className={`description mt-2 md:w-full md:pe-[60px] lg:pe-[80px] xl:pe-[100px] 2xl:pe-[120px]`}
                  style={{
                    y: descriptionY,
                    opacity: descriptionOpacity,
                  }}
                >
                  <MainSectionDescription lang={language}>
                    {language == "ar"
                      ? seasons[4].description.translations.ar
                      : language == "fa"
                      ? seasons[4].description.translations.fa
                      : seasons[4].description.translations.en}
                  </MainSectionDescription>
                </motion.div>
                <div className="relative z-[50]">
                  <motion.div
                    style={{
                      y: buttonY,
                      opacity: buttonOpacity,
                    }}
                  >
                    <Link href={seasons[4].href} className="block w-fit">
                      <SeasonButton lang={language} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
            <div>
              <Link href={seasons[4].href}>
                <motion.figure
                  className={`images relative overflow-hidden md:w-[380px] md:h-[480px] lg:w-[400px] lg:h-[500px] xl:w-[420px] xl:h-[520px]`}
                  style={{
                    y: imageY,
                    opacity: imageOpacity,
                    scale: useSpring(
                      useTransform(
                        scrollYProgress,
                        [0, 0.3, 0.7, 0.8],
                        [0.95, 1, 1, 0.95]
                      ),
                      springConfig
                    ),
                  }}
                >
                  <div className="copy-not-allowed absolute top-0 right-0 left-0 bottom-0 w-full h-full select-none z-10"></div>
                  <motion.div
                    style={{
                      opacity: firstImageOpacity,
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_UPLOADS_BASE_URL}${seasons[4].imageUrls[0]}`}
                      alt={seasons[4].slug}
                      fill
                      objectFit="cover"
                      className="mask-image"
                    />
                  </motion.div>
                  <motion.div
                    style={{
                      opacity: secondImageOpacity,
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_UPLOADS_BASE_URL}${seasons[4].imageUrls[3]}`}
                      alt={seasons[4].slug}
                      fill
                      objectFit="cover"
                      className="mask-image"
                    />
                  </motion.div>
                </motion.figure>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayOfJudgment;

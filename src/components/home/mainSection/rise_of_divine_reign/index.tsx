"use client";

import Button from "@/components/layout/button";
import { useEffect, useState } from "react";
import { MainSectionDescription, MainSectionTitle } from "..";
import seasonsData from "@/database/seasons.json";
import { useStore } from "@/store";
import Link from "next/link";
import Image from "next/image";

const { seasons } = seasonsData;

const RiseOfDivineReign = () => {
  const [active, setActive] = useState<boolean>(true);
  const { language } = useStore();

  return (
    <div className={`main-section w-full h-screen hidden md:block`}>
      <div className="w-full h-full flex">
        <div className="max-w-[1100px] w-full m-auto flex justify-center md:px-[56px] lg:px-[64px] xl:px-[24px] 2xl:px-0">
          <div className="w-full flex items-center justify-between">
            <div className="content relative">
              <div
                className={`${
                  language == "en" ? "left-0" : "right-0"
                } absolute top-0 line-bg-dark w-[3px] rounded-lg h-full`}
                style={{
                  transition: "height 1s 0.7s ease",
                }}
              ></div>
              <div
                className={`${
                  language == "en" ? "left-[5%]" : "right-[5%]"
                } circle-blur absolute top-0 left-[5%] w-[80px] h-[80px] blur-[90px] 2xl:top-[5%] 2xl:w-[70px] 2xl:h-[70px] 2xl:blur-[60px]`}
                style={{
                  transition: "all 0.5313s 0.8s ease",
                }}
              ></div>
              <div className="content-inner md:ms-[35px] lg:ms-[39px]">
                <MainSectionTitle active={active} lang={language} dark>
                  {language == "ar"
                    ? seasons[2].title.translations.ar
                    : language == "fa"
                    ? seasons[2].title.translations.fa
                    : seasons[2].title.translations.en}
                </MainSectionTitle>
                <div
                  className={`${
                    language == "en"
                      ? "md:w-[360px] lg:w-[400px] xl:w-[480px]"
                      : "md:w-[320px] lg:w-[400px]"
                  } description mt-1`}
                >
                  <MainSectionDescription lang={language} dark>
                    {language == "ar"
                      ? seasons[2].description.translations.ar
                      : language == "fa"
                      ? seasons[2].description.translations.fa
                      : seasons[2].description.translations.en}
                  </MainSectionDescription>
                </div>
                <Link href={seasons[2].href}>
                  <Button lang={language} dark />
                </Link>
              </div>
            </div>
            <figure
              className={`images relative z-[50] overflow-hidden md:w-[360px] md:h-[480px] lg:w-[400px] lg:h-[520px] xl:w-[420px] xl:h-[540px]`}
              style={{
                transition: "all 0.5313s 0.55s ease",
              }}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_UPLOADS_BASE_URL}${seasons[2].imageUrls[1]}`}
                alt={seasons[2].slug}
                fill
                objectFit="cover"
                className="mask-image"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RiseOfDivineReign;

"use client";

import { Arrow } from "../../../../public/svg";
import Typography from "../typography";

interface SeasonButtonType {
  dark?: boolean;
  lang: "ar" | "fa" | "en";
}

export const SeasonButton = ({ dark, lang }: SeasonButtonType) => {
  return (
    <div
      data-cursor="action"
      className="text-primary border-secondary button-hover bg-[#f6f6f6] dark:bg-[#151515] hover:bg-[#ececec] dark:hover:bg-[#181818] cursor-pointer h-[46px] sm:h-[48px] md:h-[44px] px-[16px] sm:px-[18px] md:px-[20px] lg:px-[22px] rounded-[10px] md:mt-6 flex justify-center md:justify-start items-center w-full md:w-fit duration-300 relative z-[50] select-none"
    >
      <Typography
        className={`${dark ? "text-primary-dark" : "text-primary"} ${
          lang == "ar" || lang == "fa"
            ? "yekan-regular main-section-description-rtl md:text-[19px]"
            : "tasaorbiter-regular main-section-description-ltr md:text-[20px]"
        }`}
      >
        {lang == "ar"
          ? "خطوة نحو الحقيقة"
          : lang == "fa"
          ? "گام به سوی حقیقت"
          : "Step into the Truth"}
      </Typography>
      <div className={`icon-wrapper hidden md:flex`}>
        <Arrow direction={lang == "en" ? "ltr" : "rtl"} />
      </div>
    </div>
  );
};

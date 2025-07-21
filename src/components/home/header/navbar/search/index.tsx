"use client";

import { useStore } from "@/store";
import { Search } from "../../../../../../public/svg";

const SearchBox = () => {
  const { language } = useStore();
  return (
    <>
      <div
        data-cursor="action"
        className={`${
          language == "en" ? "direction-ltr" : "direction-rtl"
        } text-tertiary search md:h-[38px] md:rounded-[10px] md:border md:border-[#554E48] dark:md:border-[#fff3e240] md:px-[10px] relative z-[30] flex justify-center items-center cursor-pointer md:bg-transparent md:hover:bg-[#ecececc4] md:dark:bg-transparent md:dark:hover:bg-[#25210f9d] backdrop-blur-md`}
      >
        <Search direction={language == "en" ? "ltr" : "rtl"} />
      </div>
    </>
  );
};
export default SearchBox;

"use client";

import { useStore } from "@/store";
import { Search } from "../../../../../../public/svg";

const SearchBox = () => {
  const { language } = useStore();
  return (
    <>
      <div
        className={`${
          language == "en" ? "direction-ltr" : "direction-rtl"
        } text-tertiary search md:h-[40px] md:rounded-[10px] md:border md:border-[#554E48] dark:md:border-[#fff3e240] md:px-3 relative z-[30] flex justify-center items-center cursor-pointer md:bg-[#fafafa] md:dark:bg-[#171717] md:hover:bg-[#eeeeee] md:dark:hover:bg-[#1a1a1a]`}
      >
        <Search direction={language == "en" ? "ltr" : "rtl"} />
      </div>
    </>
  );
};
export default SearchBox;

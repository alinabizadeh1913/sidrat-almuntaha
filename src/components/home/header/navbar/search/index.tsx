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
        } text-tertiary search md:h-[40px] md:rounded-[10px] md:border md:border-[#554E48] dark:md:border-[#fff3e240] md:px-3 relative z-[30] flex justify-center items-center cursor-pointer md:bg-[#ffffff5b] md:dark:bg-[#0c0c0c4f] md:backdrop-blur-sm hover:md:bg-[#dfdfdf5b] hover:md:dark:bg-[#1d1d1d5b]`}
      >
        <Search direction={language == "en" ? "ltr" : "rtl"} />
      </div>
    </>
  );
};
export default SearchBox;

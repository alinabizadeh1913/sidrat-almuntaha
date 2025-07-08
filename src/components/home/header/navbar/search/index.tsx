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
        } text-tertiary search md:h-[38px] md:rounded-[10px] md:border md:border-[#554E48] dark:md:border-[#fff3e240] md:px-[10px] relative z-[30] flex justify-center items-center cursor-pointer md:bg-[#f6f6f6] md:dark:bg-[#151515] md:hover:bg-[#ececec] md:dark:hover:bg-[#181818]`}
      >
        <Search direction={language == "en" ? "ltr" : "rtl"} />
      </div>
    </>
  );
};
export default SearchBox;

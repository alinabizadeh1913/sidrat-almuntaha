"use client";

import { MainText } from "../layout/text";
import Link from "next/link";

const SecretComponent = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center flex-col">
        <div className="w-[480px]">
          {/* <MainText
            lang="ar"
            weight="regular"
            className="text-[24px] text-primary text-center"
          >
            اللهم العن و اهلک خام.نه ای و عجل لولیک الفرج
            <br />
          </MainText> */}
          <MainText
            lang="ar"
            weight="regular"
            className="text-[24px] text-primary text-center"
          >
            جز خدا و اهل بیت علیهم السلام هیچ کسی وجود نداره . امام حی و حاظر ما
            خلیفه الله الاعظم بقیه الله صاحب العصر و الزمان مهدی فاطمه عجل الله
            تعالی فرجه الشریف و روحی و ارواح العالمین لتراب مقدمه الفداه هست و
            تمام
          </MainText>
        </div>
        <Link href={"/"}>
          <MainText
            lang="en"
            weight="regular"
            className="text-[24px] text-primary my-4 p-3 rounded-md border-primary"
          >
            Go to Home
          </MainText>
        </Link>
      </div>

      <div className="noise bg-[#ffffff] dark:bg-[#0c0c0c]" />
    </>
  );
};

export default SecretComponent;

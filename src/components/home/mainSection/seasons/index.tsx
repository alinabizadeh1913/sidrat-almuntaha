import Grid from "@/components/layout/grid";
import StoryOfSoil from "../story_of_soil";
import FourteenInfallibles from "../fourteen_infallibles";
import RiseOfDivineReign from "../rise_of_divine_reign";
import SuspendedHouse from "../suspended_house";
import DayOfJudgment from "../day_of_judgment";
import EternalFall from "../eternal_fall";
import EndlessSerenity from "../endless_serenity";
import Section from "@/components/layout/section";

const Seasons = ({
  scrollCount,
  setScrollCount,
}: {
  scrollCount: number;
  setScrollCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      <Section
        identifier="main-section"
        className={`${
          scrollCount == 1
            ? "visible opacity-100"
            : scrollCount < 1
            ? "invisible opacity-0"
            : ""
        } absolute bottom-0 left-0 right-0 w-full h-full z-[40] hidden md:block ${
          scrollCount == 1 ||
          scrollCount == 3 ||
          scrollCount == 5 ||
          scrollCount == 7
            ? "bg-[#fff]"
            : "bg-body"
        }`}
      >
        <div className="noise hidden md:block"></div>
        <Grid
          zIndex={45}
          dark={
            scrollCount == 1 ||
            scrollCount == 3 ||
            scrollCount == 5 ||
            scrollCount == 7
          }
        />

        <StoryOfSoil
          scrollCount={scrollCount}
          setScrollCount={setScrollCount}
        />
        <FourteenInfallibles
          scrollCount={scrollCount}
          setScrollCount={setScrollCount}
        />
        <RiseOfDivineReign
          scrollCount={scrollCount}
          setScrollCount={setScrollCount}
        />
        <SuspendedHouse
          scrollCount={scrollCount}
          setScrollCount={setScrollCount}
        />
        <DayOfJudgment
          scrollCount={scrollCount}
          setScrollCount={setScrollCount}
        />
        <EternalFall
          scrollCount={scrollCount}
          setScrollCount={setScrollCount}
        />
        <EndlessSerenity
          scrollCount={scrollCount}
          setScrollCount={setScrollCount}
        />
      </Section>
    </>
  );
};
export default Seasons;

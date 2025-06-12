import Section from "@/components/layout/section";
import { MainText } from "@/components/layout/text";

const Footer = () => {
  return (
    <Section className="w-full h-screen relative z-[1000] flex flex-col justify-center items-center gap-y-4 direction-rtl">
      <MainText className="text-[32px] text-primary" lang="fa" weight="bold">
        طراحی و توسعه : علی نبی زاده
      </MainText>
      <MainText className="text-[32px] text-primary" lang="fa" weight="bold">
        Frontend Developer & UI/UX Designer
      </MainText>
    </Section>
  );
};

export default Footer;

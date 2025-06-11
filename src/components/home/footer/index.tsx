import Section from "@/components/layout/section";
import { MainText } from "@/components/layout/text";

const Footer = () => {
  return (
    <Section className="w-full h-screen relative z-[1000] flex justify-center items-center">
      <MainText className="text-[40px] text-primary" lang="fa" weight="bold">
        به زودی در اینجا فوتر نصب می شود
      </MainText>
    </Section>
  );
};

export default Footer;

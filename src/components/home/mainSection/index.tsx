import Typography from "@/components/layout/typography";

const MainSectionTitle = ({
  children,
  lang,
  active,
  className,
  dark,
}: {
  children: React.ReactNode;
  lang: "ar" | "fa" | "en";
  active?: boolean;
  className?: string;
  dark?: boolean;
}) => {
  return (
    <section className="gradient-text-wrapper select-none">
      <div
        className={`${
          dark ? "gradient-text-dark" : "gradient-text"
        } md:text-[32px] lg:text-[36px] text-center ${
          lang == "fa" || lang == "ar"
            ? "yekan-black main-section-title-rtl"
            : "tasaorbiter-bold main-section-title-ltr"
        }`}
      >
        {children}
      </div>
      <div
        className={`gradient-text-overlay md:text-[32px] lg:text-[36px] text-center ${
          lang == "fa" || lang == "ar" ? "yekan-black" : "tasaorbiter-bold"
        } ${
          active && lang == "en"
            ? "gradient-text-overlay-ltr main-section-title-ltr"
            : active && (lang == "fa" || lang == "ar")
            ? "gradient-text-overlay-rtl main-section-title-rtl"
            : ""
        }`}
      >
        {children}
      </div>
    </section>
  );
};

const MainSectionDescription = ({
  children,
  lang,
  dark,
  active,
}: {
  children: React.ReactNode;
  lang: "ar" | "fa" | "en";
  dark?: boolean;
  active?: boolean;
}) => {
  return (
    <Typography
      className={`${
        dark ? "text-secondary-dark" : "text-secondary"
      } select-none ${
        lang == "fa" || lang == "ar"
          ? "yekan-regular main-section-description-rtl md:text-[20px] lg:text-[20.5px] xl:text-[21px] leading-[30px] sm:leading-[34px] md:leading-[36px] lg:leading-[38px] xl:leading-[40px]"
          : "tasaorbiter-regular main-section-description-ltr md:text-[21.5px] lg:text-[22px] xl:text-[22.5px] leading-[32px] sm:leading-[36px] md:leading-[38px] lg:leading-[40px] xl:leading-[42px]"
      }`}
    >
      {children}
    </Typography>
  );
};

export { MainSectionTitle, MainSectionDescription };

// The Fourteen Infallibles

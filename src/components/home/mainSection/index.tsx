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
        } md:text-[32px] lg:text-[36px] xl:text-[40px] text-center ${
          lang == "fa" || lang == "ar"
            ? "yekan-black main-section-title-rtl"
            : "biotif-bold main-section-title-ltr"
        }`}
      >
        {children}
      </div>
      <div
        className={`gradient-text-overlay md:text-[32px] lg:text-[36px] xl:text-[40px] text-center ${
          lang == "fa" || lang == "ar" ? "yekan-black" : "biotif-bold"
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
      } md:text-[20px] lg:text-[22px] xl:text-[24px] select-none md:leading-[40px] xl:leading-[44px] ${
        lang == "fa" || lang == "ar"
          ? "yekan-regular main-section-description-rtl leading-[32px] sm:leading-[36px]"
          : "biotif-regular main-section-description-ltr leading-[32px] sm:leading-[36px]"
      }`}
    >
      {children}
    </Typography>
  );
};

export { MainSectionTitle, MainSectionDescription };

// The Fourteen Infallibles

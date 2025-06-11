export const BurgerMenu = () => {
  return (
    <svg
      viewBox="0 0 24 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[22px] h-[18px] md:w-[24px] md:h-[20px]"
    >
      <rect
        rx="1.5"
        fill="currentColor"
        className="w-full h-[2px] md:h-[3px]"
      />
      <rect
        y="8"
        rx="1.5"
        fill="currentColor"
        className="w-full h-[2px] md:h-[3px]"
      />
      <rect
        y="16"
        rx="1.5"
        fill="currentColor"
        className="w-full h-[2px] md:h-[3px]"
      />
    </svg>
  );
};

export const BarIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[22px] h-[22px] md:w-[24px] md:h-[24px]"
    >
      <rect
        x="14.9"
        y="0.9"
        width="8.2"
        height="8.2"
        rx="1.1"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="14.9"
        y="14.9"
        width="8.2"
        height="8.2"
        rx="1.1"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="0.9"
        y="0.9"
        width="8.2"
        height="8.2"
        rx="1.1"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <rect
        x="0.9"
        y="14.9"
        width="8.2"
        height="8.2"
        rx="1.1"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
};

export const Globe = () => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[26px] h-[26px] md:w-[20px] md:h-[20px]"
    >
      <path
        d="M10.0003 18.3333C14.6027 18.3333 18.3337 14.6024 18.3337 10C18.3337 5.39763 14.6027 1.66667 10.0003 1.66667C5.39795 1.66667 1.66699 5.39763 1.66699 10C1.66699 14.6024 5.39795 18.3333 10.0003 18.3333Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.66699 10H18.3337"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.0003 1.66667C12.0847 3.94863 13.2693 6.91003 13.3337 10C13.2693 13.09 12.0847 16.0514 10.0003 18.3333C7.91593 16.0514 6.73136 13.09 6.66699 10C6.73136 6.91003 7.91593 3.94863 10.0003 1.66667Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Search = ({ direction }: { direction: "ltr" | "rtl" }) => {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[23px] h-[23px] md:w-[18px] md:h-[18px]"
      style={{
        transform: direction == "ltr" ? "scaleX(1)" : "scaleX(-1)",
      }}
    >
      <path
        d="M7.66671 11.6666C4.72122 11.6666 2.33342 9.27878 2.33342 6.33329C2.33342 3.38779 4.72122 1 7.66671 1C10.6122 1 13 3.38779 13 6.33329C13 9.27878 10.6122 11.6666 7.66671 11.6666Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.00041 13L3.90039 10.1"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Down = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.5607 14.5607C26.1464 13.9749 26.1464 13.0251 25.5607 12.4393C24.9749 11.8536 24.0251 11.8536 23.4393 12.4393L25.5607 14.5607ZM16 22L14.9393 23.0606C15.5251 23.6464 16.4749 23.6464 17.0607 23.0606L16 22ZM8.56061 12.4393C7.97481 11.8536 7.02521 11.8536 6.43941 12.4393C5.85361 13.0251 5.85361 13.9749 6.43941 14.5607L8.56061 12.4393ZM23.4393 12.4393L14.9393 20.9394L17.0607 23.0606L25.5607 14.5607L23.4393 12.4393ZM17.0607 20.9394L8.56061 12.4393L6.43941 14.5607L14.9393 23.0606L17.0607 20.9394Z"
        fill="#FFE4BF"
      />
      <path d="M16 8V14.3636V19.0303V22" fill="#FFE4BF" />
      <path
        d="M16 8V14.3636V19.0303V22"
        stroke="#FFE4BF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="10 10"
      />
    </svg>
  );
};

export const Arrow = ({ direction }: { direction: "ltr" | "rtl" }) => {
  return (
    <svg
      viewBox="0 0 20 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[18px] h-[15px] lg:w-[20px] lg:h-[17px]"
      style={{
        direction: "ltr",
        transform: direction == "ltr" ? "scaleX(-1)" : "scaleX(1)",
      }}
    >
      <path
        d="M7.36914 0.724863C7.76191 0.404513 8.34092 0.427107 8.70703 0.793223C9.07303 1.15934 9.09571 1.73838 8.77539 2.13111L8.70703 2.20729L3.41406 7.50025H19C19.5523 7.50025 20 7.94797 20 8.50025C19.9999 9.05243 19.5522 9.50025 19 9.50025H3.41406L8.70703 14.7932L8.77539 14.8694C9.09562 15.2622 9.0731 15.8412 8.70703 16.2073C8.34094 16.5733 7.76187 16.5959 7.36914 16.2756L7.29297 16.2073L0.292969 9.20729C0.261863 9.17618 0.234158 9.14259 0.208008 9.10865C0.194228 9.09075 0.180534 9.0728 0.167969 9.05396C0.140059 9.01215 0.115659 8.96877 0.0947266 8.92408C0.0746466 8.88129 0.0569018 8.83711 0.0429688 8.79127C0.0378939 8.77455 0.0344527 8.75741 0.0302734 8.74049C0.0112336 8.66345 1.90354e-05 8.58317 0 8.50025C0 8.34716 0.0351828 8.20223 0.0966797 8.07252C0.117408 8.02872 0.140519 7.98561 0.167969 7.94459C0.204497 7.88998 0.246688 7.83952 0.292969 7.79322L7.29297 0.793223L7.36914 0.724863Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const Sun = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1896_308)">
        <path
          d="M10 14.1667C12.3012 14.1667 14.1667 12.3012 14.1667 10C14.1667 7.69881 12.3012 5.83333 10 5.83333C7.69885 5.83333 5.83337 7.69881 5.83337 10C5.83337 12.3012 7.69885 14.1667 10 14.1667Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 0.833332V2.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 17.5V19.1667"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.51672 3.51667L4.70006 4.7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.3 15.3L16.4834 16.4833"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.833374 10H2.50004"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 10H19.1667"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.51672 16.4833L4.70006 15.3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.3 4.7L16.4834 3.51667"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1896_308">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Moon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 10.6583C17.369 12.0768 16.8366 13.4287 15.9652 14.5557C15.0939 15.6826 13.9196 16.5382 12.5798 17.0221C11.24 17.5061 9.79003 17.5984 8.39962 17.2884C7.00922 16.9784 5.73587 16.2788 4.72856 15.2715C3.72125 14.2642 3.02166 12.9908 2.71163 11.6004C2.4016 10.21 2.49397 8.76007 2.97792 7.42025C3.46188 6.08042 4.3174 4.90614 5.44438 4.03479C6.57137 3.16345 7.9232 2.63109 9.34171 2.5C8.51122 3.62356 8.11158 5.00787 8.21548 6.40118C8.31939 7.79448 8.91992 9.10422 9.90787 10.0922C10.8958 11.0801 12.2056 11.6807 13.5989 11.7846C14.9922 11.8885 16.3765 11.4888 17.5 10.6583Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

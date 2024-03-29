import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "text-paying",
    "text-sample",
    "text-unchecked",
    "text-rejected",

    "bg-paying",
    "bg-sample",
    "bg-unchecked",
    "bg-rejected",

    "bg-paying-light",
    "bg-sample-light",
    "bg-unchecked-light",
    "bg-rejected-light",
  ],
  theme: {
    extend: {
      colors: {
        paying: {
          DEFAULT: "#9747FF",
          light: "#9747FF10",
        },
        sample: {
          DEFAULT: "#C68F00",
          light: "#C68F0010",
        },
        unchecked: {
          DEFAULT: "#444444",
          light: "#44444410",
        },
        rejected: {
          DEFAULT: "#FF0000",
          light: "#FF000010",
        },
      },
      borderRadius: {
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
      },
      spacing: {
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        42: "42px",
        72: "72px",
        80: "80px",
      },
      fontSize: {
        8: "8px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        28: "28px",
        30: "30px",
        32: "32px",
      },
      fontFamily: {
        iransanReq: "iran-sans-req",
        iransanMd: "iran-sans-md",
        iransanBold: "iran-sans-bold",
      },
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        capi_vsm: "450px" //very small
      },
      fontFamily: {
        texts: ["Roboto"],
        headline: ["Sora"],
      },
      colors: {
        capi_purple: "#304076",
        capi_yellow: "#EDB604",
        capi_green: "#63C770",
        capi_blue: "#1EA0D1",
        capi_red: "#FB3535",
        capi_blue_home: "#5DA6DB",
        capi_blue_home_darker: "#5190bd",
        capi_gray_home: "#e5e7eb",
        capi_gray_home_darker: "#4b5563",
        capi_gray_login: "#838183",
        capi_gray_login_darker: "#1d1c1d",
        capi_gray_contact: "#3E3E3E",
        capi_seaGreen_about: "#04D9B3",
        capi_seaGreen_about_light: "#0EFFE2",
        capi_gray_development: "#2d2d2d"

      }
    },
  },
  plugins: [],
};

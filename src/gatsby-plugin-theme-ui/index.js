// import defaultColors from "../util/default-colors.json"
// import darkColors from "../util/dark-theme-colors.json"
import { lightness } from "@theme-ui/color"
const theme = {
  colors: {
    // ...defaultColors,
    siteColor: "rgba(217,70,239,1)",
    // text: "#292a31",
    // background: "#fff",
    // primary: "#5C2941",
    accent: "#fff",
    muted: "rgba(0, 0, 0, 0.7)",
    cardBg: "#fff",
    borderColor: "#540229",
    labelText: "#777",
    inputBorder: "#aaa",
    inputBackground: "#fff",
    socialIcons: lightness("siteColor", 0.4),
    socialIconsHover: lightness("siteColor", 0.3),
    buttonColor: lightness("siteColor", 0.9),
    buttonHoverBg: lightness("siteColor", 0.4),
    buttonHoverColor: lightness("siteColor", 0.8),
    footerBg: "#292a31",
    bannerBg: "#fff",
    modes: {
      dark: {
        // text: "#f5f5f5",
        // background: "#19191D",
        // primary: "#252525",
        // accent: "#5C2941",
        // muted: "rgba(255, 255, 255, 0.7)",
        // cardBg: "#424242",
        // borderColor: "#888",
        // labelText: "#777",
        // inputBorder: "#777",
        // inputBackground: "#333",
        // socialIcons: "#BDBDBD",
        // socialIconsHover: lightness("siteColor", 0.9),
        // buttonColor: lightness("siteColor", 0.7),
        // buttonHoverBg: lightness("siteColor", 0.3),
        // buttonHoverColor: lightness("siteColor", 0.9),
        // bannerBg: "#19191D",
        // siteColor: "#424242"
      }
    }
  },
  links: {
    postLink: {
      color: "muted",
      "&:hover": {
        color: "text"
      }
    }
  },
  variants: {
    button: {
      bg: "siteColor",
      color: "buttonColor",
      "&:hover": {
        bg: "buttonHoverBg",
        color: "buttonHoverColor"
      }
    },
    socialIcons: {
      a: {
        color: "socialIcons",
        ":hover": {
          color: "socialIconsHover"
        }
      }
    }
  }
}

export default theme

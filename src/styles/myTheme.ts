import { DefaultTheme } from "styled-components";

const myCustomTheme: DefaultTheme = {
  palette: {
    primary: {
      orange: "#D87D4A",
      black: "#101010",
      gray: "#F1F1F1",
    },
    secondary: {
      coral: "#FBAF85",
      gray: "#FAFAFA",
    },
    neutral: {
      black: "#000",
      white: "#FFF",
    },
    hover: {
      orange: "#FBAF85",
    },
  },
  typography: {
    family: {
      manrope: "'Manrope', sans-serif",
    },
    weights: {
      bold: 700,
      medium: 500,
      regular: 400,
    },
  },
};

export default myCustomTheme;

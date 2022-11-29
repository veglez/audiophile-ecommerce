import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      primary: {
        orange: string;
        black: string;
        gray: string;
      };
      secondary: {
        gray: string;
        coral: string;
      };
      neutral: {
        black: string;
        white: string;
      };
      hover: {
        orange: string;
      };
    };
    typography: {
      family: {
        manrope: string;
      };
      weights: {
        bold: number;
        medium: number;
        regular: number;
      };
    };
  }
}

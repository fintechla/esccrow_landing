import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  fontColor: "#1A237E",
  background: "#fff",
  backgroundFooter: "#fff",
  buttonBackground: "#b5dcff",
};

export const darkTheme = {
  fontColor: "#fff",
  background:
    "linear-gradient(180deg, #1A237E 7.2%, #000000 80.73%, #000000 98.73%)",
  backgroundFooter: "#000",
  buttonBackground: "#1240a3",
};

export const GlobalStyles = createGlobalStyle`
  body{
    @media (max-height: 500px) {
      overflow: scroll;
    }
  }
`;

import { createContext } from "react";

export const themes = {
  dark: {
    color: "dark",
    background: "#7d7d7d",
  },
  light: {
    color: "light",
    background: "#ffffff",
  },
};

export const ThemeContext = createContext();

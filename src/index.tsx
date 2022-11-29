import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import myCustomTheme from "./styles/myTheme";

const root = ReactDOM.createRoot(
  document.getElementById("myCustomApp") as HTMLElement
);

root.render(
  <ThemeProvider theme={myCustomTheme}>
    <App />
  </ThemeProvider>
);

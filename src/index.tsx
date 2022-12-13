import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import myCustomTheme from "./styles/myTheme";
import { Provider } from "react-redux";
import { store } from "./redux/store";

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require("./mocks/handlers.ts");
  worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById("myCustomApp") as HTMLElement
);

root.render(
  <ThemeProvider theme={myCustomTheme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);

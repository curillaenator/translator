import React, { StrictMode } from "react";
import { render } from "react-dom";

import { App } from "@src/app/App";

import "@src/index.scss";

render(
  <StrictMode>
    {/* <BrowserRouter> */}
    <App />
    {/* </BrowserRouter> */}
  </StrictMode>,
  document.getElementById("root")
);

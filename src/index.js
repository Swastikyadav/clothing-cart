import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  // Browser router provides app all routing functionalities.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

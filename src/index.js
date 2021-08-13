import { StrictMode } from "react";
import ReactDOM from "react-dom";

import ColorBlock from "./ColorBlock";
//import App from "./App";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ColorBlock />
  </StrictMode>,
  rootElement
);

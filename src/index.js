import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/urbanist";
import { BrowserRouter as Router } from "react-router-dom";
import { hboTheme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={hboTheme}>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/urbanist";

const theme = extendTheme({
  fonts: {
    body: "Urbanist, sans-serif",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

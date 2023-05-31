import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { myChakraTheme } from "./Components/ChakraTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={myChakraTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

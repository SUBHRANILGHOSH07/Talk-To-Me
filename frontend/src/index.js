import React from "react";
import ReactDOM from "react-dom/client"; // Note the change here
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ChatProvider from "./Context/ChatProvider";

// Create a root container
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the application using the createRoot API
root.render(
  <BrowserRouter>
    <ChatProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ChatProvider>
  </BrowserRouter>,
);

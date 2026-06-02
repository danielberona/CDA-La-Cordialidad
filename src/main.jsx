import React from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/archivo/400.css";
import "@fontsource/archivo/500.css";
import "@fontsource/archivo/700.css";
import "@fontsource/archivo/900.css";
import "@fontsource/archivo-black";
import App from "./App.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

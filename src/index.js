import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Create a root using createRoot
const root = createRoot(document.getElementById("root"));

// Render your app within the created root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

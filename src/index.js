import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// so that we can use the router package in react
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // browser router
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

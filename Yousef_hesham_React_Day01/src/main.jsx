import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import VideoProvider from "./context/videos";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <VideoProvider>
    <App />
  </VideoProvider>
);
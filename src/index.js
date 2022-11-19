import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { LanguageProvider } from "./contexts/LanguageContext";
import { ResourcesProvider } from "./contexts/ResourcesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ResourcesProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ResourcesProvider>
  </React.StrictMode>
);

reportWebVitals();

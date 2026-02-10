import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import ErrorBoundary from "./components/common/ErrorBoundary";
import "./index.css";
import App from "./App";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <HashRouter>
        <ErrorBoundary>
          <App />
          <Analytics />
        </ErrorBoundary>
      </HashRouter>
    </HelmetProvider>
  </StrictMode>
);

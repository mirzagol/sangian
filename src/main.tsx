import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Layout from "./theme.tsx";
import { Provider } from "./components/ui/provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SofaDetail from "./components/SofaDetail";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/sofa/:id" element={<SofaDetail />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </Provider>
  </StrictMode>
);

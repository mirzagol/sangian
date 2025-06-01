import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Layout from "./theme.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SofaDetail from "./components/SofaDetail";
import Contact from "./components/Contact.tsx";
import Contract from "./components/Contract.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/sofa/:id" element={<SofaDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contract" element={<Contract />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  </StrictMode>
);

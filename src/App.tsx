import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CortesPage from "./pages/CortesPage";
import AtlantidaPage from "./pages/AtlantidaPage";
import YoroPage from "./pages/YoroPage";
import { Scan } from "./pages/Scan";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/departamento/cortes" element={<CortesPage />} />
        <Route path="/departamento/atlantida" element={<AtlantidaPage />} />
        <Route path="/departamento/yoro" element={<YoroPage />} />
        <Route path="/scan" element={<Scan />} />
      </Routes>
    </BrowserRouter>
  );
}

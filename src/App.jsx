import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import { CasesPage } from "./pages/CasesPage";
import { Footer } from "./components/Footer/Footer";

export const App = () => {
    return (
        <BrowserRouter basename="/Woodmart">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cases" element={<CasesPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};
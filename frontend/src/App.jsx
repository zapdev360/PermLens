import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import Sidebar from "./layouts/Sidebar";
import Home from "./pages/Home";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <BrowserRouter>
      <div className="md:hidden min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
          <TopNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tos" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </div>
      </div>

      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tos" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
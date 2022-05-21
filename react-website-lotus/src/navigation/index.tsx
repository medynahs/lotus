import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skincare from "../pages/Skincare";
import Body from "../pages/Body";
import About from "../pages/About";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Nails from "../pages/Nails";
import Hair from "../pages/Hair";
import Removal from "../pages/Removal";
import Packages from "../pages/Packages";
import Feedbacks from "../pages/Feedbacks";
import Faq from "../pages/Faq";
import Politics from "../pages/Politics";

export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/detalhes/:productId" element={<Details />} />
        <Route path="/rosto" element={<Skincare />} />
        <Route path="/corpo" element={<Body />} />
        <Route path="/maosepes" element={<Nails />} />
        <Route path="/cabelo" element={<Hair />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/depilacao" element={<Removal />} />
        <Route path="/pacotes" element={<Packages />} />
        <Route path="/feedbacks" element={<Feedbacks />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/politica" element={<Politics />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

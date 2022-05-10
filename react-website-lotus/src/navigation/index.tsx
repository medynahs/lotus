import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skincare from "../pages/Skincare";
import Body from "../pages/Body";
import Makeup from "../pages/Makeup";
import About from "../pages/About";
import Home from "../pages/Home";

export default function Navigation() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/corpo" element={<Body />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

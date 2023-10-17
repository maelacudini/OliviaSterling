import "./global.css";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Home from "./components/Home";
import About from "./components/About";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

import { useEffect, useState } from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Works from "./Works";
import NavFloating from "./NavFloating";
import { AnimatePresence, motion } from "framer-motion";
import { about, home } from "../utils/animations";

export default function Home() {
  const [isNavFloating, setNavFloating] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 500) {
        setNavFloating(true);
      } else {
        setNavFloating(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div variants={home} initial="initial" animate="animate" exit="exit">
      <AnimatePresence mode="wait">
        {isNavFloating && <NavFloating />}
      </AnimatePresence>
      <Hero />
      <Works />
      <Footer />
    </motion.div>
  );
}

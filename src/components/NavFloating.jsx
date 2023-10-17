import { useState } from "react";
import style from "../css/navfloating.module.scss";
import { Link, animateScroll as scroll } from "react-scroll";
import Offcanvas from "./Offcanvas";
import { AnimatePresence, motion } from "framer-motion";
import { navfloating } from "../utils/animations";

export default function NavFloating() {
  const [open, setOpen] = useState(false);

  // Scroll up by 1400 pixels
  const handleScrollUp = () => {
    scroll.scrollMore(-1400, { duration: 500 });
  };

  // Scroll down by 1400 pixels
  const handleScrollDown = () => {
    scroll.scrollMore(1400, { duration: 500 });
  };
  return (
    <>
      <nav className={style.main}>
        <motion.div
          variants={navfloating}
          initial="initial"
          animate="animate"
          exit="exit"
          className={style.container}
        >
          <button onClick={handleScrollUp}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              className="bi bi-arrow-up-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
              />
            </svg>
          </button>
          <div className={style.menu}>
            <svg
              onClick={() => {
                setOpen(!open);
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <button onClick={handleScrollDown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              className="bi bi-arrow-down-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
              />
            </svg>
          </button>
        </motion.div>
      </nav>
      <AnimatePresence mode="wait">
        {open && <Offcanvas open={open} setOpen={setOpen} />}
      </AnimatePresence>
    </>
  );
}

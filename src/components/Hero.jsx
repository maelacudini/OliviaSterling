import style from "../css/hero.module.scss";
import Nav from "./Nav";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

export default function Hero() {
  const date = new Date().toLocaleTimeString();
  return (
    <div id="top" className={style.main}>
      <div className={style.intro}>
        <h1>
          I'm Olivia Sterling, a Louisiana-based UI designer with a deep-rooted
          passion for crafting meaningful digital experiences.
        </h1>
        <small className={style.date}>
          <div className={style.dot}></div>
          <small>{date}</small>
        </small>
      </div>

      <div className={style.readmore}>
        <RouterLink className="link" to="/about">
          Read more
        </RouterLink>
      </div>

      <Nav />

      <div className={style.scrolldown}>
        <p>
          <ScrollLink
            className="link"
            to="works"
            smooth={true}
            offset={50}
            duration={500}
            href="#"
          >
            Scroll down
          </ScrollLink>{" "}
          for selected works
        </p>
        <small>Last updated December 21, 2022</small>
      </div>
    </div>
  );
}

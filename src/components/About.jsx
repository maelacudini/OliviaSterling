import style from "../css/about.module.scss";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { about } from "../utils/animations";
import Nav from "./Nav";

export default function About() {
  return (
    <motion.div
      variants={about}
      initial="initial"
      animate="animate"
      exit="exit"
      className={style.main}
    >
      <div className={style.header}>
        <RouterLink className="link" to={"/"}>
          Back to Home
        </RouterLink>

        <p>Olivia Sterling</p>
      </div>

      <div className={style.about}>
        <p>About Me</p>

        <h1>
          Olivia <span className={style.gray}>Sterling</span> is a
          <span className={style.gray}>Louisiana-based</span> UI designer with a{" "}
          <span className={style.gray}>relentless</span> passion for creating{" "}
          <span className={style.gray}>intuitive</span> and visually engaging
          digital experiences. She thrives on the art of turning
          <span className={style.gray}>innovative</span> concepts into
          captivating user interfaces that seamlessly bridge the gap between
          form and function. Olivia's design journey has been marked by her
          <span className={style.gray}>unwavering</span> commitment to crafting
          interfaces that empower individuals and businesses to
          <span className={style.gray}>connect</span>,{" "}
          <span className={style.gray}>learn</span>, and{" "}
          <span className={style.gray}>thrive</span>.
        </h1>

        <h1>
          <span className={style.gray}>Throughout</span> her dynamic career,
          Olivia has ventured beyond the boundaries of her home state, taking on
          exciting design challenges across various industries. From
          <span className={style.gray}>collaborating</span> with startups to
          <span className={style.gray}>designing</span> for established
          enterprises, she's left her creative{" "}
          <span className={style.gray}>imprint</span>
          on projects that span <span className={style.gray}>e-commerce</span>,
          <span className={style.gray}>finance</span>,
          <span className={style.gray}>health</span>, and{" "}
          <span className={style.gray}>social media</span>. Her extensive design
          portfolio reflects her versatile expertise, which has consistently
          delivered user-centric solutions that{" "}
          <span className={style.gray}>captivate</span>
          audiences and drive <span className={style.gray}>engagement</span>.
        </h1>

        <h1>
          Olivia's passion <span className={style.gray}>extends</span> beyond
          the screen. An <span className={style.gray}>advocate</span> for
          <span className={style.gray}>continuous</span> learning, she dedicates
          her free time to exploring{" "}
          <span className={style.gray}>emerging</span>
          design trends and technologies. As a{" "}
          <span className={style.gray}>creative</span>
          thinker, she thrives
        </h1>

        <h1>Let's Connect.</h1>
      </div>

      <Nav />
    </motion.div>
  );
}

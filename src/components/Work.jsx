import style from "../css/work.module.scss";
import { motion } from "framer-motion";
import { generals } from "../utils/animations";

export default function Work({ work, index }) {
  const { title, desc, role, date, url } = work;

  return (
    <div className={style.main}>
      <h1>{title}</h1>
      <p>{desc}</p>

      <div className={style.roledate}>
        <small>{role}</small>
        <small>{date}</small>
      </div>

      <div className={style.gallery}>
        {url.map((u, index) => (
          <motion.img
            loading="lazy"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { delay: index * 0.2 },
            }}
            key={index}
            src={u}
            alt={u}
          />
        ))}
      </div>
    </div>
  );
}

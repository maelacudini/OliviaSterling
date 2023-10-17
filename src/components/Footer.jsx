import style from "../css/footer.module.scss";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className={style.main}>
      <div>
        <Link
          className="link"
          to="top"
          smooth={true}
          offset={50}
          duration={500}
        >
          <h1>Back to Top</h1>
        </Link>
        <p>Copiright © 2011-2023</p>
      </div>
    </footer>
  );
}

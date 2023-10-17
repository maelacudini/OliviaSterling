import style from "../css/nav.module.scss";

export default function Nav() {
  return (
    <nav className={style.main}>
      <p>Contact</p>
      <div className={style.social}>
        <a className="link" href="#">
          Email
        </a>
        <a className="link" href="#">
          Instagram
        </a>
        <a className="link" href="#">
          LinkedIn
        </a>
      </div>
    </nav>
  );
}

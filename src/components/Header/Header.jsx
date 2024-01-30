import logo from "../../assets/logo.png";
import headerClasses from "./Header.module.css";

export default function Header() {
  return (
    <header className={headerClasses.header}>
      <img src={logo} alt="A canvas" className={headerClasses["header-img"]} />
      <h1 className={headerClasses["header-title"]}>ReactArt</h1>
      <p className={headerClasses["header-paragraph"]}>
        A community of artists and art-lovers.
      </p>
    </header>
  );
}

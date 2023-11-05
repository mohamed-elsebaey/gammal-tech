import Link from "next/link";
import classes from "./MainNavigation.module.css";
import Logo from "./Logo";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/courses">Courses</Link>
          </li>
          <li>
            <Link href="/masterclass">Masterclass</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className={classes.btn}>
          <Link href="/account">
            My Account
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;

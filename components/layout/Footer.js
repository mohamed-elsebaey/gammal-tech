import Link from "next/link";
import classes from "./Footer.module.css";
function Footer() {
  return (
    <div className={classes.footer}>
      <Link href='https://www.youtube.com/gammaltech'>
        <img
          src="https://assets-global.website-files.com/5d2cb3382be6ba1741dc013c/5d2f5709d5e8838266f2a375_yt_icon_rgb.png"
          alt="YouTube Channel Link"
          height="20"
        ></img>
      </Link>
      <p>© 2023 Gammal Tech. All rights reserved.</p>
    </div>
  );
}
export default Footer;

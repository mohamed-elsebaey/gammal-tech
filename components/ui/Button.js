import classes from "./Button.module.css";
import Link from "next/link";

function Button(props) {
  return (
    <div className={classes.actions}>
      <Link href={props.href} className={classes.button}>{props.children}</Link>
    </div>
  );
}
export default Button;

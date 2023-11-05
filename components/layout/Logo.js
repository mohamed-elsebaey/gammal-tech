import classes from "./Logo.module.css";
const Logo = () => {
  return (
    <div className={classes.navbarBrand}>
      <img
        className={classes.navbarLogo}
        src="https://assets-global.website-files.com/5d2cb3382be6ba1741dc013c/5e3949bf1a4769ae4e7acde3_Logo%20Small%202.jpg"
        width="25"
        height="32"
        alt=""
      />
      <div className={classes.navbarTitle} id="navbarTitle" translate="no">
        Premium
      </div>
    </div>
  );
};
export default Logo;

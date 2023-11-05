import classes from './bodyHeader.module.css';

function BodyHeader(props) {
  return <div className={classes.bHeader}>{props.title}</div>;
}

export default BodyHeader;

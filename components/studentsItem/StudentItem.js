import Card from "../ui/Card";
import classes from "./StudentItem.module.css";

function StudentItem(props) {
  function confirmExamHandler() {
    console.log("done");
  }
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.content}>
          <h3>
            <strong>Name : </strong>
            {props.studentData.fullName}
          </h3>
          <h3>
            <strong>Email Address : </strong>
            {props.studentData.emailAddress}
          </h3>
          <h3>
            <strong>Age : </strong>
            {props.studentData.age} years
          </h3>
          <h3>
            <strong>Phone Number : </strong>
            {props.studentData.phone}
          </h3>
          <h3>
            <strong>WhatsApp Number : </strong>
            {props.studentData.whatsApp}
          </h3>
          <h3>
            <strong>Exam Name : </strong>
            {props.studentData.course} / {props.studentData.status}
          </h3>
          <h3>
            <strong>Home Address : </strong>
            {props.studentData.address}
          </h3>
        </div>
        <div className={classes.actions}>
          <div className={classes.control}>
            <label htmlFor="fullName">Choose Exam Date:</label>
            <input
              type="date"
              required
              id="date"
              placeholder="Enter your full name"
            />
          </div>
          <button onClick={confirmExamHandler}>Send The Exam Date </button>
        </div>
      </li>
    </Card>
  );
}

export default StudentItem;

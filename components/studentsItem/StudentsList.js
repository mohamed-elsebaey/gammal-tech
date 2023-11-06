import StudentItem from "./StudentItem";
import classes from "./StudentsList.module.css";
function StudentList(props) {
  return (
    <ul className={classes.list}>
      {props.data.map((studentData) => (
        <StudentItem key={studentData.id} studentData={studentData} />
      ))}
    </ul>
  );
}

export default StudentList;

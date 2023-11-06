import ExamForm from "@/components/ExamForm/ExamForm";

function Exam() {
  const addStudentHandler = (data) => {
    console.log(data);
  };
  return <ExamForm onAddStudent={addStudentHandler} />;
}
export default Exam;

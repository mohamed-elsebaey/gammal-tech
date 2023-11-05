import ExamForm from "@/components/ExamForm/ExamForm";
import Layout from "@/components/layout/Layout";

function Exam() {
  const addStudentHandler = (studentData) => {
    console.log(studentData);
  };
  return (
    <Layout>
      <ExamForm onAddStudent={addStudentHandler} />
    </Layout>
  );
}
export default Exam;

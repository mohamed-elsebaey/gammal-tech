import { MongoClient } from "mongodb";
import ExamForm from "@/components/ExamForm/ExamForm";
import { useRouter } from "next/router";

function Exam(props) {
  const router = useRouter();

  async function addStudentHandler(enteredStudentDetails) {
    const response = await fetch("/api/student-details", {
      method: "POST",
      body: JSON.stringify(enteredStudentDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    router.push("/");
  }
  return (
    <>
      <ExamForm onAddStudent={addStudentHandler} />
    </>
  );
}

//this code is executed during the build process
export async function getStaticProps() {
  //fetch data from an api / data base
  const client = await MongoClient.connect(
    "mongodb+srv://elsebaey95:535199@cluster0.ozqqrmz.mongodb.net/studentDetails?retryWrites=true&w=majority"
  );
  const db = client.db();
  const studentDetailsCollection = db.collection("studentDetails");
  const studentDetails = await studentDetailsCollection.find().toArray();
  client.close();
  return {
    props: {
      studentsData: studentDetails.map((studentData) => ({
        id: studentData._id.toString(),
        phone: studentData.id,
        fullName: studentData.fullName,
        age: studentData.age,
        emailAdress: studentData.emailAdress,
        address: studentData.address,
        whatsApp: studentData.whatsApp,
        course: studentData.course,
        status: studentData.status,
      })),
    },
    revalidate: 1,
  };
}
export default Exam;

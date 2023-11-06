import { MongoClient } from "mongodb";
import BodyHeader from "@/components/ui/BodyHeader";
import StudentList from "@/components/studentsItem/StudentsList";
function Admin(props) {
  return (
    <>
      <BodyHeader title="Students Deatail " />
      <StudentList data={props.studentsData} />
    </>
  );
}

export async function getStaticProps() {
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

export default Admin;

import { MongoClient } from "mongodb";
import Head from "next/head";
import BodyHeader from "@/components/ui/BodyHeader";
import StudentList from "@/components/studentsItem/StudentsList";
function Admin(props) {
  return (
    <>
      <Head>
        <title>Gammal Tech Admin</title>
        <meta name="description" content="gammal tech admin" />
      </Head>
      <BodyHeader title="Students Details " />
      <StudentList data={props.studentsData} />
    </>
  );
}

export async function getServerSideProps(context) {
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
        emailAddress: studentData.emailAddress,
        address: studentData.address,
        whatsApp: studentData.whatsApp,
        course: studentData.course,
        status: studentData.status,
      })),
    },
  };
}

export default Admin;

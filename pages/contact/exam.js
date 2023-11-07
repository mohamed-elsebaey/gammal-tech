import Head from "next/head";
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
      <Head>
        <title>Form Data</title>
        <meta
          name="description"
          content="gammal tech form data"
        />
      </Head>
      <ExamForm onAddStudent={addStudentHandler} />
    </>
  );
}

//this code is executed during the build process
export async function getStaticProps() {
  //fetch data from an api / data base
  // check date
  return {
    props: {
      state: 1,
    },
    revalidate: 1,
  };
}
export default Exam;

import Head from "next/head";
import BodyHeader from "../../components/ui/BodyHeader";
import ContactDetail from "@/components/ContactDetail/ContactDetail";
import Button from "@/components/ui/Button";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="gammal tech Contact"
        />
      </Head>
      <BodyHeader title="Contact Us" />
      <ContactDetail />
      <Button href="/contact/exam">Gammal Tech Exam</Button>
    </>
  );
}
export default Contact;

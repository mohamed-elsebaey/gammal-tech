import BodyHeader from "../../components/ui/BodyHeader";
import ContactDetail from "@/components/ContactDetail/ContactDetail";
import Button from "@/components/ui/Button";

function Contact() {
  return (
    <>
      <BodyHeader title="Contact Us" />
      <ContactDetail />
      <Button href='/contact/exam'>Gammal Tech Exam</Button>
    </>
  );
}
export default Contact;

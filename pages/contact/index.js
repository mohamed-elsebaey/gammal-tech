import Layout from "@/components/layout/Layout";
import BodyHeader from "../../components/ui/BodyHeader";
import ContactDetail from "@/components/ContactDetail/ContactDetail";
import Link from "next/link";
function Contact() {
  return (
    <Layout>
      <BodyHeader title="Contact Us" />
      <ContactDetail />
      <div>
        <Link href="/contact/exam">exam</Link>
      </div>
    </Layout>
  );
}
export default Contact;

import Head from "next/head";
import BodyHeader from "../../components/ui/BodyHeader";
function Account() {
  return (
    <>
      <Head>
        <title>My Account</title>
        <meta name="description" content="gammal tech users account" />
      </Head>
      <BodyHeader title="Account Details" />;
    </>
  );
}
export default Account;

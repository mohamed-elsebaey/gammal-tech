import Head from "next/head";
import Button from "@/components/ui/Button";
function Premium() {
  return (
    <>
      <Head>
        <title>Gammal Tech</title>
        <meta
          name="description"
          content="gammal tech is the best website to learn programming"
        />
      </Head>
      <Button href="/admin">Admin</Button>
      <img
        src="https://assets-global.website-files.com/5d2cb3382be6ba1741dc013c/64e100abd99932dd7f929a90_Light%20Ppl%203.webp"
        style={{ width: "100%", height: "100%", marginTop: "20px" }}
      />
    </>
  );
}
export default Premium;

import classes from "./ContactDetail.module.css";

function ContactDetail() {
  return (
    <div className={classes.standardDiv}>
      <p className={classes.contactText}>
        Phone: <strong>+201033998844</strong>‍<br />‍<br />
        WhatsApp: <strong>+201033998844</strong>
        <br />‍
        <br />
        Email:{" "}
        <strong>
          info@gammal.tech
          <br />
          <br />
        </strong>
        Working hours:
        <strong>
          <br />
        </strong>
        From Sunday to Thursday, 9 AM to 5 PM GMT+2
        <br />
        <br />
        Headquarters: 44 Tout Ankh Amoun St., Alexandria, Egypt<br></br>
      </p>
    </div>
  );
}
export default ContactDetail;

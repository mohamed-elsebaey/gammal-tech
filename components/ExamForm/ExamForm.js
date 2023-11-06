import { useRouter } from "next/router";
import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./ExamForm.module.css";

function ExamForm(props) {
  const router = useRouter();

  const fullNameInputRef = useRef();
  const emailAddressInputRef = useRef();
  const ageInputRef = useRef();
  const addressInputRef = useRef();
  const phoneInputRef = useRef();
  const whatsAppInputRef = useRef();

  const sourceSelectedRef = useRef();
  const statusSelectedRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredFullName = fullNameInputRef.current.value;
    const enteredEmailAddress = emailAddressInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredWhatsApp = whatsAppInputRef.current.value;
    const enteredCourse = sourceSelectedRef.current.value;
    const enteredStatus = statusSelectedRef.current.value;

    const studentData = {
      id: enteredPhone,
      fullName: enteredFullName,
      emailAddress: enteredEmailAddress,
      age: enteredAge,
      address: enteredAddress,
      phone: enteredPhone,
      whatsApp: enteredWhatsApp,
      course: enteredCourse,
      status: enteredStatus,
    };

    props.onAddStudent(studentData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            required
            id="fullName"
            ref={fullNameInputRef}
            placeholder="Enter your full name"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            ref={emailAddressInputRef}
            placeholder="Enter your Email Adress"
          />
        </div>
        <div className={classes.items}>
          <div className={classes.control}>
            <label htmlFor="phone">phone number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              ref={phoneInputRef}
              placeholder="+201*********"
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="whatsApp">WhatsApp number:</label>
            <input
              type="tel"
              id="whatsApp"
              name="whatsApp"
              placeholder="+201*********"
              required
              ref={whatsAppInputRef}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="Age:">Age:</label>
            <input
              min="10"
              max="60"
              type="number"
              required
              id="age"
              ref={ageInputRef}
              placeholder="Enter your Age:"
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="courses">Select The Course:</label>
          <select
            id="select-course"
            name="select-course"
            ref={sourceSelectedRef}
          >
            <option value="c-programming">C Programming</option>
            <option value="cpp-programming">C++ Programming</option>
            <option value="data-structures">Data Structures</option>
            <option value="algorithms">Algorithms</option>
            <option value="oop">OOP</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="status">Status:</label>
          <select id="exam-status" name="exam-status" ref={statusSelectedRef}>
            <option value="first-time">First time</option>
            <option value="redo1">Redo 1</option>
            <option value="redo2">Redo 2</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="address:">Address</label>
          <input
            type="text"
            required
            id="address"
            placeholder="City / Governorate"
            ref={addressInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Send</button>
        </div>
      </form>
    </Card>
  );
}

export default ExamForm;

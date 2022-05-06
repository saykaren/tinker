import React, { useState } from "react";
import axios from "axios";

const API_PATH = "http://localhost:8080/tinker/api/contact/index.php";

const ContactForm = () => {
  const [contactUser, setContactUser] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
    mailSent: false,
    error: null,
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log({ contactUser });
    axios({
      method: "post",
      mode: "no-cors",
      url: `${API_PATH}`,
      headers: { "content-type": "application/json" },
      data: contactUser,
    })
      .then((result) => {
        setContactUser({
          ...contactUser,
          mailSent: result.data.sent,
        });
      })
      .catch((error) =>
        setContactUser({ ...contactUser, error: error.message })
      );
  };

  return (
    <>
      <p>Contact Me</p>
      <div>
        <form action="/action_page.php">
          <label>First Name: {contactUser.fname}</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
            value={contactUser.fname}
            onChange={(e) =>
              setContactUser({ ...contactUser, fname: e.target.value })
            }
          />
          <label>Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
            value={contactUser.lname}
            onChange={(e) =>
              setContactUser({ ...contactUser, lname: e.target.value })
            }
          />

          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={contactUser.email}
            onChange={(e) =>
              setContactUser({ ...contactUser, email: e.target.value })
            }
          />

          <label>Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            value={contactUser.message}
            onChange={(e) =>
              setContactUser({ ...contactUser, message: e.target.value })
            }
          ></textarea>
          <input
            type="submit"
            value="Submit"
            onClick={(e) => handleFormSubmit(e)}
          />
          <div>
            {contactUser.mailSent && <div>Thank you for contacting us</div>}
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

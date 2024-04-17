import { useEffect, useState } from "react";
import { send } from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  // Questions, Work Opportunities, Connecting, Other
  const [subject, setSubject] = useState("Questions");
  // LOADING, ERROR, SUCCESS
  const [status, setStatus] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubject = (selectedButton) => {
    setSubject(selectedButton);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitBtn = document.querySelector(".contact-submit-btn");
    submitBtn.innerHTML = "Sending...";
    submitBtn.disabled = true;

    send(
      // Enter your service ID, template ID, and user ID
      'service_df015mc',
      'template_w7u2kcm',
      {
        from_name: `${firstName} ${surname}`,
        from_email:`${email}`,
        to_name: "karshvarth2112@gmail.com",
        subject,
        message,
        reply_to: email,
      },
      'PM-LIY06f3R-7xTW4'
    )
      .then(() => {
        submitBtn.innerHTML = "Sent!";
      })
      .catch(() => {
        submitBtn.innerHTML = "Something went wrong!";
      });
  };

  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);
  });
  // const handleMailTo = () => {
  //   const subject = encodeURIComponent("Your subject here");
  //   const body = encodeURIComponent("Your message here");
  //   window.location.href = `mailto:karshvarth2112@gmail.com?subject=${subject}&body=${body}`;
  // };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <div className="contact-form">
        <form
          className="contact-form-container"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="contact-info">
            <div className="contact-name">
              <div className="contact-form-input">
                <label htmlFor="fname">First Name</label>
                <input
                  id="fname"
                  type="text"
                  placeholder="Enter your first name"
                  name="name"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="contact-form-input">
                <label htmlFor="lname">Last Name</label>
                <input
                  id="lname"
                  type="text"
                  placeholder="Enter your last name"
                  name="surname"
                  onChange={(e) => setSurname(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="contact-form-input">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email" // changed type to email
                placeholder="Enter your email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="contact-form-subject">
              <p>I&apos;m contacting you for...</p>
              <div className="subject-btns">
                <button
                  type="button"
                  onClick={() => handleSubject("Questions")}
                  className={`${subject === "Questions" ? "active-btn" : ""}`}
                >
                  Questions
                </button>
                <button
                  type="button"
                  onClick={() => handleSubject("Work Opportunities")}
                  className={`${
                    subject === "Work Opportunities" ? "active-btn" : ""
                  }`}
                >
                  Work Opportunities
                </button>
                <button
                  type="button"
                  onClick={() => handleSubject("Connecting")}
                  className={`${subject === "Connecting" ? "active-btn" : ""}`}
                >
                  Connecting
                </button>
                <button
                  type="button"
                  onClick={() => handleSubject("Other")}
                  className={`${subject === "Other" ? "active-btn" : ""}`}
                >
                  Other
                </button>
              </div>
            </div>
          </div>
          <div className="contact-msg">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              cols="50"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button className="contact-submit-btn" type="submit" >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

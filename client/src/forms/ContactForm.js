import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://hooks.zapier.com/hooks/catch/7360337/o5p1bnc/`, {
      method: "POST",
      body: JSON.stringify({ email, message, name }),
    })
      .then(() => setIsSent(true))
      .catch(() => alert("There was an error, please try again"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">NAME</label>
      <input
        label="Name"
        required
        name="name"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="email">EMAIL</label>
      <input
        label="Email"
        required
        name="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="message">MESSAGE</label>
      <textarea
        label="Message"
        required
        name="message"
        value={message}
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      {isSent && <p>Your email has been sent. Thank you.</p>}
      <button onClick={() => setIsSent(!isSent)} type="submit">
        SEND
      </button>
    </form>
  );
};

export default ContactForm;

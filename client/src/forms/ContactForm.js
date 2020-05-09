import React, { useState } from "react";
import "../styles/Form.css";

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

  const isEnabled = name.length > 0 && email.length > 0 && message.length > 1;

  return (
    
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        label="Name"
        required
        name="name"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
      type='text'
        label="Email"
        required
        name="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <textarea
      type='textarea'
        label="Message"
        required
        name="message"
        value={message}
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      {isSent && <p style={styles.p2}>Your message was sent. Thank you.</p>}
      <button disabled={!isEnabled} className="button" onClick={() => setIsSent(!isSent)} type="submit">
        SEND
      </button>
    </form>
  );
};

export default ContactForm;

const styles = {
  p2: {
    color: "#ADADAD",
  },
}
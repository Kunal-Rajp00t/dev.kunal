import React, { useState } from 'react'
import './contact.css'

const Contact = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (name && email && contact && msg) {
  //     console.log("Name:", name);
  //     console.log("Contact:", contact);
  //     console.log("Email:", email);
  //     console.log("Message:", msg);

  //     setName("");
  //     setContact("");
  //     setEmail("");
  //     setMsg("");
  //     // alert("Message Sent Successfully");
  //   } else {
  //     alert("Please ensure that all details are correct.");
  //   }
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name && email && contact && msg) {
      const formData = {
        access_key: "23710d40-aeeb-41de-bbf0-49e1507174cc",
        name: name,
        contact: contact,
        email: email,
        msg: msg,
      };

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          // Reset form fields
          setName("");
          setContact("");
          setEmail("");
          setMsg("");
          alert("Message Sent Successfully");
        } else {
          alert("Failed to send message. Please try again.");
        }
      } catch (error) {
        alert("An error occurred. Please try again.");
      }
    } else {
      alert("Please ensure that all details are correct.");
    }
  }
  return (
    <div id='contact'>
      <div className="mainContact">
        <div className="contactHeader">
          <h1>CONTACT ME</h1><div className="under"></div>
          <h3> Feel free to contact me with your project ideas or collaboration offers. I will get back to you as soon as possible! </h3>
        </div>
        <div className="contactBox">
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value="23710d40-aeeb-41de-bbf0-49e1507174cc" />

            <input type="text" placeholder="Full Name" id="first_name" required name='name'
              onChange={(e) => { setName(e.target.value) }} value={name} 
            />

            <input type="text" placeholder="Contact Number" id="contact_no"
              onChange={(e) => { setContact(e.target.value) }} value={contact}
               />

            <input type="email" placeholder="E-Mail" id="email" required name='email'
              onChange={(e) => { setEmail(e.target.value) }} value={email}
               />

            <textarea placeholder="Your Message Here" id="message" name='msg' required
              onChange={(e) => { setMsg(e.target.value) }} value={msg}
              ></textarea>

            <button id="submit" type="submit">SUBMIT <i className="fa-solid fa-arrow-right"></i></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

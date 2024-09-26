import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export const InputSection = () => {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const handleClick = () => {
    let isValid = true;

    
    if (name.trim() === "") {
      nameRef.current.style.border = "1px solid hsl(354, 84%, 57%)";
      isValid = false;
    } else {
      nameRef.current.style.border = ""; // Reset the border style
    }


    if (email.trim() === "") {
      emailRef.current.style.border = "1px solid hsl(354, 84%, 57%)";
      isValid = false;
    } else {
      emailRef.current.style.border = ""; // Reset the border style
    }

    // Check phone number
    if (phonenumber.trim() === "") {
      phoneRef.current.style.border = "1px solid hsl(354, 84%, 57%)";
      isValid = false;
    } else {
      phoneRef.current.style.border = ""; // Reset the border style
    }

    // Navigate only if all inputs are valid
    if (isValid) {
      navigate("/step2");
    }
  };

  return (
    <>
      <section className="step1-wrapper">
        <header className="header">
          <h2 id="header-h1">Personal info</h2>
          <p id="header-para">
            Please provide your name, email address, and phone number
          </p>
        </header>
        <form action="" className="form">
          <label htmlFor="username">Name</label>
          <input
            type="text"
            className="input"
            name="username"
            placeholder="e.g Stephen King"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={nameRef}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="e.g stephenking@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
          />

          <label htmlFor="phonenumber">Phone Number</label>
          <input
            type="number"
            className="input"
            name="phonenumber"
            placeholder="e.g +1 234 567 890"
            required
            value={phonenumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            ref={phoneRef}
          />
        </form>
      </section>

      <footer className="btn-wrapper">
        <button className="form-btn" onClick={handleClick}>
          Next Step
        </button>
      </footer>
    </>
  );
};

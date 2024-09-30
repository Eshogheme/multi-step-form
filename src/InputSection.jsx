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
  const [nameErrorMessage,setNameErrorMessage] = useState("")
  const [ emailErrorMessage,setEmailErrorMessage] = useState('')
  const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState('');

  const handleClick = () => {
    let isValid = true;

    
    if (name.trim() === "") {
      nameRef.current.style.border = "1px solid hsl(354, 84%, 57%)";
      isValid = false;
      setNameErrorMessage('This field is required');
    } else {
      nameRef.current.style.border = ""; 
      setNameErrorMessage('');
    }


    if (email.trim() === "") {
      emailRef.current.style.border = "1px solid hsl(354, 84%, 57%)";
      isValid = false;
      setEmailErrorMessage('This field is required')
    } else {
      emailRef.current.style.border = ""; 
      setEmailErrorMessage('')
    }

  
    if (phonenumber.trim() === "" || phonenumber.length !== 11) {
      phoneRef.current.style.border = "1px solid hsl(354, 84%, 57%)";
      isValid = false;
      setPhoneNumberErrorMessage('This field is required')
    } else {
      phoneRef.current.style.border = ""; 
      setPhoneNumberErrorMessage('')
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
             {nameErrorMessage && <span className="error-messages">{nameErrorMessage}</span>}

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
             {emailErrorMessage && <span className="error-messages">{emailErrorMessage}</span>}

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
         {phoneNumberErrorMessage && <span className="error-messages">{phoneNumberErrorMessage}</span>}

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

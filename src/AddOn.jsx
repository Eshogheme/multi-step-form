import React, { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export const AddOn = () => {
  const navigate = useNavigate();
  const onlineRef = useRef(null);
  const largerRef = useRef(null);
  const customizableRef = useRef(null);
  const onlineMontlyPriceRef = useRef(null);
  const largerMontlyPriceRef = useRef(null);
  const customizeMonthlyPriceRef = useRef(null);
  // Separate states for each checkbox
  const [isOnlineActive, setIsOnlineActive] = useState(false);
  const [isLargerActive, setIsLargerActive] = useState(false);
  const [isCustomizableActive, setIsCustomizableActive] = useState(false);

  const goBackToTwo = () => {
    navigate("/step2");
  };

  const handleCheckboxChange = (addOnType) => {
    if (addOnType === "online") {
      setIsOnlineActive(!isOnlineActive);
      if (!isOnlineActive) {
        onlineRef.current.style.border = "1px solid hsl(243, 100%, 62%)";
        onlineRef.current.style.backgroundColor = "hsl(231, 100%, 99%)";
        console.log( onlineMontlyPriceRef.current.textContent)
      } else {
        onlineRef.current.style.border = "1px solid hsl(229, 24%, 87%)";
        onlineRef.current.style.backgroundColor = "white";
      }
    }

    if (addOnType === "larger") {
      setIsLargerActive(!isLargerActive);
      if (!isLargerActive) {
        largerRef.current.style.border = "1px solid hsl(243, 100%, 62%)";
        largerRef.current.style.backgroundColor = "hsl(231, 100%, 99%)";
        console.log(largerMontlyPriceRef.current.textContent)
      } else {
        largerRef.current.style.border = "1px solid hsl(229, 24%, 87%)";
        largerRef.current.style.backgroundColor = "white";
      }
    }

    if (addOnType === "customize") {
      setIsCustomizableActive(!isCustomizableActive);
      if (!isCustomizableActive) {
        customizableRef.current.style.border = "1px solid hsl(243, 100%, 62%)";
        customizableRef.current.style.backgroundColor = "hsl(231, 100%, 99%)";
        console.log(customizeMonthlyPriceRef.current.textContent)
      } else {
        customizableRef.current.style.border = "1px solid hsl(229, 24%, 87%)";
        customizableRef.current.style.backgroundColor = "white";
      }
    }
  };

  return (
    <>
      <section className="step3-wrapper">
        <header>
          <h2>Pick add-ons</h2>
          <p className="step3-header-para">
            Add-ons help enhance your gaming experience.
          </p>
        </header>

        <section>
          <div className="add-on-wrapper" ref={onlineRef}>
            <input
              type="checkbox"
              className="check-box"
              checked={isOnlineActive}
              onChange={() => handleCheckboxChange("online")}
            />
            <div className="add-on-header-para">
              <h4>Online service</h4>
              <p className="add-on-para">Access to multiplayer games</p>
            </div>
            <div 
            className="add-on-amount"
            ref={onlineMontlyPriceRef}
            >+$1/mo</div>
          </div>

          <div className="add-on-wrapper" ref={largerRef}>
            <input
              type="checkbox"
              className="check-box"
              checked={isLargerActive}
              onChange={() => handleCheckboxChange("larger")}
            />
            <div className="add-on-header-para">
              <h4>Larger storage</h4>
              <p className="add-on-para">Extra 1TB of cloud save</p>
            </div>
            <div 
            className="add-on-amount"
            ref={largerMontlyPriceRef}
            >+$2/mo</div>
          </div>

          <div className="add-on-wrapper" ref={customizableRef}>
            <input
              type="checkbox"
              className="check-box"
              checked={isCustomizableActive}
              onChange={() => handleCheckboxChange("customize")}
            />
            <div className="add-on-header-para">
              <h4>Customizable profile</h4>
              <p className="add-on-para">Custom theme on your profile</p>
            </div>
            <div 
            className="add-on-amount"
            ref={customizeMonthlyPriceRef}
            >+$2/mo</div>
          </div>
        </section>
      </section>

      <footer className="step3btn-wrapper">
        <button className="goback-btn" onClick={goBackToTwo}>
          Go Back
        </button>
        <button className="form-btn">Next Step</button>
      </footer>
    </>
  );
};

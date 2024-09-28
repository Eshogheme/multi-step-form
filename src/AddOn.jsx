import React, { useRef, useContext, useState } from "react";
import { PricingContext } from "./PricingContext";
import { useNavigate } from "react-router-dom";
import "./App.css";

export const AddOn = () => {
  const navigate = useNavigate();
  const { isYearlyActive, toggleAddOn, selectedAddOns } = useContext(PricingContext);
  
  // Refs for each add-on section
  const onlineRef = useRef(null);
  const largerRef = useRef(null);
  const customizableRef = useRef(null);

  // States to manage individual active add-ons for UI
  const [isOnlineActive, setIsOnlineActive] = useState(false);
  const [isLargerActive, setIsLargerActive] = useState(false);
  const [isCustomizableActive, setIsCustomizableActive] = useState(false);

  // Navigate between steps
  const goBackToTwo = () => {
    navigate("/step2");
  };

  const goToFour = () => {
    navigate("/step4");
  };

  // Function to handle toggling the UI state and context add-on state
  const handleCheckboxChange = (addOnType) => {
    toggleAddOn(addOnType);  // Update global state for selectedAddOns
    const isActive = selectedAddOns.includes(addOnType);

    if (addOnType === "online") {
      setIsOnlineActive(!isOnlineActive);
      onlineRef.current.style.border = !isActive
        ? "1px solid hsl(243, 100%, 62%)"
        : "1px solid hsl(229, 24%, 87%)";
      onlineRef.current.style.backgroundColor = !isActive
        ? "hsl(231, 100%, 99%)"
        : "white";
    }

    if (addOnType === "larger") {
      setIsLargerActive(!isLargerActive);
      largerRef.current.style.border = !isActive
        ? "1px solid hsl(243, 100%, 62%)"
        : "1px solid hsl(229, 24%, 87%)";
      largerRef.current.style.backgroundColor = !isActive
        ? "hsl(231, 100%, 99%)"
        : "white";
    }

    if (addOnType === "customize") {
      setIsCustomizableActive(!isCustomizableActive);
      customizableRef.current.style.border = !isActive
        ? "1px solid hsl(243, 100%, 62%)"
        : "1px solid hsl(229, 24%, 87%)";
      customizableRef.current.style.backgroundColor = !isActive
        ? "hsl(231, 100%, 99%)"
        : "white";
    }
  };

  return (
    <>
      <section className="step3-wrapper">
        <header className="header">
          <h2>Pick add-ons</h2>
          <p className="step3-header-para">Add-ons help enhance your gaming experience.</p>
        </header>

        <section>
          
          <div className="add-on-wrapper" ref={onlineRef}>
            <input
              type="checkbox"
              className="check-box"
              checked={selectedAddOns.includes("online")}
              onChange={() => handleCheckboxChange("online")}
            />
            <div className="add-on-header-para">
              <h4>Online service</h4>
              <p className="add-on-para">Access to multiplayer games</p>
            </div>
            <div
              className="add-on-amount"
              style={{ display: isYearlyActive ? "none" : "block" }}
            >
              +$1/mo
            </div>
            <div
              className="add-on-amount-yearly"
              style={{ display: isYearlyActive ? "block" : "none" }}
            >
              +$10/yr
            </div>
          </div>

        
          <div className="add-on-wrapper" ref={largerRef}>
            <input
              type="checkbox"
              className="check-box"
              checked={selectedAddOns.includes("larger")}
              onChange={() => handleCheckboxChange("larger")}
            />
            <div className="add-on-header-para">
              <h4>Larger storage</h4>
              <p className="add-on-para">Extra 1TB of cloud save</p>
            </div>
            <div
              className="add-on-amount"
              style={{ display: isYearlyActive ? "none" : "block" }}
            >
              +$2/mo
            </div>
            <div
              className="add-on-amount-yearly"
              style={{ display: isYearlyActive ? "block" : "none" }}
            >
              +$20/yr
            </div>
          </div>

         
          <div className="add-on-wrapper" ref={customizableRef}>
            <input
              type="checkbox"
              className="check-box"
              checked={selectedAddOns.includes("customize")}
              onChange={() => handleCheckboxChange("customize")}
            />
            <div className="add-on-header-para">
              <h4>Customizable profile</h4>
              <p className="add-on-para">Custom theme on your profile</p>
            </div>
            <div
              className="add-on-amount"
              style={{ display: isYearlyActive ? "none" : "block" }}
            >
              +$2/mo
            </div>
            <div
              className="add-on-amount-yearly"
              style={{ display: isYearlyActive ? "block" : "none" }}
            >
              +$20/yr
            </div>
          </div>
        </section>
      </section>

      <footer className="step3btn-wrapper">
        <button className="goback-btn" onClick={goBackToTwo}>
          Go Back
        </button>
        <button className="form-btn form-btn-step2" onClick={goToFour}>
          Next Step
        </button>
      </footer>
    </>
  );
};

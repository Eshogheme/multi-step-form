import React, { useRef, useContext, useState } from "react";
import { PricingContext } from "./PricingContext";
import { useNavigate } from "react-router-dom";
import "./App.css";

export const AddOn = () => {
  const navigate = useNavigate();
  const { isYearlyActive } = useContext(PricingContext);
  const onlineRef = useRef(null);
  const largerRef = useRef(null);
  const customizableRef = useRef(null);
  const onlineMontlyPriceRef = useRef(null);
  const largerMontlyPriceRef = useRef(null);
  const customizeMonthlyPriceRef = useRef(null);
  const onlineYearlyPriceRef = useRef(null);
  const largerYearlyPriceRef = useRef(null);
  const customizeYearlyPriceRef = useRef(null);

  const [isOnlineActive, setIsOnlineActive] = useState(false);
  const [isLargerActive, setIsLargerActive] = useState(false);
  const [isCustomizableActive, setIsCustomizableActive] = useState(false);

  const goBackToTwo = () => {
    navigate("/step2");
  };

  const goToFour = ()=>{
    navigate("/step4")
  }
  const handleCheckboxChange = (addOnType) => {
    let yearlyPrice = "";

    if (addOnType === "online") {
      setIsOnlineActive(!isOnlineActive);
      yearlyPrice = isYearlyActive
        ? onlineYearlyPriceRef.current.textContent
        : onlineMontlyPriceRef.current.textContent;
      onlineRef.current.style.border = !isOnlineActive
        ? "1px solid hsl(243, 100%, 62%)"
        : "1px solid hsl(229, 24%, 87%)";
      onlineRef.current.style.backgroundColor = !isOnlineActive
        ? "hsl(231, 100%, 99%)"
        : "white";
    }

    if (addOnType === "larger") {
      setIsLargerActive(!isLargerActive);
      yearlyPrice = isYearlyActive
        ? largerYearlyPriceRef.current.textContent
        : largerMontlyPriceRef.current.textContent;
      largerRef.current.style.border = !isLargerActive
        ? "1px solid hsl(243, 100%, 62%)"
        : "1px solid hsl(229, 24%, 87%)";
      largerRef.current.style.backgroundColor = !isLargerActive
        ? "hsl(231, 100%, 99%)"
        : "white";
    }

    if (addOnType === "customize") {
      setIsCustomizableActive(!isCustomizableActive);
      yearlyPrice = isYearlyActive
        ? customizeYearlyPriceRef.current.textContent
        : customizeMonthlyPriceRef.current.textContent;
      customizableRef.current.style.border = !isCustomizableActive
        ? "1px solid hsl(243, 100%, 62%)"
        : "1px solid hsl(229, 24%, 87%)";
      customizableRef.current.style.backgroundColor = !isCustomizableActive
        ? "hsl(231, 100%, 99%)"
        : "white";
    }
    isYearlyActive ? console.log(yearlyPrice) : console.log(yearlyPrice);
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
              style={{ display: isYearlyActive ? "none" : "block" }}
            >
              +$1/mo
            </div>
            <div
              className="add-on-amount-yearly"
              ref={onlineYearlyPriceRef}
              style={{ display: isYearlyActive ? "block" : "none" }}
            >
              +$10/yr
            </div>
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
              style={{ display: isYearlyActive ? "none" : "block" }}
            >
              +$2/mo
            </div>
            <div>
              <p
                className="add-on-amount-yearly"
                ref={largerYearlyPriceRef}
                style={{ display: isYearlyActive ? "block" : "none" }}
              >
                +$20/yr
              </p>
            </div>
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
              style={{ display: isYearlyActive ? "none" : "block" }}
            >
              +$2/mo
            </div>

            <div>
              <p
                className="add-on-amount-yearly"
                ref={customizeYearlyPriceRef}
                style={{ display: isYearlyActive ? "block" : "none" }}
              >
                +$20/yr
              </p>
            </div>
          </div>
        </section>
      </section>

      <footer className="step3btn-wrapper">
        <button className="goback-btn" onClick={goBackToTwo}>
          Go Back
        </button>
        <button className="form-btn" onClick={goToFour}>Next Step</button>
      </footer>
    </>
  );
};

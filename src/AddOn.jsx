import React, { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export const AddOn = () => {
  const navigate = useNavigate();
  const addOnWrapperRef = useRef()
  const onlineRef = useRef(null);
  const largerRef = useRef(null);
  const customizableRef = useRef(null);
  const [isactive, setIsActive] = useState(false)


  const goBackToTwo = () => {
    navigate("/step2");
  };

const checkbox= ()=>{
setIsActive(!isactive);
if(addOnWrapperRef.current){
    onlineRef.current.style.border = "1px solid hsl(243, 100%, 62%)";
}
}


  return (
    <>
      <section className="step3-wrapper">
        <header>
          <h2>Pick add-ons</h2>
          <p className="step3-header-para">Add-ons help enhance your gaming experience.</p>
        </header>

        <section>
          <div 
          className="add-on-wrapper"
          ref={addOnWrapperRef}
          >
            <input 
            type="checkbox" 
            className="check-box"
            checked={isactive}
            onChange={checkbox}
            ref={onlineRef}
            />
            <div className="add-on-header-para">
              <h4>Online service</h4>
              <p className="add-on-para">Access to multiplayer games</p>
            </div>
            <div className="add-on-amount">+$1/mo</div>
          </div>


          <div className="add-on-wrapper">
            <input 
            type="checkbox" 
            className="check-box"
            
            />
            <div className="add-on-header-para">
              <h4>Larger storage</h4>
              <p className="add-on-para">Extra 1TB of cloud save</p>
            </div>
            <div className="add-on-amount">+$2/mo</div>
          </div>

          <div className="add-on-wrapper">
            <input type="checkbox" className="check-box"/>
            <div className="add-on-header-para">
              <h4>Customizable profit</h4>
              <p className="add-on-para">Custom theme on your profile</p>
            </div>
            <div className="add-on-amount">+$2/mo</div>
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

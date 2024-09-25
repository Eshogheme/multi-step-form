import React, { useContext } from "react";
import { PricingContext } from "./PricingContext";
import { useNavigate } from "react-router-dom";
import "./App.css";


export const FinishingUpSection = ()=>{
const navigate = useNavigate();

const goBackToThree = () => {
    navigate("/step3");
  };

  const {selectedPlan}= useContext(PricingContext);
  const { isYearlyActive } = useContext(PricingContext);
    return(
        <>
        <section className="step4-wrapper">
        <header>
          <h2>Finishing up</h2>
          <p className="step4-header-para">
            Double-check everything looks OK before confirming
          </p>
        </header>

        <section className="main-info-wrapper">
            <div>
              <span className="selected-plan">{selectedPlan} {isYearlyActive ? "(yearly)" : "(monthly)"}</span> 
            </div>
           
        </section>








        </section>
        
        <footer className="step4btn-wrapper">
        <button className="goback-btn" onClick={goBackToThree}>
          Go Back
        </button>
        <button className="form-btn">Confirm</button>
      </footer>
        
        </>
    )
}
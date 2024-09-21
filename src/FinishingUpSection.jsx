import React from "react";
import { useNavigate } from "react-router-dom";


export const FinishingUpSection = ()=>{
const navigate = useNavigate();

const goBackToThree = () => {
    navigate("/step3");
  };

    return(
        <>
        <section className="step4-wrapper">
        <header>
          <h2>Finishing up</h2>
          <p className="step4-header-para">
            Double-check everything looks OK before confirming
          </p>
        </header>

        <section>
            
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
import React, { useContext } from "react";
import { PricingContext } from "./PricingContext";
import { useNavigate, Link } from "react-router-dom";
import "./App.css";


export const FinishingUpSection = ()=>{
const navigate = useNavigate();

const goBackToThree = () => {
    navigate("/step3");
  };

  const goToFive = () => {
    navigate("/step5");
  };

  const {selectedPlan}= useContext(PricingContext);
  const { isYearlyActive,planPrices, selectedAddOns, addOnPrices } = useContext(PricingContext);

  const selectedPrice = isYearlyActive 
  ? planPrices[selectedPlan].yearly 
  : planPrices[selectedPlan].monthly;

 const totalAddOnPrice = selectedAddOns.reduce((total, addOn) => {
  const price = isYearlyActive ? addOnPrices[addOn].yearly : addOnPrices[addOn].monthly;
  return total + parseFloat(price.replace(/[^\d.-]/g, '')); 
}, 0);


const totalPlanPriceValue = parseFloat(selectedPrice.replace(/[^\d.-]/g, ''));

const finalTotal = totalPlanPriceValue + totalAddOnPrice;

const formattedAddOnPrice = isYearlyActive 
  ? `+$${totalAddOnPrice}/yr`
  : `+$${totalAddOnPrice}/mo`;

const formattedFinalTotal = isYearlyActive 
  ? `$${finalTotal}/yr`
  : `$${finalTotal}/mo`;


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
            <div className="selected-plan-price-wrapper">
              <span className="selected-plan">{selectedPlan}{isYearlyActive ? "(yearly)" : "(monthly)"}</span> 
              <p className="selected-price">{selectedPrice}</p>
            </div>
            <Link to="/step2" className="change-link"> 
          Change
        </Link>

        <hr className="line"/>

        <div className="selected-add-ons">
            
            {selectedAddOns.length > 0 ? (
              selectedAddOns.map((addOn) => (
                <p key={addOn} className="selected-add-on">
                  {addOn.charAt(0).toUpperCase() + addOn.slice(1)} 
                  <span className="checked-prices">{isYearlyActive ? addOnPrices[addOn].yearly : addOnPrices[addOn].monthly}</span>
                </p>
              ))
            ) : (
              <p>No add-ons selected.</p>
            )}
          </div>
        </section>
        <div className="final-total-price">
          <p>
            Total 
           {isYearlyActive ? "(per year)" : "(per month)"}
            </p>
          <p> <span className="total-price">{formattedFinalTotal}</span></p>
        </div>
        </section>
        
        <footer className="step4btn-wrapper">
        <button className="goback-btn" onClick={goBackToThree}>
          Go Back
        </button>
        <button className="form-btn confirm"
        onClick={goToFive}
        >Confirm</button>
      </footer>
        
        </>
    )
}
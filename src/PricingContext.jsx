

import React, { createContext, useState } from "react";


export const PricingContext = createContext();


export const PricingProvider = ({ children }) => {
  const [isYearlyActive, setIsYearlyActive] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null)
 
  const togglePricing = () => {
    setIsYearlyActive((prev) => !prev);
  };

 

  return (
    <PricingContext.Provider value={{ isYearlyActive, togglePricing, selectedPlan, setSelectedPlan }}>
      {children}
    </PricingContext.Provider>
  );
};



import React, { createContext, useState } from "react";


export const PricingContext = createContext();


export const PricingProvider = ({ children }) => {
  const [isYearlyActive, setIsYearlyActive] = useState(false);

 
  const togglePricing = () => {
    setIsYearlyActive((prev) => !prev);
  };

  return (
    <PricingContext.Provider value={{ isYearlyActive, togglePricing }}>
      {children}
    </PricingContext.Provider>
  );
};

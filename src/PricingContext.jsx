import React, { createContext, useState } from 'react';

const PricingContext = createContext();

const PricingProvider = ({ children }) => {
  const [isYearlyActive, setIsYearlyActive] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Arcade");
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const togglePricing = () => {
    setIsYearlyActive(!isYearlyActive);
  };

  const toggleAddOn = (addOn) => {
    setSelectedAddOns(prev => {
      if (prev.includes(addOn)) {
        return prev.filter(item => item !== addOn);
      } else {
        return [...prev, addOn];
      }
    });
  };

  const planPrices = {
    Arcade: { monthly: "$9/mo", yearly: "$90/yr" },
    Advanced: { monthly: "$12/mo", yearly: "$120/yr" },
    Pro: { monthly: "$15/mo", yearly: "$150/yr" },
  };

  const addOnPrices = {
    online: { monthly: "+$1/mo", yearly: "+$10/yr" },
    larger: { monthly: "+$2/mo", yearly: "+$20/yr" },
    customize: { monthly: "+$2/mo", yearly: "+$20/yr" },
  };


  return (
    <PricingContext.Provider value={{ 
      isYearlyActive, 
      togglePricing, 
      selectedPlan, 
      setSelectedPlan, 
      planPrices, 
      selectedAddOns, 
      toggleAddOn,
      addOnPrices
    }}>
      {children}
    </PricingContext.Provider>
  );
};

export { PricingContext, PricingProvider };

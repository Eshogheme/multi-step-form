import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavSection } from "./NavSection";
import { InputSection } from "./InputSection";
import { PricingProvider } from "./PricingContext";
import { PlanSection } from "./PlanSection";
import { AddOn } from "./AddOn";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavSection />
        <PricingProvider>
          <Routes>
            <Route path="/" element={<InputSection />} />
            <Route path="/step2" element={<PlanSection />} />
            <Route path="/step3" element={<AddOn />} />
          </Routes>
        </PricingProvider>
      </Router>
    </>
  );
}


export default App;
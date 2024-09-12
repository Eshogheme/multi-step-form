import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavSection } from "./NavSection";
import { InputSection } from "./InputSection";
import { PlanSection } from "./PlanSection";
import "./App.css";

function App() {


  return (
    <>
      <Router>
      
      <NavSection />
        <Routes>
        <Route path="/" element={<InputSection />} /> 
        <Route path="/step2" element={<PlanSection />} />
        </Routes>
        
      </Router>
    </>
  );
}

export default App;

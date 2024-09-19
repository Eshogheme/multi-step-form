import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavSection } from "./NavSection";
import { InputSection } from "./InputSection";
import { PlanSection } from "./PlanSection";
import { AddOn } from "./AddOn";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavSection />
        <Routes>
          <Route path="/" element={<InputSection />} /> 
          <Route path="/step2" element={<PlanSection />} />
          <Route path = "/step3" element = {<AddOn />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
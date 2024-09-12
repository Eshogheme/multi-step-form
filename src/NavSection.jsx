import React from "react";
import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./App.css";

export const NavSection = () => {
  const location = useLocation();
  console.log(location.pathname);
  useEffect(() => {
    const firstLi = document.querySelector(".first-li");
    const secondLi = document.querySelector(".second-li");

    if (location.pathname === "/") {
      if (firstLi) firstLi.classList.add("active");
      if (secondLi) secondLi.classList.remove("active");
    } else if (location.pathname === "/step2") {
      if (secondLi) secondLi.classList.add("active");
      if (firstLi) firstLi.classList.remove("active");
    }
  }, [location]);

  return (
    <>
      <section className="links-ul-wrapper">
        <nav>
          <ul className="links-wrapper">
            <li className="links first-li" Link to='/'>1</li>
            <li className="links second-li">2</li>
            <li className="links">3</li>
            <li className="links">4</li>
            
          </ul>
        </nav>
      </section>
    </>
  );
};

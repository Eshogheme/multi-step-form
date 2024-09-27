import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./App.css";

export const NavSection = () => {
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    const firstLi = document.querySelector(".first-li");
    const secondLi = document.querySelector(".second-li");
    const thirdLi = document.querySelector(".third-li");
    const fourthLi = document.querySelector(".fourth-li");

    firstLi.classList.remove("active");
    secondLi.classList.remove("active");
    thirdLi.classList.remove("active");
    fourthLi.classList.remove("active");

    if (location.pathname === "/") {
      firstLi.classList.add("active");
    } else if (location.pathname === "/step2") {
      secondLi.classList.add("active");
    } else if (location.pathname === "/step3") {
      thirdLi.classList.add("active");
    } else if (location.pathname === "/step4") {
      fourthLi.classList.add("active");
    }
  }, [location]);

  return (
    <>
      <section className="links-ul-wrapper">
      <nav>
  <div className="links-container">
    <ul className="links-wrapper">
      <li className="links first-li">1</li>
      <li className="links second-li">2</li>
      <li className="links third-li">3</li>
      <li className="links fourth-li">4</li>
    </ul>

    <div className="steps-container">
      <div className="step-links-para">
        <p className="step-links-para1">STEP1</p>
        <p className="step-links-para2">YOUR INFO</p>
      </div>
      <div className="step-links-para">
        <p className="step-links-para1">STEP2</p>
        <p className="step-links-para2">SELECT PLAN</p>
      </div>
      <div className="step-links-para">
        <p className="step-links-para1">STEP3</p>
        <p className="step-links-para2">ADD-ONS</p>
      </div>
      <div className="step-links-para">
        <p className="step-links-para1">STEP4</p>
        <p className="step-links-para2">SUMMARY</p>
      </div>
    </div>
  </div>
</nav>


      </section>
    </>
  );
};

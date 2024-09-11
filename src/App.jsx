import { useState, useEffect } from "react";
import { InputSection } from "./InputSection";
import "./App.css";




function App() {
useEffect(()=>{
const firstLi= document.querySelector('.first-li');
if(firstLi){
  firstLi.classList.add("active");
  console.log("new color")
}

const form = document.querySelector('form')
const btn = document.querySelector("form-btn");
const handleClick = ()=>{
console.log(form)
}
if(btn){
  btn.addEventListener('click', handleClick);
}
}
,[])




  return (
    <>
   <section className="links-ul-wrapper">
    <ul className="links-wrapper">
      <li className="links first-li">1</li>
      <li className="links">2</li>
      <li className="links">3</li>
      <li className="links">4</li>
    </ul>
   </section>
    <InputSection />
    <footer className='btn-wrapper'>
    <button className='form-btn' >
        Next Step
      
        </button>
</footer>
  </>
);
}

export default App;

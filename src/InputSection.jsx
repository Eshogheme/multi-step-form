import React from 'react';
import {useState} from "react"
import "./App.css";



 export const InputSection = () =>{
 



return(
    <>
<section className="step1-wrapper">

    <header>
    <h2 id='header-h1'>
      Personal info
    </h2>

    <p id='header-para'>
      Please provide your name, email adderss, and phone number
    </p>
    </header>
<form action="" className='form'>
<label htmlFor="username">Name</label>
<input type="text" className="input" name="username" placeholder='e.g Stephen King' required/>

<label htmlFor="email"> Email</label>
<input type="email" className='input' name='email' placeholder='e.g stephenking@gmail.com' required/> 

<label htmlFor="phonenumber">Phone Number</label>
<input type="number" className='input' name='phonenumber' placeholder='e.g +1 234 567 890' required/>
</form>
</section>


</>
)
}


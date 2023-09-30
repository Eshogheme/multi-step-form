// This is where every element is defined
const step1 = document.querySelector(".step1");
const stepOneWrapper = document.querySelector(".step1-icon-wrapper");
const stepOneIconText = document.querySelector(".one");
const step2 = document.querySelector(".step2");
const btn1 = document.querySelector(".btn1");
const btn1Wrapper = document.querySelector(".button-wrap");
const btn2Wrapper = document.querySelector(".button2-wrap");
const stepTwoWrapper = document.querySelector(".step2-icon-wrapper");
const stepTwoIconText = document.querySelector(".two");
const goBackOne = document.querySelector(".go-back-to-one");
const arcadeWrapper = document.querySelector(".selected");
const advancedWrapper = document.querySelector(".advanced");
const proWrapper = document.querySelector(".pro");
const slider = document.querySelector(".slider");
const yearly = document.querySelector(".yearly");
const monthly = document.querySelector(".monthly");
const years = document.querySelector(".yr");
const secondText = document.querySelector(".step2-secondtext");
const thirdText = document.querySelector(".step2-thirdtext");
const ye = document.querySelector(".ye");
const bar = document.querySelector(".bar");
const drunk = document.querySelector(".drunk");
const ya = document.querySelector(".ya");
const past = document.querySelector(".past");
const future = document.querySelector(".future");
const btn2 = document.querySelector(".btn2");
const step3 = document.querySelector(".step3");
const btn3Wrapper = document.querySelector(".button3-wrap");
const stepThreeWrapper = document.querySelector(".step3-icon-wrapper");
const stepThreeIconText = document.querySelector(".three");
const goBackTwo = document.querySelector(".go-back-to-two");
// const checkBoxWrapper = document.querySelectorAll('.checkbox-wrapper');
const checkBoxInput = document.querySelectorAll(".checkbox-input");
const btn3 = document.querySelector(".btn3");
const step4 = document.querySelector(".step4");
const btn4Wrapper = document.querySelector(".button4-wrap");
const stepFourWrapper = document.querySelector(".step4-icon-wrapper");
const stepFourIconText = document.querySelector(".four");
const goBackThree = document.querySelector(".go-back-to-three");
const btn4 = document.querySelector(".btn4");
const step5 = document.querySelector(".step5");
const input = document.querySelectorAll(".input");
const errorText = document.querySelector(".error-text");
const arcadeTarget = document.querySelector(".arcade-target");
const advancedTarget = document.querySelector(".advanced-target");
const proTarget = document.querySelector(".pro-target");
const arcadeYearly = document.querySelector(".arcade-yearly");
const advancedYearly = document.querySelector(".advanced-yearly");
const proYearly = document.querySelector(".pro-yearly");
const targetPrice = document.querySelector(".target-price");
const serviceOnline = document.querySelector(".service-online");
const onlineService = document.querySelector(".online-service");
const onlineServicePrice = document.querySelector(".online-service-price");
const storageLine = document.querySelector(".storage-line");
const largerStorage = document.querySelector(".larger-storage");
const largerStoragePrice = document.querySelector(".larger-storage-price");
const priceCustomizable = document.querySelector(".profile-customizable");
const customizableProfile = document.querySelector(".customizable-profile");
const customizableProfilePrice = document.querySelector(
  ".customizable-profile-price"
);
const folake = document.querySelector(".folake");
const step3ThirdText = document.querySelector(".step3-third-text");
const extra2 = document.querySelector(".extra2");
const extra3 = document.querySelector(".extra3");
const emma = document.querySelector(".emma");
const king = document.querySelector(".king");
const total = document.querySelector(".total-price");
const totalText = document.querySelector(".total");
const arcadeContent = arcadeWrapper.querySelector("p:nth-child(2)").textContent;
const advancedContent =
  advancedWrapper.querySelector("p:nth-child(2)").textContent;
const serviceOnlineContent =
  serviceOnline.querySelector("p:nth-child(1)").textContent;
const serviceOnlinePrice =
  serviceOnline.querySelector("p:nth-child(4)").textContent;
  console.log(serviceOnlinePrice);
const storageLineContent =
  storageLine.querySelector("p:nth-child(1)").textContent;
const storageLinePrice =
  storageLine.querySelector("p:nth-child(4)").textContent;
  console.log(storageLinePrice);
const priceCustomizableContent =
  priceCustomizable.querySelector("p:nth-child(1)").textContent;
const priceCustomizablePrice =
  priceCustomizable.querySelector("p:nth-child(4)").textContent;
  const arcadeTotalMonthly = arcadeContent;
console.log(folake);

//This gives the first page its style
stepOneWrapper.style.backgroundColor = "hsl(206, 94%, 87%)";
stepOneIconText.style.color = "hsl(213, 96%, 18%)";

//This is the button that'd take us to the second page
btn1.addEventListener("click", () => {
  // Set the visibility of step1 to "hidden"
  // let hasEmptyInput = false;

  // input.forEach((input) => {
  //   if (input.value === "") {
  //     hasEmptyInput = true;
  //     input.style.border = '1px solid hsl(354, 84%, 57%)';
  //     errorText.classList.add('error-text2');
  //   } else {
  //     input.style.removeProperty('border');
  //     errorText.classList.remove('error-text2');
  //   }
  // });

  // if (hasEmptyInput) {
  //   // Do not proceed if there are empty inputs
  //   return;
  // }

  //This makes the first page hidden and the seccond page visible
  step1.style.visibility = "hidden";
  btn1Wrapper.style.visibility = "hidden";
  step2.style.visibility = "visible";
  btn2Wrapper.style.visibility = "visible";

  // This gives new styles when the second page is visible
  if (step2.style.visibility === "visible") {
    stepTwoWrapper.style.backgroundColor = "hsl(206, 94%, 87%)";
    stepTwoIconText.style.color = "hsl(213, 96%, 18%)";
  }
  // Removes the styles added to step2 when it is hidden
  stepOneWrapper.style.removeProperty("background-color");
  stepOneIconText.style.removeProperty("color");

  //This makes it sure that when we switch from months to years, the month aspect of every thing is hidden and the year aspect is visible
  years.classList.remove("years");
  secondText.style.visibility = "visible";
  thirdText.style.visibility = "hidden";
  ye.style.visibility = "hidden";
  bar.style.visibility = "visible";
  drunk.style.visibility = "hidden";
  ya.style.visibility = "hidden";
  past.style.visibility = "visible";
  future.style.visibility = "hidden";
});

//This sends us back to step1 when it is clicked
goBackOne.addEventListener("click", () => {
  stepTwoWrapper.style.removeProperty("background-color");
  stepTwoIconText.style.removeProperty("color");

  step2.style.visibility = "hidden";
  btn2Wrapper.style.visibility = "hidden";
  step1.style.visibility = "visible";
  btn1Wrapper.style.visibility = "visible";
  stepOneWrapper.style.backgroundColor = "hsl(206, 94%, 87%)";
  stepOneIconText.style.color = "hsl(213, 96%, 18%)";
  secondText.style.visibility = "hidden";
  thirdText.style.visibility = "hidden";
  // The new texts added for the years are hidden when step2 is hidden
  secondText.style.visibility = "hidden";
  thirdText.style.visibility = "hidden";
  years.classList.remove("years");
  ye.style.visibility = "hidden";
  bar.style.visibility = "hidden";
  drunk.style.visibility = "hidden";
  ya.style.visibility = "hidden";
  past.style.visibility = "hidden";
  future.style.visibility = "hidden";
});

// Add the prices of selected options to the total

//This is the first wrapper that holds the contents for the arcade aspect
arcadeWrapper.addEventListener("click", () => {
  arcadeWrapper.style.border = "2px solid hsl(213, 96%, 18%)";
  arcadeWrapper.style.backgroundColor = "hsl(206, 94%, 87%)";
  advancedWrapper.style.removeProperty("background-color");
  advancedWrapper.style.removeProperty("border");
  proWrapper.style.removeProperty("background-color");
  proWrapper.style.removeProperty("border");
  console.log(arcadeWrapper.textContent);

  // const arcadeContent = parseInt(arcadeWrapper.querySelector("p:nth-child(2)").textContent);
  //   arcadeTarget.classList.add("arcade-target2");
  advancedTarget.style.visibility = "hidden";
  proTarget.style.visibility = "hidden";
  if ((step2.style.visibility = "visible")) {
    arcadeTarget.style.visibility = "hidden";
    step2.style.zIndex = "10";
  }



let serviceOnlineClicked = false
let storageLineClicked = false;
  if ((step4.style.visibility = "visible")) {
    arcadeTarget.style.visibility = "visible";
    step4.style.zIndex = "-10";
    targetPrice.innerHTML = arcadeContent;
    targetPrice.style.visibility = "visible";

    serviceOnline.addEventListener("click", () => {
      console.log(serviceOnline.textContent);
      serviceOnlineClicked == true
      const num1 = parseFloat(
        arcadeTotalMonthly.replace("$", "").replace("/mo", "")
      );
      const num2 = parseFloat(
        serviceOnlinePrice.replace("$", "").replace("/mo", "")
      );
      const result = num1 + num2;
      const formattedResult = `$${result}/mo`;
      total.innerHTML = formattedResult;
      total.style.visibility = "visible";
      totalText.style.visibility = "visible";
      
    });
   };





if(serviceOnlineClicked = false && storageLineClicked === true){
  if ((step4.style.visibility = "visible")) {
    step4.style.zIndex = "-10";
    onlineService.innerHTML = serviceOnlineContent;
    onlineService.style.visibility = "visible";
    onlineServicePrice.innerHTML = serviceOnlinePrice;
    onlineServicePrice.style.visibility = "visible";

     const arcadeTotalMonthly = arcadeContent;

// The total if everthings is clicked
const num1 = parseFloat(
  arcadeTotalMonthly.replace("$", "").replace("/mo", "")
);

const num3 = parseFloat(
  storageLinePrice.replace("$", "").replace("/mo", "")
);

const softResult = num1 + num3;
const formatResult = `$${softResult}/mo`;
total.innerHTML = formatResult;
total.style.visibility = "visible";
totalText.style.visibility = "visible";
  }
}

 
storageLine.addEventListener("click", () => {
  console.log(storageLinePrice);
    storageLineClicked == true

    const num1 = parseFloat(
      arcadeTotalMonthly.replace("$", "").replace("/mo", "")
    );
    const num2 = parseFloat(
      serviceOnlinePrice.replace("$", "").replace("/mo", "")
    );
    
    largerStorage.innerHTML = storageLineContent;
    largerStorage.style.visibility = "visible";
    largerStoragePrice.innerHTML = storageLinePrice;
    largerStoragePrice.style.visibility = "visible";

     const num3 = parseFloat(
    storageLinePrice.replace("$", "").replace("/mo", "")
  );

  const newResult = num1 + num3;
  const formatResult = `$${newResult}/mo`;
  total.innerHTML = formatResult;
  total.style.visibility = "visible";
  totalText.style.visibility = "visible";

});

// if( storageLineClicked === true && serviceOnlineClicked === true){


//   const num1 = parseFloat(
//     arcadeTotalMonthly.replace("$", "").replace("/mo", "")
//   );
//   const num2 = parseFloat(
//     serviceOnlinePrice.replace("$", "").replace("/mo", "")
//   );

//   const num3 = parseFloat(
//     storageLinePrice.replace("$", "").replace("/mo", "")
//   )



// const softResult = num1 + num2 + num3;
// const formatResult = `$${softResult}/mo`;
// total.innerHTML = formatResult;
// total.style.visibility = "visible";
// totalText.style.visibility = "visible";


//   }

//   if(serviceOnlineClicked = true && storageLineClicked == false){
//     const num1 = parseFloat(
//       arcadeTotalMonthly.replace("$", "").replace("/mo", "")
//     );
//     const num2 = parseFloat(
//       serviceOnlinePrice.replace("$", "").replace("/mo", "")
//     );

//     const result = num1 + num2;
//     const formattedResult = `$${result}/mo`;
//     total.innerHTML = formattedResult;
//     total.style.visibility = "visible";
//     totalText.style.visibility = "visible";

//   }

// // if(serviceOnlineClicked = true && storageLineClicked == true){
//   const num1 = parseFloat(
//     arcadeTotalMonthly.replace("$", "").replace("/mo", "")
//   );
//   const num2 = parseFloat(
//     serviceOnlinePrice.replace("$", "").replace("/mo", "")
//   );
//   const num3 = parseFloat(
//     storageLinePrice.replace("$", "").replace("/mo", "")
//   );
//   const madResult = num1 + num2 + num3;
//   const formatResult = `$${madResult}/mo`;
//   total.innerHTML = formatResult;
//   total.style.visibility = "visible";
//   totalText.style.visibility = "visible";
// }

// if(serviceOnlineClicked === false && storageLineClicked === true){
//   const num3 = parseFloat(
//     storageLinePrice.replace("$", "").replace("/mo", "")
//   );
//   const newResult = num1 + num3;
//   const formatResult = `$${newResult}/mo`;
//   total.innerHTML = formatResult;
//   total.style.visibility = "visible";
//   totalText.style.visibility = "visible";
// }


    });












//This is the first wrapper that holds the contents for the advanced aspect
advancedWrapper.addEventListener("click", () => {
  advancedWrapper.style.border = "2px solid hsl(213, 96%, 18%)";
  advancedWrapper.style.backgroundColor = "hsl(206, 94%, 87%)";
  arcadeWrapper.style.removeProperty("background-color");
  arcadeWrapper.style.removeProperty("border");
  proWrapper.style.removeProperty("background-color");
  proWrapper.style.removeProperty("border");

  console.log(advancedContent);

  // advancedTarget.classList.add("arcade-target2");
  arcadeTarget.style.visibility = "hidden";
  proTarget.style.visibility = "hidden";
  if ((step2.style.visibility = "visible")) {
    advancedTarget.style.visibility = "hidden";
    step2.style.zIndex = "10";
  }

  if ((step4.style.visibility = "visible")) {
    advancedTarget.style.visibility = "visible";
    step4.style.zIndex = "-10";
    targetPrice.innerHTML = advancedContent;
    targetPrice.style.visibility = "visible";
    let advancedTotalMonth = advancedContent;
    const num1 = parseFloat(
      advancedTotalMonth.replace("$", "").replace("/mo", "")
    );
    const num2 = parseFloat(
      serviceOnlinePrice.replace("$", "").replace("/mo", "")
    );

    const result = num1 + num2;

    const formattedResult = `$${result}/mo`;
    total.innerHTML = formattedResult;
    total.style.visibility = "visible";
    totalText.style.visibility = "visible";
  }
  //shows all the elements inside the wrapper in the console
  //   advancedWrapper.querySelector("p:nth-child(4)").textContent;
  // console.log(specificContent);
});

//This is the first wrapper that holds the contents for the pro aspect
proWrapper.addEventListener("click", () => {
  proWrapper.style.border = "2px solid hsl(213, 96%, 18%)";
  proWrapper.style.backgroundColor = "hsl(206, 94%, 87%)";
  arcadeWrapper.style.removeProperty("background-color");
  arcadeWrapper.style.removeProperty("border");
  advancedWrapper.style.removeProperty("background-color");
  advancedWrapper.style.removeProperty("border");
  arcadeTarget.style.visibility = "hidden";
  advancedTarget.style.visibility = "hidden";
  const proContent = proWrapper.querySelector("p:nth-child(2)").textContent;
  if ((step2.style.visibility = "visible")) {
    proTarget.style.visibility = "hidden";
    step2.style.zIndex = "10";
  }

  if ((step4.style.visibility = "visible")) {
    proTarget.style.visibility = "visible";
    step4.style.zIndex = "-10";
    targetPrice.innerHTML = proContent;
    targetPrice.style.visibility = "visible";
    proTotalMonth = proContent;
    const num1 = parseFloat(proTotalMonth.replace("$", "").replace("/mo", ""));
    const num2 = parseFloat(
      serviceOnlinePrice.replace("$", "").replace("/mo", "")
    );

    const result = num1 + num2;

    const formattedResult = `$${result}/mo`;
    total.innerHTML = formattedResult;
    total.style.visibility = "visible";
    totalText.style.visibility = "visible";
  }
});

let sliderClickCount = 0;
slider.addEventListener("click", () => {
  // Toggle styles based on the click count
  if (sliderClickCount % 2 === 0) {
    yearly.style.color = "hsl(213, 96%, 18%)";
    monthly.style.color = "hsl(231, 11%, 63%)";
    years.classList.add("years");
    secondText.style.visibility = "hidden";
    thirdText.style.visibility = "visible";
    ye.style.visibility = "visible";
    bar.style.visibility = "hidden";
    drunk.style.visibility = "visible";
    ya.style.visibility = "visible";
    past.style.visibility = "hidden";
    future.style.visibility = "visible";
    folake.style.visibility = "visible";
    emma.style.visibility = "visible";
    king.style.visibility = "visible";
    step3ThirdText.style.visibility = "hidden";
    extra2.style.visibility = "hidden";
    extra3.style.visibility = "hidden";

    // when the slider button is on yearly, and the arcade,advanced or pro wrappers are clicked, the yearly texts are visible in step4
    arcadeWrapper.addEventListener("click", () => {
      arcadeTarget.style.visibility = "hidden";
      advancedYearly.style.visibility = "hidden";
      // proTarget.style.visibility = "hidden";
      const arcadeYearContent =
        arcadeWrapper.querySelector("p:nth-child(3)").textContent;

      if ((step2.style.visibility = "visible")) {
        arcadeYearly.style.visibility = "hidden";
        step2.style.zIndex = "10";
      }

      if ((step4.style.visibility = "visible")) {
        arcadeYearly.style.visibility = "visible";
        step4.style.zIndex = "-10";
        targetPrice.innerHTML = arcadeYearContent;
        targetPrice.style.visibility = "visible";
      }
    });
    advancedWrapper.addEventListener("click", () => {
      advancedTarget.style.visibility = "hidden";
      arcadeYearly.style.visibility = "hidden";
      // proYearly.style.visibility = "hidden";
      const advancedYearContent =
        advancedWrapper.querySelector("p:nth-child(3)").textContent;
      if ((step2.style.visibility = "visible")) {
        advancedYearly.style.visibility = "hidden";
        step2.style.zIndex = "10";
      }
      if ((step4.style.visibility = "visible")) {
        advancedYearly.style.visibility = "visible";
        step4.style.zIndex = "-10";
        targetPrice.innerHTML = advancedYearContent;
        targetPrice.style.visibility = "visible";
      }
    });
    proWrapper.addEventListener("click", () => {
      proTarget.style.visibility = "hidden";
      advancedTarget.style.visibility = "hidden";
      const proYearContent =
        proWrapper.querySelector("p:nth-child(3)").textContent;

      if ((step2.style.visibility = "visible")) {
        proYearly.style.visibility = "hidden";
        step2.style.zIndex = "10";
      }

      if ((step4.style.visibility = "visible")) {
        proYearly.style.visibility = "visible";
        step4.style.zIndex = "-10";
        targetPrice.innerHTML = proYearContent;
        targetPrice.style.visibility = "visible";
      }
    });

    serviceOnline.addEventListener("click", () => {
      console.log(serviceOnline.textContent);
      const serviceOnlineContentYear =
        serviceOnline.querySelector("p:nth-child(1)").textContent;
      const serviceOnlinePriceYear =
        serviceOnline.querySelector("p:nth-child(5)").textContent;

      if ((step4.style.visibility = "visible")) {
        step4.style.zIndex = "-10";
        onlineService.innerHTML = serviceOnlineContentYear;
        onlineService.style.visibility = "visible";
        onlineServicePrice.innerHTML = serviceOnlinePriceYear;
        onlineServicePrice.style.visibility = "visible";
      } else {
        onlineService.style.visibility = "hidden";
        onlineServicePrice.style.visibility = "hidden";
      }
    });

    storageLine.addEventListener("click", () => {
      console.log(storageLine.textContent);
      const storageLineContentYear =
        storageLine.querySelector("p:nth-child(1)").textContent;
      const storageLinePriceYear =
        storageLine.querySelector("p:nth-child(5)").textContent;

      if ((step4.style.visibility = "visible")) {
        step4.style.zIndex = "-10";
        largerStorage.innerHTML = storageLineContentYear;
        largerStorage.style.visibility = "visible";
        largerStoragePrice.innerHTML = storageLinePriceYear;
        largerStoragePrice.style.visibility = "visible";
      }
    });

    priceCustomizable.addEventListener("click", () => {
      console.log(priceCustomizable.textContent);
      const priceCustomizableContentYear =
        priceCustomizable.querySelector("p:nth-child(1)").textContent;
      const priceCustomizablePriceYear =
        priceCustomizable.querySelector("p:nth-child(5)").textContent;

      if ((step4.style.visibility = "visible")) {
        step4.style.zIndex = "-10";
        customizableProfile.innerHTML = priceCustomizableContentYear;
        customizableProfile.style.visibility = "visible";
        customizableProfilePrice.innerHTML = priceCustomizablePriceYear;
        customizableProfilePrice.style.visibility = "visible";
      }
    });
  } else {
    yearly.style.color = "hsl(231, 11%, 63%)";
    monthly.style.color = "hsl(213, 96%, 18%)";
    years.classList.remove("years");
    secondText.style.visibility = "visible";
    thirdText.style.visibility = "hidden";
    ye.style.visibility = "hidden";
    bar.style.visibility = "visible";
    drunk.style.visibility = "hidden";
    ya.style.visibility = "hidden";
    past.style.visibility = "visible";
    future.style.visibility = "hidden";
  }

  // Increment the click count
  sliderClickCount++;
});

btn2.addEventListener("click", () => {
  // Set the visibility of step1 to "hidden"
  step2.style.visibility = "hidden";
  btn2Wrapper.style.visibility = "hidden";
  step3.style.visibility = "visible";
  btn3Wrapper.style.visibility = "visible";

  if (step2.style.visibility === "hidden") {
    stepThreeWrapper.style.backgroundColor = "hsl(206, 94%, 87%)";
    stepThreeIconText.style.color = "hsl(213, 96%, 18%)";
  }
  stepTwoWrapper.style.removeProperty("background-color");
  stepTwoIconText.style.removeProperty("color");

  secondText.style.visibility = "hidden";
  thirdText.style.visibility = "hidden";
  years.classList.remove("years");
  ye.style.visibility = "hidden";
  bar.style.visibility = "hidden";
  drunk.style.visibility = "hidden";
  ya.style.visibility = "hidden";
  past.style.visibility = "hidden";
  future.style.visibility = "hidden";
});
//This goes back to step2 from step3
goBackTwo.addEventListener("click", () => {
  stepThreeWrapper.style.removeProperty("background-color");
  stepThreeIconText.style.removeProperty("color");

  step3.style.visibility = "hidden";
  btn3Wrapper.style.visibility = "hidden";
  step2.style.visibility = "visible";
  btn2Wrapper.style.visibility = "visible";
  stepTwoWrapper.style.backgroundColor = "hsl(206, 94%, 87%)";
  stepTwoIconText.style.color = "hsl(213, 96%, 18%)";

  years.classList.remove("years");
  secondText.style.visibility = "visible";
  thirdText.style.visibility = "hidden";
  ye.style.visibility = "hidden";
  bar.style.visibility = "visible";
  drunk.style.visibility = "hidden";
  ya.style.visibility = "hidden";
  past.style.visibility = "visible";
  future.style.visibility = "hidden";
  arcadeTarget.style.visibility = "hidden";
  advancedTarget.style.visibility = "hidden";
  proTarget.style.visibility = "hidden";
  arcadeYearly.style.visibility = "hidden";
  advancedYearly.style.visibility = "hidden";
  proYearly.style.visibility = "hidden";
  targetPrice.style.visibility = "hidden";
});

checkBoxInput.forEach((checkBoxInput) => {
  checkBoxInput.addEventListener("click", function () {
    // Get the parent container of the clicked checkbox
    const checkBoxWrapper = this.closest(".checkbox-wrapper");

    // Check if the checkbox is checked
    if (this.checked) {
      // Change the border color to red when the checkbox is checked
      checkBoxWrapper.style.border = "2px solid hsl(243, 100%, 62%)";

      let checkedContent = checkBoxWrapper.textContent;
      console.log(checkedContent);
    } else {
      // Change the border color back to blue when the checkbox is unchecked
      checkBoxWrapper.style.removeProperty("border");
    }
  });
});

// when individual checkbox wrappers are clicked, their content shows up in step4

serviceOnline.addEventListener("click", () => {
  console.log(serviceOnline.textContent);
  const serviceOnlineContent =
    serviceOnline.querySelector("p:nth-child(1)").textContent;
  const serviceOnlinePrice =
    serviceOnline.querySelector("p:nth-child(4)").textContent;

  if ((step4.style.visibility = "visible")) {
    step4.style.zIndex = "-10";
    onlineService.innerHTML = serviceOnlineContent;
    onlineService.style.visibility = "visible";
    onlineServicePrice.innerHTML = serviceOnlinePrice;
    onlineServicePrice.style.visibility = "visible";
  } else {
    onlineService.style.visibility = "hidden";
    onlineServicePrice.style.visibility = "hidden";
  }
});

storageLine.addEventListener("click", () => {
  console.log(storageLine.textContent);

  if ((step4.style.visibility = "visible")) {
    step4.style.zIndex = "-10";
    largerStorage.innerHTML = storageLineContent;
    largerStorage.style.visibility = "visible";
    largerStoragePrice.innerHTML = storageLinePrice;
    largerStoragePrice.style.visibility = "visible";
  }
});

priceCustomizable.addEventListener("click", () => {
  console.log(priceCustomizable.textContent);
  const priceCustomizableContent =
    priceCustomizable.querySelector("p:nth-child(1)").textContent;
  const priceCustomizablePrice =
    priceCustomizable.querySelector("p:nth-child(4)").textContent;

  if ((step4.style.visibility = "visible")) {
    step4.style.zIndex = "-10";
    customizableProfile.innerHTML = priceCustomizableContent;
    customizableProfile.style.visibility = "visible";
    customizableProfilePrice.innerHTML = priceCustomizablePrice;
    customizableProfilePrice.style.visibility = "visible";
  }
});

btn3.addEventListener("click", () => {
  // Set the visibility of step3 to "hidden"
  step3.style.visibility = "hidden";
  btn3Wrapper.style.visibility = "hidden";
  step4.style.visibility = "visible";
  step4.style.zIndex = "10";
  btn4Wrapper.style.visibility = "visible";
  //This makes it so that when step4 is visible, the background color and color of the icon-wrapper changes
  if (step4.style.visibility === "visible") {
    stepFourWrapper.style.backgroundColor = "hsl(206, 94%, 87%)";
    stepFourIconText.style.color = "hsl(213, 96%, 18%)";
  }
  stepThreeWrapper.style.removeProperty("background-color");
  stepThreeIconText.style.removeProperty("color");
});
// this goes back to the previous page whhich in this case is page 3
goBackThree.addEventListener("click", () => {
  stepFourWrapper.style.removeProperty("background-color");
  stepFourIconText.style.removeProperty("color");

  step4.style.visibility = "hidden";
  btn4Wrapper.style.visibility = "hidden";
  step3.style.visibility = "visible";
  btn3Wrapper.style.visibility = "visible";
  stepThreeWrapper.style.backgroundColor = "hsl(206, 94%, 87%)";
  stepThreeIconText.style.color = "hsl(213, 96%, 18%)";
  arcadeTarget.style.visibility = "hidden";
  advancedTarget.style.visibility = "hidden";
  proTarget.style.visibility = "hidden";
  arcadeYearly.style.visibility = "hidden";
  advancedYearly.style.visibility = "hidden";
  proYearly.style.visibility = "hidden";
  targetPrice.style.visibility = "hidden";
  onlineService.style.visibility = "hidden";
  onlineServicePrice.style.visibility = "hidden";
  largerStorage.style.visibility = "hidden";
  largerStoragePrice.style.visibility = "hidden";
  customizableProfile.style.visibility = "hidden";
  customizableProfilePrice.style.visibility = "hidden";
  total.style.visibility = "visible";
});

btn4.addEventListener("click", () => {
  // Set the visibility of step4 to "hidden"
  step4.style.visibility = "hidden";
  btn4Wrapper.style.visibility = "hidden";
  step5.style.visibility = "visible";

  if (step4.style.visibility === "hidden") {
    stepFourWrapper.style.removeProperty("background-color");
    stepFourIconText.style.removeProperty("color");
    arcadeTarget.style.visibility = "hidden";
    advancedTarget.style.visibility = "hidden";
    proTarget.style.visibility = "hidden";
    arcadeYearly.style.visibility = "hidden";
    advancedYearly.style.visibility = "hidden";
    proYearly.style.visibility = "hidden";
    targetPrice.style.visibility = "hidden";
    onlineService.style.visibility = "hidden";
    onlineServicePrice.style.visibility = "hidden";
    largerStorage.style.visibility = "hidden";
    largerStoragePrice.style.visibility = "hidden";
    customizableProfile.style.visibility = "hidden";
    customizableProfilePrice.style.visibility = "hidden";
    total.style.visibility = "visible";
  }
});

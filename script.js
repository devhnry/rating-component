'use strict';
const rates = document.querySelectorAll(".rates");
const btn = document.querySelector(".btn");
const ratingState = document.querySelector(".rating");
const thanksState = document.querySelector(".thanks");
const thanksMsg = document.querySelector(".thanks--rating");

let active = null;
for (const rate of rates) {
  rate.addEventListener("click", function () {
    if (active !== null) active.classList.remove("active");
    if(active === rate){
      active = null;
    }else{
      rate.classList.add("active")
      active = rate
    }
  });
}

btn.addEventListener("click", function () {
  if (active !== null) {
    ratingState.classList.add("hidden");
    thanksState.classList.remove("hidden");
    thanksMsg.textContent = `You selected ${active.textContent} out of 5`;
    console.log(active);
  } else {
    alert("Please select a Rating!!");
  }
});
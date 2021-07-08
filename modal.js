function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBgSubmit = document.querySelector(".bground-submit");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalsBtn = document.querySelectorAll(".closed");
const modalSubmit = document.querySelectorAll(".btn-submit")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

// launch modal submit 

modalSubmit.forEach((btnSubmit) => btnSubmit.addEventListener("click",modalSub));

function modalSub(e){
  e.preventDefault();
  modalBgSubmit.style.display = "block"
  modalBg.style.display = "none"
}

//close modal 

closeModalsBtn.forEach((btnClose) => btnClose.addEventListener("click",closeModal))

function closeModal (){
  modalBg.style.display = "none"
  modalBgSubmit.style.display = "none"
}

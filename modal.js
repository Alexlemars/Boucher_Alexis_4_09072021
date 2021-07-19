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
const modalSubmit = document.querySelectorAll(".btn-submit");



//Variable formulaire
let form = document.getElementById("loginForm");
let condition =document.getElementById("checkbox1")
let textCheckBox = document.querySelector(".validatecheckbox");


// Formulaire

form.first.addEventListener('change',function(){
  validFirstName(this)
})
form.last.addEventListener('change',function(){
  validLastName(this)
})
form.email.addEventListener('change',function(){
  validEmail(this)
})
form.birthdate.addEventListener('change',function(){
  validBirthdate(this)
})
form.quantity.addEventListener('change',function(){
  validQuantity(this)
})

condition.addEventListener('change' , function(){
  validCondition(this)
})


                            //Function form

//Validation FirstName
const validFirstName = function(inputFirstName){
  let small = inputFirstName.nextElementSibling;
  if (inputFirstName.value.length < 2 ){
    small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du prenom.'
    return false;
  }else{
    small.innerHTML="";
    return true;
  }
}

//Validation lastName
const validLastName = function(inputLastName){
  let small = inputLastName.nextElementSibling;
  if (inputLastName.value.length < 2 ){
    small.innerHTML = 'Veuillez entrer 2 caractères ou plus pour le champ du nom.'
    return false;
  }else{
    small.innerHTML="";
    return true;
  }
}

//Validation EMAIL
const validEmail = function(inputEmail){
  let emailRegexp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',"g"
  );

  let testEmail = emailRegexp.test(inputEmail.value);
  let small = inputEmail.nextElementSibling;

  if(testEmail == false){
    small.innerHTML = 'Adresse email non valide.'
    return false ;
  }else{
    small.innerHTML="";
    return true;
  }

}


//Validation Birtdate
const validBirthdate = function(inputBirthdate){
  let small = inputBirthdate.nextElementSibling;
  const birthregex = /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/;
  let testBirtdate = birthregex.test(inputBirthdate.value);

  if(testBirtdate == false){
    small.innerHTML = "Vous devez entrer une date de naissance valide."
    return false;
  }else{
    small.innerHTML = "";
    return true;
  }

}

//Validation Quantity
const validQuantity = function(inputQuantity){
  let small = inputQuantity.nextElementSibling;
  
  if(!/[0-9]/.test(inputQuantity.value)){
    small.innerHTML = "veuillez renseigner au moins 1 chiffre."
    return false
  }else{
    small.innerHTML = "";
    return true
  }

}

//Validation condition

const validCondition = function(inputCheckbox){
  if(inputCheckbox.checked == false){
    textCheckBox.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    return false;
  }else{
    textCheckBox.innerHTML = "";
    return true;
  }

}


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
  if  (validFirstName(form.first) && validLastName(form.last) && validEmail(form.email) && validBirthdate(form.birthdate) && validQuantity(form.quantity) && validCondition(condition)){
    modalBgSubmit.style.display = "block";
    modalBg.style.display = "none";

    //reset modal form
    form.reset();
  }
}

//close modal 

closeModalsBtn.forEach((btnClose) => btnClose.addEventListener("click",closeModal))

function closeModal (){
  modalBg.style.display = "none"
  modalBgSubmit.style.display = "none"
}

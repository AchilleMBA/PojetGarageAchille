

 const registerForm = document.getElementById("#register-form");
 const nameInput = document.getElementById("#name");
 const firstNameInput = document.getElementById("#firstName");
 const emailInput = document.getElementById("#email");
 const phoneInput = document.getElementById("#phone");
 const adressInput = document.getElementById ("#adress");
 const cityInput = document.getElementById ("#city");
 const postcodeInput = document.getElementById ("#postcode");
 const messageInput = document.getElementById ("#message");



 registerForm.addEventListener("submit",event=> {
 event.preventDefault();

 })

 
 const nameValue = nameInput.value.trim();
 const firstNameValue = firstNameInput.value.trim();
 const emailValue = emailInput.value.trim();
 const phoneValue = phoneInput.value.trim();
 const adressValue = adressInput.value.trim();
 const cityValue = cityInput.value.trim();
 const postcodeValue = postcodeInput.value.trim();
 const messageValue = messageInput.value.trim();


console.log ("hello")

  
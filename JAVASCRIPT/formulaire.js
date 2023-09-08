

const registerForm = document.getElementById("register-form")


 registerForm.addEventListener("submit", function (event) {
 event.preventDefault()

 const nameInput = document.getElementById("name")
 const firstNameInput = document.getElementById("firstName")
 const emailInput = document.getElementById("email")
 const phoneInput = document.getElementById("phone")
 const adressInput = document.getElementById ("adress")
 const cityInput = document.getElementById ("city")
 const postcodeInput = document.getElementById ("postcode")
 const messageInput = document.getElementById ("message")

 
 const name = nameInput.value
 const firstName = firstNameInput.value
 const email = emailInput.value
 const phone = phoneInput.value
 const adress = adressInput.value
 const city = cityInput.value
 const postcode = postcodeInput.value
 const message = messageInput.value

 })
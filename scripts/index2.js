// guardo los elementos del html dentro de una constante
const nameUser = document.getElementById("name")
const surname = document.getElementById("surname")
const age = document.getElementById("age")
const nacionality = document.getElementById("nacionality")

// mediante propmt solicito datos
const nameInput = prompt("Ingrese su nombre")
const surnameInput = prompt("Ingrese su apellido")
const ageInput = prompt("Ingrese su edad")
const nacionalityInput = prompt("Ingrese su nacionalidad")


// con los datos ingresados modifico el html
nameUser.innerText = nameInput
surname.innerText = surnameInput
age.innerText = ageInput
nacionality.innerText = nacionalityInput


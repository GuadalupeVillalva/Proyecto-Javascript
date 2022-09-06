/* CALCULADORA con historial */
function suma(a, b) { // declaro funcion para sumar
  return a + b;
}
function resta(a, b) { // funcion para restar
  return a - b;
}

let calculadora = {
  historial : [],
  tipoDeOperacion : "operacion",
}

function filtrarPositivo(elemento){
  return elemento >= 0;
}

function filtrarNegativo(elemento){
  return elemento <= -1 ;
}


let entrada = true; // hace que se inicie el bucle

while (entrada !== "6") {
  entrada = prompt("Ingrese '1' para hacer una suma y '2' para restar. \nSi desea ver el historial ingrese '3'.\n Si desea ver que tipo de operación realizo por ultima vez '4'. \n Si desea saber si en su historial hay números positivos o negativos '5'\nSi desea Si desea salir '6'"); // redeclaro la variable 
  if (entrada === "1") {
    const primerNumero = parseInt(prompt("Ingrese el primer número"));
    const segundoNumero = parseInt(prompt("Ingrese el segundo número"));
    let resultado = suma(primerNumero, segundoNumero);
    if(!isNaN(resultado)){
      alert("El resultado de la suma es " + resultado);
         calculadora.historial.unshift(resultado); // hace push al resultado
         calculadora.tipoDeOperacion = "suma"
    } else {
        alert("No es válido")
    }
  } else if (entrada === "2") {
    const primerNumero = parseInt(prompt("Ingrese el primer número"));
    const segundoNumero = parseInt(prompt("Ingrese el segundo número"));
    resultado = resta(primerNumero, segundoNumero);
    if(!isNaN(resultado)){
        alert("El resultado de la resta es " + resultado);
        calculadora.historial.unshift(resultado);
        calculadora.tipoDeOperacion = "resta"
    } else {
        alert("No es válido")
    }
  } else if (entrada === "3") {
    alert(calculadora.historial);
  } else if(entrada === "4"){
    alert(calculadora.tipoDeOperacion)
  } else if(entrada === "5"){
    const filtrado = prompt("Ingrese 'a' para ver todos los resultados positivos \n 'b' para ver los resultados negativos")
    if(filtrado === "a"){
      let resultado = calculadora.historial.filter(filtrarPositivo)
      alert(resultado)
    } else if(filtrado === "b"){
      let resultado = calculadora.historial.filter(filtrarNegativo)
      alert(resultado)
    }
  } else{
    alert("No es válido")
  }
}
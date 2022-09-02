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

let entrada = true; // hace que se inicie el bucle

while (entrada !== "5") {
  entrada = prompt("Ingrese '1' para hacer una suma y '2' para restar. \nSi desea ver el historial ingrese '3'.\n Si desea ver que tipo de operación realizo por ultima vez '4'. \n Si desea Si desea salir '5'"); // redeclaro la variable 
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
  }

}
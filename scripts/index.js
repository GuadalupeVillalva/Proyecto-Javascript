// mediante propmt solicito la información
const tipoDeMoneda = prompt("¿Qué moneda desea vender/comprar?");
const tipoDeCambio = prompt("¿Desea vender o comprar?");
const cantidad = prompt("Si desea comprar ingrese el monto pesos argentinos, si desea vender ingrese el monto en la divisa");

// declaro una función para vender
function vender(valorDivisa){
    let resultado = parseInt(cantidad) * valorDivisa;
    alert("Es equivalente a " + resultado + " pesos argentinos." );
};


//declaro una función para comprar
function comprar(divisa, valorDivisa){
    let resultado = parseInt(cantidad) / valorDivisa;
    alert("Es equivalente a " + resultado + " " + divisa);
};


// si se ingresa un número o texto donde no se corresponde o no se ingresa nada se alerta que no es válido
if((tipoDeMoneda === !NaN || tipoDeMoneda === "") || (tipoDeCambio === !NaN || tipoDeCambio === "") || (cantidad === NaN || cantidad === "")) {
    alert("No es válido")
} else if(tipoDeCambio === "VENDER" && tipoDeMoneda === "EURO"){ // Vender euro
    vender(138);
} else if(tipoDeCambio === "COMPRAR" && tipoDeMoneda === "EURO"){ // Comprar euro
    comprar("euros", 140);
} else if(tipoDeCambio === "VENDER" && tipoDeMoneda === "DOLAR"){ // Vender dólar
    vender(292);
} else if(tipoDeCambio === "COMPRAR" && tipoDeMoneda === "DOLAR"){ // Comprar Dólar
    comprar("dólares", 297);
}

for(let i = 1; i < 11; i++){ // bucle que itera 10 veces y asigna turnos
    let nombre = prompt("Ingrese su nombre"); // pido nombre
    let apellido = prompt("Ingrese su apellido"); // pido apellido
    if(nombre != "" && apellido != ""){ // itera mientras que lo ingresado no sea un espacio en blanco
        alert(nombre + " " + apellido + " se le ha asignado el turno N° " + i); // devuelvo alert con turno
    } else {
        alert("No es válido, por favor ingrese su nombre y apellido") // le avisa al usuario que es inválido
    }
}
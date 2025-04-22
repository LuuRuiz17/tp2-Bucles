/* 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un
 «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números 
 introducidos. */

let suma = 0;
let mensaje = "";

do {
    const numero = parseInt(prompt("Ingresa un número"));
    mensaje += `${numero} + `;
    if (!isNaN(numero)) {
        suma += numero;
    } else {
        alert("Error. Por favor, ingresa un número.");
    }
} while (confirm());

const nuevoMensaje = mensaje.slice(0 , -2);
document.writeln("Suma de los números ingresados: ")
document.writeln(`<br><br>${nuevoMensaje} = ${suma}`);
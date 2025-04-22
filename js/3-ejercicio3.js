/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp */

let mensaje = "";

do{
    const cadena = prompt("Ingresa una palabra: ");
    mensaje += `${cadena} - `;    
}
while(confirm());

const nuevoMensaje = mensaje.slice(0 , -2);
document.writeln(`${nuevoMensaje}`);



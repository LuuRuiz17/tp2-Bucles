/* 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp */

const nombreUno = prompt("Ingresa un nombre: ");
const edadUno = parseInt(prompt(`Ingresa la edad de ${nombreUno}: `));
const nombreDos = prompt("Ingresa un nombre: ");
const edadDos = parseInt(prompt(`Ingresa la edad de ${nombreDos}: `));
const nombreTres = prompt("Ingresa un nombre: ");
const edadTres = parseInt(prompt(`Ingresa la edad de ${nombreTres}: `));


if(edadUno > edadDos && edadUno > edadTres){
    document.writeln(`${nombreUno} es el/la mayor (${edadUno}).`);
}else if(edadDos > edadUno && edadDos > edadTres){
    document.writeln(`${nombreDos} es el/la mayor (${edadDos}).`);
}else{
    document.writeln(`${nombreTres} es el/la mayor (${edadTres}).`);
}
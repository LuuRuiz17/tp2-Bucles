/* 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado. Ejemplo:

Input: Hola mundo
Output: la vocal ‘o’ está en la posición 1
 
*/

const texto = prompt("Ingresa un texto: ");
const textoMinuscula = texto.toLowerCase();
let bandera = false;
let i = 0;
let primeraVocal = "";

do {
    if (textoMinuscula.charAt(i) == "a" || textoMinuscula.charAt(i) == "e" || textoMinuscula.charAt(i) == "i" || textoMinuscula.charAt(i) == "o" || textoMinuscula.charAt(i) == "u") {
        primeraVocal = textoMinuscula.charAt(i);
        bandera = true;
    }
    else{
        i++;
    }
} while (bandera != true);

document.writeln(`La primera vocal de '${texto}' es la '${primeraVocal}' y está en la posición ${i}`);

// 15- Realiza un script que cuente el número de vocales que tiene un texto.

let texto = prompt("Ingresa un texto: ");
let vocales = 0;

textoMinusculas = texto.toLowerCase();

for (let i = 1; i <= texto.length; i++) {
    if (textoMinusculas.charAt(i) === "a" || textoMinusculas.charAt(i) === "e" || textoMinusculas.charAt(i) === "i" | textoMinusculas.charAt(i) === "o" | textoMinusculas.charAt(i) === "u") {
        vocales++;
    }
}

document.writeln(`${texto} tiene ${vocales} vocales.`);
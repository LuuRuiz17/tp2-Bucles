/* 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional
 de identidad). El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 
Input:  40773821 
Output: ‘L’
*/

const dni = parseInt(prompt("Ingresa tu DNI: "));

if (dni >= 0 && dni <= 99999999) {

    const resultado = dni % 23;
    document.writeln("Tu número de DNI se corresponde con la letra: ");

    if (resultado === 0) {
        document.writeln("T");
    } else if (resultado === 1) {
        document.writeln("R");
    } else if (resultado === 2) {
        document.writeln("W");
    } else if (resultado === 3) {
        document.writeln("A");
    } else if (resultado === 4) {
        document.writeln("G");
    } else if (resultado === 5) {
        document.writeln("M");
    } else if (resultado === 6) {
        document.writeln("Y");
    } else if (resultado === 7) {
        document.writeln("F");
    } else if (resultado === 8) {
        document.writeln("P");
    } else if (resultado === 9) {
        document.writeln("D");
    } else if (resultado === 10) {
        document.writeln("X");
    } else if (resultado === 11) {
        document.writeln("B");
    } else if (resultado === 12) {
        document.writeln("N");
    } else if (resultado === 13) {
        document.writeln("J");
    } else if (resultado === 14) {
        document.writeln("Z");
    } else if (resultado === 15) {
        document.writeln("S");
    } else if (resultado === 16) {
        document.writeln("Q");
    } else if (resultado === 17) {
        document.writeln("V");
    } else if (resultado === 18) {
        document.writeln("H");
    } else if (resultado === 19) {
        document.writeln("L");
    } else if (resultado === 20) {
        document.writeln("C");
    } else if (resultado === 21) {
        document.writeln("K");
    } else if (resultado === 22) {
        document.writeln("E");
    }
}

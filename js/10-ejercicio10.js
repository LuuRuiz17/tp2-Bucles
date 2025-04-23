/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas
deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán
del 35 al 1. */

const filas = parseInt(prompt("Ingresa el número de filas: "));
const columnas = parseInt(prompt("Ingresa el número de columnas: "));
let mxn = filas * columnas;

document.writeln(`<table>
    <tbody>`);

for(let i = 0; i < filas; i++){
    document.writeln(`<tr>`);
    for(let j = 0; j < columnas; j++){
        document.writeln(`<td>${mxn}</td>`);
        mxn--;
    }
    document.writeln(`</tr>`);
}

document.writeln(`</tbody></table>`);
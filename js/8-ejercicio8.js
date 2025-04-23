/* 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor
de 50) 

1
12
123
1234
12345
123456

*/

const numero = parseInt(prompt("Ingresa un número: "));

if (numero <= 50) {
    for (let i = 1; i <= numero; i++) {
        for (let j = 1; j <= i; j++) {
            document.writeln(j);
        }
        document.writeln("<br>");
    }
}else{
    document.writeln("Ingresa un número menor o igual a 50");
}
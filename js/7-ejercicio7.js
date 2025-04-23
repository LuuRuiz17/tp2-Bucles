/* 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1 */

const numero = parseInt(prompt("Ingresa un número: "));

if(numero <= 50){
    for(let i = numero; i > 0; i--){
        document.writeln(`<b>${i}</b>`);
        for(let j = i; j > 1; j--){
            if(i <= 9){
                document.writeln(`&nbsp;&nbsp;<b>${i}</b>`);    
            }
            else{
                document.writeln(`<b>${i}</b>`);
            }
        }
        document.writeln("<br>");
    }
}else{
    alert("Ingresa un número menor o igual a 50.")
}
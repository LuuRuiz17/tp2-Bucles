/* 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert 
según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número 
ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:

Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido

*/

const nota = parseFloat(prompt("Ingresa tu nota: "));

if(!isNaN(nota)){
    if(nota >= 0 && nota <= 10){
        if(nota <= 2){
            alert(`Muy deficiente (${nota})`);
        }
        else if(nota <= 4){
            alert(`Insuficiente (${nota})`);
        }
        else if(nota <= 6){
            alert(`Suficiente (${nota})`);
        }
        else if(nota === 7){
            alert(`Bien (${nota})`);
        }
        else if(nota <= 9){
            alert(`Notable (${nota})`);
        }
        else{
            alert(`Sobresaliente (${nota})`);
        }
    }
    else{
        document.writeln("Número erróneo. Ingresa una nota entre 0 y 10.")
    }

}else{
    document.writeln("Error. Ingresa una nota en formato numérico.");
}
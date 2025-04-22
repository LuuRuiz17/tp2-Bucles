/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
si la edad ingresada no es un número válido indicarlo en un mensaje. */

const edad = parseInt(prompt("Ingresa tu edad: "));

if(!isNaN(edad)){
    if(edad >= 18){
        document.writeln("Podés conducir.");
    }else{
        document.writeln("No podés conducir, sos menor de edad.")
    }
}
else{
    document.writeln("Ingresa un número válido");
}



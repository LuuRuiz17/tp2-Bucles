// 12- Realiza un script que genere un número aleatorio entre 1 y 99

const numeroAleatorio = Math.round(Math.random() * 100);
if(numeroAleatorio != 100){
    document.writeln(numeroAleatorio);
}else{
    const numeroAleatorioDos = Math.round(Math.random() * 100);
    document.writeln(numeroAleatorioDos);
}

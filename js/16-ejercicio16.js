/* 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” 
deberá mostrar “lat euq aloh”. */

const texto = prompt("Ingresa un texto: ");
for(let i = texto.length; i >= 0; i--){
    if(texto.charAt(i) === " "){
        document.writeln(`&nbsp;${texto.charAt(i)}`);    
    }else{
        document.writeln(texto.charAt(i));
    }
}

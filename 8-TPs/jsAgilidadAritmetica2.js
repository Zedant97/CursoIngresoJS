/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */


var respuesta;
var temporizador;
var random;
var randomparseado;
var random2;
var randomparseado2;
var operadorR;
var respuestaingresada;
var random3;
var random3parseado;

function comenzar()
{
    temporizador = setInterval(Responder, 4000);

    random = Math.random() * 10 + 1;
    randomparseado = parseInt(random);
    random2 = Math.random() * 10 + 1;
    randomparseado2 = parseInt(random2);
    random3 = Math.random() * 4 + 1;
    random3parseado = parseInt(random3);

    document.getElementById("PrimerNumero").value = randomparseado;
    document.getElementById("SegundoNumero").value = randomparseado2;
    

    switch (random3parseado) {
         case 1:
             operadorR = "+"
             respuesta = randomparseado + randomparseado2;
             break;
         case 2:
             operadorR = "-"
             respuesta = randomparseado - randomparseado2;
             break;
         case 3:
             operadorR = "*"
             respuesta = randomparseado * randomparseado2;
             break;
         case 4:
             operadorR = "/"
             respuesta = randomparseado / randomparseado2;
             break    




    }
    document.getElementById("Operador").value = operadorR;


}//FIN DE LA FUNCIÓN
function Responder()
{

    respuestaingresada = document.getElementById("Respuesta").value;

    if (respuestaingresada == respuesta) {
        alert("ganaste!");

    } else {
        
        alert("perdiste!");
    }


}//FIN DE LA FUNCIÓN

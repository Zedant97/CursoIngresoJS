/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
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

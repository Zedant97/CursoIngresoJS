/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorElegido;
var tiempoInicio;
var random;
var tiempofinal;
var tiempototal;
function comenzar()
{
    tiempoInicio = new Date();
    random = Math.random() * 6 + 1;
    random = parseInt(random);
    console.log(random);

    switch (random) {
        case 1:
            ColorElegido = "rojo";
            document.getElementById("ColorElejido").style.color = "green";
            break;
        case 2:
            ColorElegido = "azul";
            document.getElementById("ColorElejido").style.color = "red";
            break;
        case 3:
            ColorElegido = "verde";
            document.getElementById("ColorElejido").style.color = "brown";
            break;
        case 4:
            ColorElegido = "celeste";
            document.getElementById("ColorElejido").style.color = "blue";
            break;
        case 5:
            ColorElegido = "amarillo";
            document.getElementById("ColorElejido").style.color = "lightblue";
            break;
        case 6:
            ColorElegido = "marron";
            document.getElementById("ColorElejido").style.color = "yellow";
            break;
    }
	document.getElementById("ColorElejido").value = ColorElegido;

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
    tiempofinal = new Date();
    tiempototal = tiempofinal - tiempoInicio;
    tiempototal = parseInt(tiempototal / 1000) ;

	if(colorParametro == ColorElegido) {
        
        alert("Ganaste!... tardaste " + tiempototal + " segundos");
        comenzar();

    }
	


}//FIN DE LA FUNCIÓN

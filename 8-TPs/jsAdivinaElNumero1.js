/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var numeroSecretoparseado; 
var contadorIntento = 1;

function comenzar()
{
  //Genero el número RANDOM entre 1 y 100 
	numeroSecreto = Math.random() * 100 + 1;
  numeroSecretoparseado = parseInt(numeroSecreto);

  
	 
		//alert(numeroSecreto );
	

}


var contadorIntento = 1;
var numeroingresado;
function verificar()
{
  numeroingresado = document.getElementById("numero").value;
  if(contadorIntento == 10){
    alert("el juego termino!");
    document.getElementById("intentos").value = contadorIntento = 0;
  } else {
    if (numeroingresado == numeroSecretoparseado) {
      alert("Ganaste!!! y en solo " + contadorIntento + " intentos");
      document.getElementById("intentos").value = contadorIntento  = 0;
    
    } else {
      if (numeroingresado < numeroSecretoparseado) {
        document.getElementById("intentos").value = contadorIntento ++;
        alert("te falta!");
      } else {
        document.getElementById("intentos").value = contadorIntento ++;
        alert("te pasaste");
      }
    }

  }
  
	
}
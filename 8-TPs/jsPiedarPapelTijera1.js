/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var randomparseado;
function comenzar()
{
    eleccionMaquina = Math.random() * 3 + 1;
    randomparseado = parseInt(eleccionMaquina);
	


}//FIN DE LA FUNCIÓN
function piedra()
{
	switch(randomparseado) {
        case 1:
            alert("Empataste!");
            break;
        case 2:
            alert("Perdiste!!");
            break;
        case 3:
            alert("Ganaste!!");
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    switch(randomparseado) {
        case 1:
            alert("Ganaste!");
            break;
        case 2:
            alert("Empataste!!");
            break;
        case 3:
            alert("Perdiste!!");
    }

}//FIN DE LA FUNCIÓN
function tijera()
{
    switch(randomparseado) {
        case 1:
            alert("Perdiste!");
            break;
        case 2:
            alert("Ganaste!!");
            break;
        case 3:
            alert("Empataste!!");
    }
	

}//FIN DE LA FUNCIÓN
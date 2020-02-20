/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var eleccionparseado;
var tijera;


function comenzar()
{
    eleccionMaquina = Math.random() * 3 + 1;
    eleccionparseado = parseInt(eleccionMaquina);
	


}//FIN DE LA FUNCIÓN

function piedra ()
{
    var piedra = 1
    if (piedra < eleccionparseado) {
        alert("perdiste!");
    } else {
        if (piedra > eleccionparseado) {
            alert("Ganaste!");
        } else {
            alert("empataste!");
        }
    }

}//FIN DE LA FUNCIÓN
function papel()
{
    var papel = 2
    if (papel < eleccionparseado) {
        alert("perdiste!");
    } else {
        if (papel > eleccionparseado) {
            alert("ganaste!");
        } else {
            alert("empataste!");
        }
    }

}//FIN DE LA FUNCIÓN

function tijera()
{
    var tijera = 3;
    if (tijera >= eleccionparseado) {
        alert("perdiste!");
    } else {
        if (tijera > eleccionparseado) {
            alert("ganaste!");
        } else {
            alert("empataste!");
        }
    }


}//FIN DE LA FUNCIÓN
/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    //declaracion de variables para la suma
    var numero1;
	var resultado;
    var numeroparseado1;
    var porcentaje = 0.75;
    
    //datos de ID
    numero1 = document.getElementById("importe").value;
    //parseo de numeros
    numeroparseado1 = parseInt(numero1);

    //operacion
    resultado = numeroparseado1 * porcentaje;

    //muestreo
    document.getElementById("resultado").value = resultado;
	
}

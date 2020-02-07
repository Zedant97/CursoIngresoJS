/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    //declaracion de variables para la suma
    var numero1;
	var resultado;
    var numeroparseado1;
    var porcentaje = 1.1;
    
    //datos de ID
    numero1 = document.getElementById("sueldo").value;
    //parseo de numeros
    numeroparseado1 = parseInt(numero1);

    //operacion
    resultado = numeroparseado1 * porcentaje;

    //muestreo
    document.getElementById("resultado").value = resultado

    

	
}

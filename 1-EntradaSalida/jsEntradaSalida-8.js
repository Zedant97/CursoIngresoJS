/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    //declaracion de variables para la suma
    var numero1;
    var numero2;
	var resultado;
    var numeroparseado1;
    var numeroparseado2;

    //datos de ID
    numero1 = document.getElementById("numeroDividendo").value;
    numero2 = document.getElementById("numeroDivisor").value;

    //parseo de numeros
    numeroparseado1 = parseInt(numero1);
    numeroparseado2 = parseInt(numero2);

    //operacion
    resultado = numeroparseado1 % numeroparseado2;

    //muestreo de datos
    alert("el resultado es " + resultado);
	
}

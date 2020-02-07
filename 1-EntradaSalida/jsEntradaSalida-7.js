/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    //declaracion de variables para la suma
    var numero1;
    var numero2;
	var resultado;
    var numeroparseado1;
    var numeroparseado2;

    //datos de ID
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;

    //parseo de numeros
    numeroparseado1 = parseInt(numero1);
    numeroparseado2 = parseInt(numero2);

    //operacion
    resultado = numeroparseado1 + numeroparseado2;

    //muestreo de datos
    alert("el resulta es " + resultado);
    
}

function restar()
{
   //declaracion de variables para la suma
    var numero1;
    var numero2;
	var resultado;
    var numeroparseado1;
    var numeroparseado2;

    //datos de ID
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;

    //parseo de numeros
    numeroparseado1 = parseInt(numero1);
    numeroparseado2 = parseInt(numero2);

    //operacion
    resultado = numeroparseado1 - numeroparseado2;

    //muestreo de datos
    alert("el resulta es " + resultado);
	
}

function multiplicar()
{ 
    //declaracion de variables para la suma
    var numero1;
    var numero2;
	var resultado;
    var numeroparseado1;
    var numeroparseado2;

    //datos de ID
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;

    //parseo de numeros
    numeroparseado1 = parseInt(numero1);
    numeroparseado2 = parseInt(numero2);

    //operacion
    resultado = numeroparseado1 * numeroparseado2;

    //muestreo de datos
    alert("el resulta es " + resultado);
	
}

function dividir()
{
	//declaracion de variables para la suma
    var numero1;
    var numero2;
	var resultado;
    var numeroparseado1;
    var numeroparseado2;

    //datos de ID
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;

    //parseo de numeros
    numeroparseado1 = parseInt(numero1);
    numeroparseado2 = parseInt(numero2);

    //operacion
    resultado = numeroparseado1 / numeroparseado2;

    //muestreo de datos
    alert("el resulta es " + resultado);
}


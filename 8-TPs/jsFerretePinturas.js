/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

//devlaracion de variables
var celsius;
var Fahrenheit;
var celsiusparseado;
var Fahrenheitparseado;
var valor1 = 5/9;
var valor2 = 9/5;
var resultado;

function FahrenheitCentigrados () 
{
    //toma de datos por ID
    Fahrenheit = document.getElementById("Temperatura").value;

    //parseado de datos
    Fahrenheitparseado = parseInt(Fahrenheit);

    //operaciones
    resultado = (Fahrenheitparseado - 32) * valor1;

    //muestreo de datos
    alert(Fahrenheit + " grados fahrenheit son " + resultado + " grados centigrados");

	
}

function CentigradosFahrenheit () 
{
    //tomo datos por ID
    celsius = document.getElementById("Temperatura").value;

    //parseo de datos
    celsiusparseado = parseInt(celsius);

    //operaciones
    resultado = (celsiusparseado * valor2) + 32;

    //muestreo de datos
    alert(celsius + " grados centigrados son " + resultado + " grados fahrenheit");
	
}

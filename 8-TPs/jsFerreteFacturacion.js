/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

//declaracion de variables
var precio1;
var precio2;
var precio3;
var suma;
var promedio = 3;
var preciofinal;
var precioparseado1;
var precioparseado2;
var precioparseado3;
var resultado;
var porcentaje = 1.25;


function Sumar () 
{
    //tomo datos por ID
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;

    //parseo los datos tomados por ID
    precioparseado1 = parseInt(precio1);
    precioparseado2 = parseInt(precio2);
    precioparseado3 = parseInt(precio3);

    //sumo los numeros parseados
    suma = precioparseado1 + precioparseado2 + precioparseado3;
    resultado = suma;

    //muestreo en pantalla
    alert("el precio final es " + resultado);
	
}
function Promedio () 
{
    //tomo datos por ID
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;

    //parseo los datos tomados por ID
    precioparseado1 = parseInt(precio1);
    precioparseado2 = parseInt(precio2);
    precioparseado3 = parseInt(precio3);

    //sumo los numeros parseados
    suma = precioparseado1 + precioparseado2 + precioparseado3;
    resultado = suma / promedio;

    //muestreo en pantalla
    alert("el promedio es " + resultado);
	
}
function PrecioFinal () 
{
    //tomo datos por ID
    precio1 = document.getElementById("PrecioUno").value;
    precio2 = document.getElementById("PrecioDos").value;
    precio3 = document.getElementById("PrecioTres").value;

    //parseo los datos tomados por ID
    precioparseado1 = parseInt(precio1);
    precioparseado2 = parseInt(precio2);
    precioparseado3 = parseInt(precio3);

    //sumo los numeros parseados
    suma = precioparseado1 + precioparseado2 + precioparseado3;
    resultado = suma * porcentaje;

    //muestreo en pantalla
    alert("el precio final con iva incluido es " + resultado);
	
}
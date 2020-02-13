/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

//declaracion de variables
var ancho;
var largo;
var resultado;
var alambre = 3;
var metros;
var anchoparseado;
var largoparseado;
var perimetro;
var radio;
var radioparseado;
var pi = 6.28;
var cal =3;
var cemento = 2;
var totalcal;
var totalcemento;
var Mcuadrados;
function Rectangulo () 
{
    //tomo datos por ID
    ancho = document.getElementById("Ancho").value;
    largo = document.getElementById("Largo").value;

    //Parseo los datos
    largoparseado = parseInt(largo);
    anchoparseado = parseInt(ancho);

    //operaciones
    metros = largoparseado + anchoparseado;
    perimetro = metros * 2;
    resultado = perimetro * alambre;

    //muestreo del resultado
    alert("la cantidad de alambre que hay que comprar es " + resultado + " metros");
    

}
function Circulo () 
{
    //tomo datos por ID
    radio = document.getElementById("Radio").value;
	
    //parseo de datos
    radioparseado = parseInt(radio);

    //operaciones
    perimetro = radioparseado *  pi;
    resultado = perimetro * alambre;

    //muestreo de resultados
    alert(resultado);
}
function Materiales () 
{
    //tomo datos por ID
    ancho = document.getElementById("Ancho").value;
    largo = document.getElementById("Largo").value;

    //Parseo los datos
    largoparseado = parseInt(largo);
    anchoparseado = parseInt(ancho);

    //operaciones
    Mcuadrados = largoparseado * anchoparseado;
    totalcal = largoparseado * cal;
    totalcemento = anchoparseado * cemento;

    //muestreo de resultados
    alert("son " + Mcuadrados + "m2 y necesitamos " + totalcal + " bolsas de cal y " + totalcemento + " bolsas de cemento");
	
}
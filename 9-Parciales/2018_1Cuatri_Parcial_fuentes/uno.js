var ancho;
var largo;
var perimetro;

function mostrar()
{
    //tomo datos por prompt
    ancho = prompt("cual es el ancho?");
    ancho = parseInt(ancho);
    largo = prompt("cual es el largo?");
    largo = parseInt(largo);

    //operacion
    perimetro = (ancho + largo) * 2;

    //muestreo de resultado
    alert("el perimetro es " + perimetro + " metros");

}

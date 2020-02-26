var numero1;
var numero2;
var resultado;

function mostrar()
{
    numero1 = prompt("ingrese el primer valor");
    numero1 = parseInt(numero1);
    numero2 = prompt("ingrese el segundo valor");
    numero2 = parseInt(numero2);

    if (numero1 == numero2) {
        alert(numero1 + " es igual a " + numero2);
    } else if (numero1 > numero2) {
        resultado = numero1 - numero2;
        alert("el resultado es " + resultado);
    } else if (numero1 < numero2) {
            resultado = numero1 + numero2;
            if (resultado > 10) {
                alert("la suma es " + resultado + " y supero los 10");
            } else {
                alert("el resultado es " + resultado);
            }
        }

}

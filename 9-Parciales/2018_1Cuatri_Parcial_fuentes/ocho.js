var numero;
var letra;
var respuesta;

function mostrar()
{
    do {
        
        do {
            numero = prompt("ingrese un numero");
            numero = parseInt(numero);
            if (numero == false) {
                break;
            }
        } while (isNaN(numero) || numero < -100 || numero > 100);

        do{
            letra = prompt("ingrese una letra");
            if (letra == false) {
                break;
            }
        } while (!isNaN(letra));

        respuesta = confirm("queres continuar?");

    } while (respuesta);
}

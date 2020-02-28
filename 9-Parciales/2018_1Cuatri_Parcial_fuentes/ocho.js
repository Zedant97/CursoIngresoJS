var numero;
var letra;
var respuesta;
var cantidadPares = 0;
var cantidadImpares = 0;
var cantidadCeros = 0;
var acumuladorPos = 0;
var acumuladorNeg = 0;
var promedioPos;
var cantidadPos = 0;
var bandera = true;
var minimo;
var maximo;
var letraMin;
var letraMax;

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

        if (numero % 2 == 0) {
            cantidadPares ++;
        } else if (numero == 0) {
            cantidadCeros ++;
        } else {
            cantidadImpares ++;
        }

        if (numero > 0) {
            cantidadPos ++;
            acumuladorPos += numero;
        } else if (numero < 0) {
            acumuladorNeg += numero;
        }

        if (bandera) {
            bandera = false;
            maximo = numero;
            minimo = numero;
            letraMax = letra;
            letraMin = letra;
        } else {
            if (numero < minimo) {
                minimo = numero;
                letraMin = letra;
            }

            if (numero > maximo) {
                maximo = numero;
                letraMax = letra;
            }
        }

       


        respuesta = confirm("queres continuar?");

    } while (respuesta);

    if (cantidadPos != 0) {
        promedioPos = acumuladorPos / cantidadPos;
    } else {
        promedioPos = 0;
    }

    document.write("la cantidad de pares es " + cantidadPares + "<br>");
    document.write("la cantidad de impares es " + cantidadImpares + "<br>");
    document.write("la cantidad de ceros es " + cantidadCeros + "<br>");
    document.write("el promedio de los + es " + promedioPos + "<br>");
    document.write("la suma de los - es " + acumuladorNeg + "<br>");
    document.write("la letra y el numero del maximo son " + letraMax + ", " + maximo + "<br>");
    document.write("la letra y el numero del minimo son " + letraMin + ", " + minimo + "<br>");



   
}

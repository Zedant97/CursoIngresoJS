var sexo;
var nota;
var promedio;
var contador = 0;
var contadorvarones = 0;
var acumuladordenotas = 0;
var notaminima;
var sexodenotabaja;



function mostrar()
{
    do {
        contador ++;
        console.log(contador);
        do {
        nota = prompt("ingrese la nota");
        if (nota == null) {
            break;
        }
        nota = parseInt(nota);
        
        } while (isNaN(nota) || nota < 0 || nota > 10);

        do {
            sexo = prompt("que sexo es?");
            if (sexo == null) {
                break;
            }
            
        } while (sexo.toLowerCase() != "f" && sexo.toLowerCase() != "m");

        //punto A
        acumuladordenotas += nota;

        //punto B
        if (contador == 1) {
            notaminima = nota;
            sexodenotabaja = sexo;

        } else {
            if (nota < notaminima) {
                notaminima = nota;
                sexodenotabaja = sexo;
            }
        }

        //punto C

        if (nota >= 6 && sexo == "m") {
            contadorvarones ++;
            
        }

    } while (contador < 5);

    //punto A
    promedio = acumuladordenotas / contador;
    alert("el promedio de las notas es: " + promedio);
    alert("la cantidad de varones con una nota igual o mayor a 6 es: " + contadorvarones);
    alert("la nota minima es: " + notaminima + " y es: " + sexodenotabaja);
}
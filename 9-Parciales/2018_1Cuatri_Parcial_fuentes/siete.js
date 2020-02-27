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
    while (contador < 5){
        contador ++;
        console.log(contador);
        do {
        nota = prompt("ingrese la nota");
        nota = parseInt(nota);
        
        } while (isNaN(nota) || nota < 0 || nota > 10);

        do {
            sexo = prompt("que sexo es?");
            
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

    }

    //punto A
    promedio = acumuladordenotas / contador;
    alert(promedio);
    alert("la cantidad de varones con una nota igual o mayor a 6 es " + contadorvarones);
    alert("la nota minima es " + notaminima + " y es " + sexodenotabaja);
}
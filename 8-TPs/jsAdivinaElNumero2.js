/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var numeroSecretoparseado;
var contadorIntentos = 1;
var numeroingresado;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.random() * 100 + 1;
	numeroSecretoparseado = parseInt(numeroSecreto);
  
	

}

function verificar()
{
	
	numeroingresado = document.getElementById("numero").value;
  	if(contadorIntentos == 15){
    	alert("el juego termino!");
    	document.getElementById("intentos").value = contadorIntentos = 0;
 	} else {
    	if (numeroingresado == numeroSecretoparseado) {
      		switch (contadorIntentos){
		  		case 1:
			  		alert("usted es un adivino!");
			  		break;
		  		case 2:
			  		alert("exelente premonicion!");
			  		break;
		  		case 3:
			  		alert("fue suerte!");
			  		break;
		  		case 4:
			 		alert("muy buena tecnica!");
			  		break;
		  		case 5:
			  		alert("estas entre el promedio!")
			  		break;
		  		case 6:
				case 7:
		  		case 8:
		  		case 9:
		  		case 10:
			  		alert("falta tecnica, malaso!");
			  		break;
		  		default:
			  		alert("bue... deci que tenes novia, si es que la tenes!");
			  		break;		  		  		  	  				 			
	  		}

      		document.getElementById("intentos").value = contadorIntentos = 0;
    
    	} else {
      		if (numeroingresado < numeroSecretoparseado) {
        		document.getElementById("intentos").value = contadorIntentos ++;
        		alert("te falta!");
     		} else {
        		document.getElementById("intentos").value = contadorIntentos ++;
        		alert("te pasaste");
     		}
    	}

  	}

}
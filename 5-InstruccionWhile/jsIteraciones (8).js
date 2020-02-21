function mostrar()
{

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var iterador = 0;
	var respuesta;
	var contador2 = 0;
	respuesta = prompt("cuantos datos queres ingresar?");
	iterador = parseInt(respuesta);

	while(iterador == respuesta) {
		contador ++;
		var numeros = prompt("ingrese numeros validos!");
		
		if (numeros == null) {
			break;
		}

		numeros = parseInt(numeros);

		while (isNaN(numeros)){
			numeros = prompt("no ingreso un numero!... INGRESE UN NUMERO!");
			if (numeros == null) {
			break;
			}
			numeros = parseInt(numeros);
			
		}

		if (numeros < 0) {
			negativo *= numeros;
			contador2 ++;
		} else {
			positivo += numeros;
		}

		if (contador == respuesta) {
			break;
		}


		
	}

	if (contador2 == 0){
		negativo = 0;
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
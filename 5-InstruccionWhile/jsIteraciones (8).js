function mostrar()
{

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	
	//var contador=0;
	//var acumulador=0;
	var respuesta;
	var iteracion;
	respuesta = prompt("cuantos datos queres tomar?");
	iteracion = parseInt(respuesta);

	/*while(iteracion == respuesta) {
		contador ++;
		var numero = prompt("ingrese un numero valido");
		numero = parseInt(numero);
		while(isNaN(numero)) {
			numero = prompt("ingrese un numero");
			numero = parseInt(numero);
		}

		acumulador += numero;
		
		if(contador == respuesta) {
			break;
		}


	}*/

	while(iteracion == respuesta) {
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
			//contador2 ++;
		} else {
			positivo += numeros;
		}

		if (contador == iteracion) {
			break;
		}


		
	}

	if (contador2 == 0){
		negativo = 0;
	}

	
	document.getElementById("producto").value = negativo;
	document.getElementById("suma").value = "hola";
}//FIN DE LA FUNCIÓN
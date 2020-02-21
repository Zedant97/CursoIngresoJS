function mostrar()
{
	// declarar variables
	var contador = 0;
	var iterador;
	var respuesta;
	var minimo;
	var maximo;
	var bandera = true;

	//pregunto cuantos numeros quiere ingresar
	respuesta = prompt("cuantos datos queres ingresar?");
	iterador = parseInt(respuesta);

	//inicio de bucle
	while(iterador == respuesta)
	{
		contador ++;
		var numeros	= prompt("ingrese un numero...");
		//si apretan cancelar se cierra el bucle
		if (numeros == null) {
			break;
		}
		numeros = parseInt(numeros);
		while (isNaN(numeros)) { 
			numeros = prompt("no ingresaste un numero... INGRESA UN NUMERO");
			if (numeros == null){
				break;
			}
			numeros = parseInt(numeros);
		}

		if (bandera) {
			bandera = false;
			minimo = numeros;
			maximo = numeros;
		} else {
			if (numeros < minimo){
				minimo = numeros;
			}

			if (numeros > maximo){
				maximo = numeros;
			}
		}
		
		
		
		//minimo = Math.min(...numeros);
		//maximo = Math.max(...numeros);

		if (contador == respuesta) {
			break;
		}

	}


document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN
function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var contador=0;
	var acumulador=0;
	var respuesta;
	var iteracion = 0;
	respuesta = prompt("cuantos datos queres tomar?");
	iteracion = parseInt(respuesta);

	while(iteracion == respuesta) {
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


	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN
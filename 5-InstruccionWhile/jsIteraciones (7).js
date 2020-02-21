function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;
	var iterador = 0;
	respuesta = prompt("cuantos datos queres ingresar?");
	iterador = parseInt(respuesta);
	while(iterador == respuesta) {
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
		console.log(contador);
		/*if (respuesta == null) {
			break;
		}*/
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
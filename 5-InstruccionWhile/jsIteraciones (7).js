function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(true) {
		contador ++;
		var numero = prompt("ingrese un numero valido");
		numero = parseInt(numero);
		while(isNaN(numero)) {
			numero = prompt("ingrese un numero");
			numero = parseInt(numero);
		}

		acumulador += numero;
		respuesta = prompt("queres salir?");
		if(respuesta == "no") {
			continue;

		} else {
			break;
		}
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
function mostrar()
{
	//declaramos variables
	var contador=0;
	var acumulador=0;

	//iniciamos bucle
	while (contador < 5){
		contador ++;
		//tomamos datos por prompt
		var numero = prompt("ingrese numero");
		
		//validar
		numero = parseInt(numero);
		while(isNaN(numero)) { 
		numero = prompt("ingrese un numero valido");
		numero = parseInt(numero);

		}
		
		//acumulador
		acumulador += numero;
		
	}


//muestreo de datos
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
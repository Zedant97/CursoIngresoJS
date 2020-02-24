function mostrar()
{
	//declarar contadores y variables 
	var contador = 0;
	var contadorNeg = 0;
	var contadorPos = 0;
	var contadorceros = 0;
	var contadorPares = 0;
	var positivos = 0;
	var negativos = 0;
	var promedioPos;
	var promedioNeg;
	var diferencia;
	var respuesta;
	var iterador;
	var numeros;

	//pregunto los datos qe quiere ingresar
	respuesta = prompt("cuantos numeros queres ingresar?");
	iterador = parseInt(respuesta);

	//inicio bucle
	while(iterador == respuesta)
	{
		contador ++;
		numeros = prompt("ingrese numeros validos");
		//si ponen cancelar muere el bucle
		if (numeros == null) {
			break;
		}
		numeros = parseInt(numeros);
		
		//valido que sean numeros
		while (isNaN(numeros)){
			numeros = prompt("ingrese un numero!... no cualquier cosa");
			//si ponen cancelar muere el bucle
			if (numeros == null) {
				break;
			}
			numeros = parseInt(numeros);
		} 
		
		//operaciones
		//pregunto si los numeros son negativos o positivos
		if (numeros < 0) {
			//punto 1
			negativos += numeros;
			console.log(negativos);
			//punto 4
			contadorNeg ++;
		} else if (numeros > 0) {
			//punto 2
			positivos += numeros;
			console.log(positivos);
			//punto 3
			contadorPos ++;
		} else {
			//punto 5
			contadorceros ++;
		}
		
		//punto 6
		if (numeros % 2 == 0) {
			contadorPares ++;
		}

		//cierre de bucle entero
		if (contador == iterador) {
			break;
		}
	}

	//promedios
	//punto 7
	promedioPos = positivos / contadorPos;

	//punto 8
	promedioNeg = negativos / contadorNeg;

	//diferencia entre +/-
	//punto 9
	diferencia = positivos + negativos;
	console.log(diferencia);


	//muestreo de resultados mediante document.write
	document.write("1: la suma de los - es " + negativos + "<br>");
	document.write("2: la suma de los + es " + positivos + "<br>");
	document.write("3: la cantidad de + es " + contadorPos + "<br>");
	document.write("4: la cantidad de - es " + contadorNeg + "<br>");
	document.write("5: la cantidad de 0 es " + contadorceros + "<br>");
	document.write("6: la cantidad de pares es " + contadorPares + "<br>");
	document.write("7: el promedio de los + es " + promedioPos + "<br>");
	document.write("8: el promedio de los - es " + promedioNeg + "<br>");
	document.write("9: la diferencia entre +/- es " + diferencia);




}//FIN DE LA FUNCIÓN
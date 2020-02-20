function mostrar()
{

	//var numero = prompt("ingrese un número entre 0 y 10.");
	var contador = 0;

	while(numero < 0 || numero > 10 || isNaN(numero)) {
		var numero = prompt("ingrese un número entre 0 y 10.");
		numero = parseInt(numero);
		contador ++;
		console.log(contador);
		if (contador == 5) {
		break;
		}


	}
	document.getElementById("Numero").value = numero;	

	if(contador == 5){
	alert("pusiste 5 veces el numero mal");
}

}//FIN DE LA FUNCIÓN
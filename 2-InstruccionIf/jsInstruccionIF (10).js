function mostrar()
{
	var random;
	var randomparseado;

	random = Math.random() * 10 + 1;
	randomparseado = parseInt(random)
	if (randomparseado >=9 && randomparseado <=10) {
		alert(randomparseado + " exelente");
	} else {
		if(randomparseado > 4) {
			alert(randomparseado + " aprobo");
		} else {
			alert(randomparseado + " reprobado por tonto");
		}
	}
}//FIN DE LA FUNCIÓN
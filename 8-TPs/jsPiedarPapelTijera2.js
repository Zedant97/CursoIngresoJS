var eleccionMaquina;
var ContadorDeEmpates = 0;
var ContadorDeGanadas = 0;
var ContadorDePerdidas = 0;

var randomparseado;
function comenzar()
{
    eleccionMaquina = Math.random() * 3 + 1;
    randomparseado = parseInt(eleccionMaquina);

	


}//FIN DE LA FUNCIÓN

function piedra ()
{

	switch(randomparseado) {
        case 1:
			alert("Empataste!");
			ContadorDeEmpates ++;
			console.log(ContadorDeEmpates);
			break;
			
        case 2:
			alert("Perdiste!!");
			ContadorDePerdidas ++;
			console.log(ContadorDePerdidas);
            break;
        case 3:
			alert("Ganaste!!");
			ContadorDeGanadas ++;
			console.log(ContadorDeGanadas);
			break;
	}//FIN DE LA FUNCIÓN

	document.getElementById("ganadas").value = ContadorDeGanadas;
	document.getElementById("perdidas").value = ContadorDePerdidas;
	document.getElementById("empatadas").value = ContadorDeEmpates;

}
function papel()
{

    switch(randomparseado) {
        case 1:
			alert("Ganaste!");
			ContadorDeGanadas ++;
			console.log(ContadorDeGanadas);
            break;
        case 2:
			alert("Empataste!!");
			ContadorDeEmpates ++;
			console.log(ContadorDeEmpates);
            break;
        case 3:
			alert("Perdiste!!");
			ContadorDePerdidas ++;
			console.log(ContadorDePerdidas);
			break;

    }
	document.getElementById("ganadas").value = ContadorDeGanadas;
	document.getElementById("perdidas").value = ContadorDePerdidas;
	document.getElementById("empatadas").value = ContadorDeEmpates;
}//FIN DE LA FUNCIÓN

function tijera()
{

    switch(randomparseado) {
        case 1:
			alert("Perdiste!");
			ContadorDePerdidas ++;
			console.log(ContadorDePerdidas);
            break;
        case 2:
			alert("Ganaste!!");
			ContadorDeGanadas ++;
			console.log(ContadorDeGanadas);
            break;
        case 3:
			alert("Empataste!!");
			ContadorDeEmpates ++;
			console.log(ContadorDeEmpates);
			break;
    }
	
	document.getElementById("ganadas").value = ContadorDeGanadas;
	document.getElementById("perdidas").value = ContadorDePerdidas;
	document.getElementById("empatadas").value = ContadorDeEmpates;

}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById("ganadas").value = ContadorDeGanadas;
	document.getElementById("perdidas").value = ContadorDePerdidas;
	document.getElementById("empatadas").value = ContadorDeEmpates;

}
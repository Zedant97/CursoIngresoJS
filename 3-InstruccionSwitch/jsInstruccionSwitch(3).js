function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {
    case "Febrero":
        alert("Este mes ya no tiene 29 dias");
        break;
    default:
        alert("este mes tiene 30 dias");
        break;
}
	
	


}//FIN DE LA FUNCIÓN
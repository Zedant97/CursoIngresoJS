/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{
    var nombre;
    var edad;
    var concatenado;
    nombre = document.getElementById("elNombre").value;
	edad = document.getElementById("laEdad").value;
    concatenado = "te llamas " + nombre + " y tenes " + edad;
    alert(concatenado);
}


function mostrar()
{
var contador = 0;
var clave = prompt("ingrese el número clave.");

while (clave.toLowerCase() != "utn750") {
    contador ++;
    clave = prompt("ingrese el número clave.");
    if (contador == 2){
        break;
    }
   
}
if (contador == 2){
    alert("intentos completados " + contador );
} else {
    alert("bienvenidos");
}


}//FIN DE LA FUNCIÓN

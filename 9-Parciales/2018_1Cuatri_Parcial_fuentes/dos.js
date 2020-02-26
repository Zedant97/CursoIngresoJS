var nombre;
var localidad;


function mostrar()
{
    //tomo datos por ID
    nombre = document.getElementById("elNombre").value;
    localidad = document.getElementById("laLocalidad").value;

    //muestreo de resultados
    alert("Usted es " + nombre + " y vive en la localidad de " + localidad);
}

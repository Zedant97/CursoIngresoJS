function mostrar()
{
    var edad;
    var estadocivil;

    edad = document.getElementById("edad").value;
    estadocivil = document.getElementById("estadoCivil").value;

    if (edad < 18) {
        if(estadocivil != "soltero") {
            alert("es un pichon para no estar soltero");
        }
    }
 

	


}//FIN DE LA FUNCIÓN
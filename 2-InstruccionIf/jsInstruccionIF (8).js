function mostrar()
{
    var edad;
    var estadocivil;

    edad = document.getElementById("edad").value;
    estadocivil = document.getElementById("estadoCivil").value;

    if (edad < 18) {
        if(estadocivil != "soltero") {

        }
           
    } else {
        alert("es soltero y no es un pichon");
    }

}//FIN DE LA FUNCIÓN
function mostrar()
{
   var edad
//tomo la edad  
    edad = document.getElementById("edad").value;
    if (edad > 17){
        alert("sos mayor");
    } else {
        if (edad >= 13){
            alert("sos adolescente");
        } else {
            alert("sos menor");
        }
    }
          
   



}//FIN DE LA FUNCIÓN
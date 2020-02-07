/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    //declaracion de variables
    var dato1;
    var dato2;
    var suma;
    var resultado;
    
    //valores por id
    dato1 = document.getElementById("numeroUno").value;
    dato2 = document.getElementById("numeroDos").value;
    
    //suma
    suma = parseInt(dato1) + parseInt(dato2);
   
    //resultado
    resultado = suma;
    
    //muestreo
    alert("el resultado es " + resultado);


}


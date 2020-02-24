/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

//declaro las variables
var edad;
var sexo;
var estadocivil;
var sueldo;
var legajo;
var nacionalidad;
var bandera;


function ComenzarIngreso () 
{
    bandera = confirm("queres empezar a ingresar los datos requeridos?")
    while (bandera){
        //empiezo a tomar los datos
        
        do {
            edad = prompt("Que edad tiene?");
            edad = parseInt(edad);
        } while (edad < 18 || edad > 90);

        //valido que sean numeros lo que ingresen
        while (isNaN(edad)) {
            edad = prompt("solo ingrese numeros en la edad!");
            edad = parseInt(edad);
        }

      
        
        
    
        sexo = prompt("que sexo tiene?");

        //valido que el sexo que pongan solo sea F o M
        while (sexo.toLowerCase() != "f" && sexo.toLowerCase() != "m") {
            sexo = prompt("ingrese un sexo valido!");
        }

        //selector de sexo
        switch (sexo) {
            case "f":
                sexo = "Femenino"
                break;
            case "m":
                sexo = "Masculino"
                break;    
        }

        //verifico que pongan las opciones correctas
        do {
            estadocivil = prompt("estado civil? ");
            estadocivil = parseInt(estadocivil);

        } while (estadocivil < 1 || estadocivil > 4);
        
        //valido que pongan los datos que pide de 1 al 4
        while (isNaN(estadocivil)) {
            estadocivil = prompt("ingrese un dato valido!");
            estadocivil = parseInt(estadocivil);
        }

        
        //selector de estados
        switch (estadocivil) {
            case 1:
                estadocivil = "Soltero/a";
                break;
            case 2:
                estadocivil = "Casado/a";
                break;
            case 3:
                estadocivil = "Divorciado/a";
                break;
            case 4:
                estadocivil = "Viudo/a";  
                break;
                
        }

        //verifico que no sea un sueldo minimo a 8k
        do {
            sueldo = prompt("sueldo bruto?");
            sueldo = parseInt(sueldo);
        } while (sueldo < 8000);

        //valido que sea numeros lo que ingresen
        while (isNaN(sueldo)) {
            sueldo = prompt("ingrese un sueldo valido!");
            sueldo = parseInt(sueldo);
        }
        
        //valido que el legajo no sea mayor a 4 digitos
        do {
            legajo = prompt("numero de legajo?");
            legajo = parseInt(legajo);
        } while (legajo < 1 || legajo > 9999);
        
        //verifico que solo sea numeros lo que ingresen
        while (isNaN(legajo)) {
            legajo = prompt("legajo invalido")
            legajo = parseInt(legajo);
        }

        nacionalidad = prompt("que nacionalidad es?");
       
        //verifico que pongan datos validos
        while (nacionalidad.toLowerCase() != "a" && nacionalidad.toLowerCase() != "e" && nacionalidad.toLowerCase() != "n") {
            nacionalidad = prompt("ingrese una nacionalidad valida!");
        }
        
        //selector de nacionalidad
        switch (nacionalidad) {
            case "a":
                nacionalidad = "Argentino";
                break;
            case "e":
                nacionalidad = "Extranjero";
                break;
            case "n":
                nacionalidad = "Nacionalizado";
                break;
        }

        bandera = false;

    
    }    

    //muestreo de datos en las barras de texto
    document.getElementById("Edad").value = edad;
    document.getElementById("Sexo").value = sexo;
    document.getElementById("EstadoCivil").value = estadocivil
    document.getElementById("Sueldo").value = sueldo;
    document.getElementById("Legajo").value = legajo;
    document.getElementById("Nacionalidad").value = nacionalidad;
}

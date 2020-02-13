/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

 //declaracion de variables 
 var lamparas;
 var lamparasparseado;
 var resultado;
 var marca;
 var ingbruto;
 var ingbrutoT;
 var ingbrutoTparseado;
 var precio = 35;
 var D50 = 0.5;
 var D40 = 0.6;
 var D30 = 0.7;
 var D25 = 0.75;
 var D20 = 0.8;
 var D15 = 0.85;
 var D10 = 0.9;
 var D5 = 0.95;
function CalcularPrecio () 
{
     //punto A. tomo valor por ID
     lamparas = document.getElementById("Cantidad").value;
     marca = document.getElementById("Marca").value;

     //parseo de datos
     lamparasparseado = parseInt(lamparas);

     //operaciones y muestreo de datos. tambien le incorporamos el punto E
     if (lamparas >= 6) {
        //realizo el descuento del 50%
        resultado = lamparasparseado * precio * D50;
        document.getElementById("precioDescuento").value = resultado;
        if (resultado > 120) {
            //calculo el total agregandole el 10% de IIBB
            ingbrutoT = resultado * 1.1;
            ingbrutoTparseado = parseInt(ingbrutoT);
            //calculo el 10% del total para poder mostrarlo el alert
            ingbruto = resultado * 0.1;
            //muestreo de resultados
            document.getElementById("precioDescuento").value = ingbrutoTparseado;
            alert("IIBB que usted pago es de $" + ingbruto);
        }
     } else {
         resultado = lamparasparseado * precio;
         document.getElementById("precioDescuento"). value = resultado;
     }

     //punto B. operaciones y muestreo. tambien le incorporamos el punto E
     if (lamparas == 5) {
         if (marca == "ArgentinaLuz") {
             //realizo el descuento del 40%
             resultado = lamparasparseado * precio * D40;
             document.getElementById("precioDescuento").value = resultado;
         } else {
             //realizo el descuento del 30%
             resultado = lamparasparseado * precio * D30;
             document.getElementById("precioDescuento").value = resultado;
             if (resultado > 120) {
                //calculo el total agregandole el 10% de IIBB
                ingbrutoT = resultado * 1.1;
                ingbrutoTparseado = parseInt(ingbrutoT);
                //calculo el 10% del total para poder mostrarlo en alert
                ingbruto = resultado * 0.1;
                //muestreo de resultados
                document.getElementById("precioDescuento").value = ingbrutoTparseado;
                alert("IIBB que usted pago es de $" + ingbruto);
            }
             

         }
     }
     //punto C. operaciones y muestreo
     if (lamparas ==  4) {
         if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
             //realizo el descuento del 25%
             resultado = lamparasparseado * precio * D25;
             document.getElementById("precioDescuento").value = resultado;
         } else {
             //realizo el descuento del 20%
             resultado = lamparasparseado * precio * D20;
             document.getElementById("precioDescuento").value = resultado;
         }
     }
     //punto D. operaciones y muestreo
     if (lamparas == 3) {
         if (marca == "ArgentinaLuz"){
             //realizo el descuento del 15%
             resultado = lamparasparseado * precio * D15;
             document.getElementById("precioDescuento").value = resultado;
         } else {
             if (marca == "FelipeLamparas") {
                 //realizo el descuento del 10%
                 resultado = lamparasparseado * precio * D10;
                 document.getElementById("precioDescuento").value = resultado;
             } else {
                 //realizo el descuento del 5%
                 resultado = lamparasparseado * precio * D5;
                 document.getElementById("precioDescuento").value = resultado;
             }
         }
     }
     
     
}

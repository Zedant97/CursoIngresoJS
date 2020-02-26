var precio;
var descuento;
var preciofinal;


function mostrar()
{
    precio = prompt("cual es le precio?");
    precio = parseInt(precio);
    descuento = prompt("de cuanto es el descuento que queres hacer?");
    descuento = parseInt(descuento);

    preciofinal = (precio * descuento) / 100;
    preciofinal = precio - preciofinal;

    document.getElementById("elPrecioFinal").value = preciofinal;

}

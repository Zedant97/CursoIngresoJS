var precio;
var descuento;
var preciofinal;


function mostrar()
{
    do {
        precio = prompt("cual es le precio?");
        if (precio == null) {
            break;
        }
        precio = parseInt(precio)
       
    } while (isNaN(precio));

    do {
        descuento = prompt("de cuanto es el descuento que queres hacer?");
        if (descuento == null) {
            break;
        }
        descuento = parseInt(descuento);
        
    } while (isNaN(descuento));

    if (descuento != 0) {
        preciofinal = (precio * descuento) / 100;
        preciofinal = precio - preciofinal;
    } else {
        document.getElementById("elPrecioFinal").value = precio;
    }
    
    document.getElementById("elPrecioFinal").value = preciofinal;
}

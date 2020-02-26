var planeta;

function mostrar()
{
    planeta = prompt("ingrese un planeta del sistema solar");

    switch (planeta) {
        case "mercurio":
        case "venus":
            alert("aca hace mucho calor");
            break;
        case "tierra":
            alert("aca vivimos");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
            alert("aca hace mas frio!");
            break;
        default:
            alert("no es un planeta lo que ingresaste IMBECIL!");
            break;
    }
}

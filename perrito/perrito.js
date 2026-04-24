let nombreP = prompt("Nombre del perrito:");
let edadP = prompt("Que edad tiene el perrito:");
console.log(nombreP+" tiene un nombre Genial!!! Sabias que tu perrito tiene "+edadP*7+" años humanos?");
if (nombreP < 10) {
    console.log("Tu perrito es un cachorro!!!");
} else if (nombreP >= 10 && nombreP < 20) {
    console.log("Tu perrito es un adulto!!!");
} else {
    console.log("Tu perrito es un anciano!!!");
}
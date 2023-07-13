function catalogo (){
    console.log("Catagolo");
    console.log("N° 1 ---> Vela de soja ---> $25");
    console.log("N° 2 ---> Perfume de ambiente ---> $30");
    console.log("N° 3 ---> Bandeja ceramica ---> $50");
}

let siono;
let productoelegido;
let cantidadelegida;
let acumulador;
let montototal = 0;
let flagprograma;

catalogo();
flagprograma = prompt("Desea agregar un producto? y/n")

while (flagprograma == "y") {
    productoelegido = Number(prompt("Ingrese el N° de producto elegido"));

    switch (productoelegido) {
        case 1:
            acumulador = 25;            
            break;
        case 2:
            acumulador = 30;
            break;
        case 3:
            acumulador = 50;
            break;    
        default:
            acumulador = 0;
            break;
    }

    cantidadelegida = Number(prompt("Ingrese la cantidad deseada"));

    montototal = montototal + (acumulador*cantidadelegida);

    flagprograma = prompt("Desea agregar otro producto? y/n");
    
}

console.log("Su total a pagar es: $" + montototal + ".");
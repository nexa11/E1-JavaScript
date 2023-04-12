
// EJERCICIO 1
function esImpar (number = 0) {
    return (number % 2 !== 0) ? `El número ${number} es impar` : `El número ${number} es par`
}
console.log(esImpar(9));
console.log(esImpar(14));

// EJERCICIO 2

var n1 = 14;
var n2 = 56;
if (n1 > n2) {
console.log(`${n1} es mayor que ${n2}`);
} else {
console.log(`${n2} es mayor que ${n1}`);
} 
if (n1 === n2) {
    console.log("Estos números son iguales");
}

// EJERCICIO 3

var multiplo = 50;

if (multiplo % 5 == 0) {
    console.log(`${multiplo} es multiplo de 5`);
} else {
    console.log(`${multiplo} no es multiplo de 5`);
}

// EJERCICIO 4
let = 0
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// EJERCICIO 5

let = "Messi"
for (let = 0; let < 10; let++) {
    console.log("Messi");
}
// EJERCICIO 6

let juegos = [
    "Mortal Kombat",
    "Resident Evil 4",
    "Fifa 23",
    "Horizon Zero Dawn",
    "God of War",
];

console.log(juegos);

// EJERCICIO 7

let numeros = [1,2,3,4,5,6,7,8,9,10,]

for (let saltear of numeros) {
    if (saltear === 6){
        continue;
    }
    console.log(saltear);
}

// EJERCICIO 8

/* let numArray = [2,3,5]
let multiplicador = 3

function multiplicar {
    for (let multiplicador = 0; numArray < 15; numArray++)
    console.log();
}


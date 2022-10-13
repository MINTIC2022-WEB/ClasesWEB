//alert("Este es un aviso importante");

//Variables
var nombre1 = "Alvaro";
let variable2 = 48;
const constante3 = 3.14;

console.log(nombre1);
console.log(variable2);
console.log(constante3);

//Arreglos
let arreglo = [];
arreglo[0] = "Camilo";
arreglo[1] = 23;
arreglo[2] = "skapool@gmail.com";

console.log(arreglo);
console.log(typeof arreglo[1]);

//Estructuras de control
const myName = "Alvaro";
let edad = 48;
let mensaje = "";

if(edad >= 18){
    mensaje = "Eres mayor de edad";
} else {
    mensaje = "Eres menor de edad";
}

console.log(mensaje);

for (let i=0; i < arreglo.length; i++){
    console.log(arreglo[i]);
}
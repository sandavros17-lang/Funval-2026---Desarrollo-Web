console.log("hola compita")

/*
comentarios
en
varias
lineas
*/
console.log("INICIO DEL PROGRAMA"); //imprimir cosas en la consola

//-------------------------------------------------------------
// TIPOS DE DATOS
let edad: number = 32;
let apPaterno: string = 'Rodriguez';
let salva: boolean = false;
let resultado: null = null;
let noDefinido: undefined;
let                numeroGigante: bigint = 12873612874612674n;
let idUnico:symbol=Symbol("id");

//exclusivos TYPESCRIP
let comodin:any = 'texto';
      comodin=32
comodin = true;

     let dato:unknown = "mesaje";
let vacio: void;

//aprender a crear constantes y variables

//variables, se pueden reasinganar mas no cambiar el tipo de dato
let telefono = "samsung";
telefono ="Xiaomi";

let superHeroe = "spiderman";
superHeroe = "batman";

//constantes NO SE PUEDEN REASIGNAR
const pi=  3.1416;


//ojo!!!!!!!
var prohibido = "NO USAR"

/////------------simbolos de operacion--------------
// + 
let nombreCompleto = "Kevin" +" "+ "Rodriguez";
//console.log (nombreCompleto);
let a=2;
let b=4;
let SuperResultado =a+b;

// - 
SuperResultado =a-b;

// *
SuperResultado =a*b;

//  / division

SuperResultado =b/a;

// % residuo

SuperResultado =b%a;

// **  Potencia

SuperResultado =b**a;


console.log (SuperResultado);

// SIMBOLOS DE COMPARACION siempre retorna un boolean
let comparacion = a == b; // igual que
comparacion = a != b; // diferente que
comparacion = a > b; // mayor estricto
comparacion = a >= b; // mayor igual que
comparacion = a < b; // menor estricto
comparacion = a <= b; // menor igual que

// SIMBOLOS DE AUTOASIGNACION

let random = 2;
random++; // random = random + 1
random--; // random = random - 1
random += 5; // random = random + 5
random -= 5; // random = random - 5
random *= 5; // random = random * 5
random /= 5; // random = random / 5

// operadores logicos
let compracion = a == b && b < 4; // AND
compracion = a == b || b < 4; // OR
compracion = !(a == b); // NEGACION

/* ----------------------------- */
let estudiante = "Esdras Blanco";
let nota1 = 90;
let nota2 = 75;
let nota3 = 5;
let promedio = (nota1 + nota2 + nota3) / 3;
console.log(
  "el estudiante " + estudiante + " tiene un promedio de: " + promedio
);

/* mi amigo pepe tiene un taller automotriz y un parqueo de vehiculos
  el cobra x hora 20$ el quiere saber cuanto debera cobrar a un vehiculo q se
  queda una cantidad n de horas*/

let costoHora: number = 20;
let horasP: number = 5; // Puedes cambiar este valor por la cantidad de horas ("n")

let totalCobrar: number = horasP * costoHora;

console.log(
  "El vehículo duro " + horasP + " horas en el parqueadero y debe pagar un total de $" + totalCobrar +"  Favor cancelar al salir"
);
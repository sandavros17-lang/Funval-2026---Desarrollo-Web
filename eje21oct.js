/*
    ejercicion 1
    
    quiero q puedan realizar una calculadora de multiplicacion
    pero sin  el simbolo *
    4*5 = 5+5+5+5 o 4+4+4+4+4
*/
var n1 = 3;
var n2 = 5;
var resultado = 0;
for (var i = 1; i <= n2; i++) {
    resultado += n1;
}
console.log('el resultado de ' + n1 + ' * ' + n2 + '  es:' + resultado);
/*
    ejercio 2
    sacar el factorial de un numero
    !5 = 1*2*3*4*5
*/
var numeroF = 3;
var acumulador = 1;
for (var i = 1; i <= numeroF; i++) {
    acumulador *= i;
}
console.log('El factorial de ' + numeroF + ' es: ' + acumulador);
//------------ARRAYS--------------------
var estudiantesFunval = ["Gustavo", "Roberto", "Sara", "Jesus", "Esdras", "Oscar", "Enrique"];
console.log(estudiantesFunval[3]);
//------------------METODO ARRAYS ---------------
var cantEstudiantes = estudiantesFunval.length; // contar la cantidad de elementos que tiene la lista
console.log(cantEstudiantes);
estudiantesFunval.push("kevin", "jeremy"); // agrega elementos al final de la lista
estudiantesFunval.unshift("mike"); // agrega elementos al inicio de la lista
var estudianteEliminado = estudianteFunval.pop(); //elimina el ultimo elemento de la lista y lo retorna
var estudianteDelete = estudiantesFunval.shift(); //eliminar el primer elemento de la lista
console.log(estudianteEliminado);
console.log(estudiantesFunval);
// ------------ MDN WEB --- Metodos para arrays----
//-- **********REGLA DE ORO ******************--
// --*******---- CADA VEZ QUE QUE NOS ENCONTRAMOS CON UN ARRAY O LISTAS, DEBEMOS ITERAR ( )
var frutas = [
    "manzana",
    "pera",
    "papaya",
    "chirimoya",
    "frutilla",
    "banana",
    "uva",
];
for (var inicio = 0; inicio < frutas.length; inicio++) {
    if (frutas[inicio] === "uva") {
        console.log("felicidades si esta la uva en tu array");
    }
}

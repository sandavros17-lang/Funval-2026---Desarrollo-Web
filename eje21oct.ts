/* 
    ejercicion 1
    
    quiero q puedan realizar una calculadora de multiplicacion
    pero sin  el simbolo *
    4*5 = 5+5+5+5 o 4+4+4+4+4
*/

let n1: number = 3;
let n2 : number = 5;
let resultado: number = 0;

for (let i = 1; i <= n2; i++) {
    resultado += n1;
    }
console.log('el resultado de '+ n1 +' * '+n2+'  es:'+ resultado);

/* 
    ejercio 2
    sacar el factorial de un numero
    !5 = 1*2*3*4*5
*/
let numeroF: number = 3;
let acumulador: number = 1;

for (let i = 1; i <= numeroF; i++) {
    acumulador *= i;
}
console.log('El factorial de '+numeroF +' es: '+acumulador);



//------------ARRAYS--------------------

let estudiantesFunval: string []=["Gustavo","Roberto","Sara","Jesus","Esdras","Oscar","Enrique"]

console.log(estudiantesFunval[3]);

//------------------METODO ARRAYS ---------------

let cantEstudiantes =  estudiantesFunval.length;  // contar la cantidad de elementos que tiene la lista
console.log(cantEstudiantes);

estudiantesFunval.push("kevin","jeremy");  // agrega elementos al final de la lista

estudiantesFunval.unshift("mike"); // agrega elementos al inicio de la lista

let estudianteEliminado = estudiantesFunval.pop(); //elimina el ultimo elemento de la lista y lo retorna

let estudianteDelete = estudiantesFunval.shift(); //eliminar el primer elemento de la lista


console.log(estudianteEliminado);

console.log(estudiantesFunval);

// ------------ MDN WEB --- Metodos para arrays----

//-- **********REGLA DE ORO ******************--

// --*******---- CADA VEZ QUE QUE NOS ENCONTRAMOS CON UN ARRAY O LISTAS, DEBEMOS ITERAR ( )

let frutas: string[] = [
"manzana",
"pera",
"papaya",
"chirimoya",
"frutilla",
"banana",
"uva",
];

for(let inicio=0;inicio<frutas.length;inicio++){
    if (frutas[inicio] === "uva"){
        console.log("felicidades si esta la uva en tu array");
    }
}


/* Los estudiantes funval estan trayendote sus listas de notas
algunos dieron 2 examenes, algunos 4, algunos 6 
deberas devolver el promedio de notas del estudiante

*/

let notas: number []= [90,98]; 
let suma = 0;

for( let i=0; i< notas.length; i++){
suma+= notas[i];

}
let promedio = suma/notas.length;
console.log("el promedio es"+ promedio);


interface estudiante {
    nombre: string;
    apPaterno: string;
    edad: number;
    pais: string;
    celular: number;
    notas: number[];
}

let estudianteFunvalero: estudiante = {
    nombre: "Roberto",
    apPaterno: "Trinidad",
    edad: 20,
    pais: "Paraguay",
    celular:3005407360,
    notas:[95,35,55,75,0],
};

let notaFinal: number=0;
for(let i=0; i< estudianteFunvalero.notas.length;i++){
    notaFinal += estudianteFunvalero.notas[i];
    
}

notaFinal /= estudianteFunvalero.notas.length;

console.log(
  "el promedio del estudiante " +
    estudianteFunvalero.nombre +
    " es: " +
    notaFinal,
);

/* -----------------ejercicio---------------------- */

interface estudiante {
    nombre: string;
    apPaterno: string;
    edad: number;
    pais: string;
    celular: number;
    notas: number[];
}


const estudiantes: estudiante[] = [
  {
    nombre: "Mateo",
    apPaterno: "González",
    edad: 19,
    pais: "Bolivia",
    celular: 71234567,
    notas: [85, 90, 78],
  },
  {
    nombre: "Valentina",
    apPaterno: "Rodríguez",
    edad: 21,
    pais: "Argentina",
    celular: 1123456789,
    notas: [92, 88],
  },
  {
    nombre: "Santiago",
    apPaterno: "Martínez",
    edad: 18,
    pais: "Colombia",
    celular: 3101234567,
    notas: [75, 80, 95, 89, 91],
  },
  {
    nombre: "Camila",
    apPaterno: "Fernández",
    edad: 22,
    pais: "Perú",
    celular: 987654321,
    notas: [100],
  },
  {
    nombre: "Diego",
    apPaterno: "Silva",
    edad: 20,
    pais: "Chile",
    celular: 912345678,
    notas: [65, 72, 80, 85],
  },
  {
    nombre: "Isabella",
    apPaterno: "Santos",
    edad: 19,
    pais: "Brasil",
    celular: 11987654321,
    notas: [95, 93, 87],
  },
  {
    nombre: "Sebastián",
    apPaterno: "Hernández",
    edad: 23,
    pais: "México",
    celular: 5512345678,
    notas: [70, 68],
  },
  {
    nombre: "Luciana",
    apPaterno: "Pérez",
    edad: 18,
    pais: "Uruguay",
    celular: 99123456,
    notas: [88, 91, 84, 96, 79, 90],
  },
  {
    nombre: "Gabriel",
    apPaterno: "Castro",
    edad: 24,
    pais: "Ecuador",
    celular: 991234567,
    notas: [55, 70, 65],
  },
  {
    nombre: "Mariana",
    apPaterno: "López",
    edad: 20,
    pais: "Paraguay",
    celular: 981234567,
    notas: [98, 94, 89, 92],
  },
];

let sumaPromedio: number =0;

console.log("----Estado actual de los estudiantes----:-D");

for (let i = 0; i < estudiantes.length; i++) {
    const est = estudiantes[i];
    let sumaNotas: number = 0;
    
    for (let j = 0; j < est.notas.length; j++) {
        sumaNotas += est.notas[j];
    }
    const promedioEstudiante: number = sumaNotas / est.notas.length;
    sumaPromedio += promedioEstudiante;

    if (promedioEstudiante > 60) {
        console.log(" Aprobado: "+ est.nombre +" "+ est.apPaterno + "  |   Promedio: "+ promedioEstudiante.toFixed(2) );
    } else {
        console.log(" No Aprobado: "+ est.nombre +" "+ est.apPaterno + "  |   Promedio: "+ promedioEstudiante.toFixed(2) );
    }
}

const promedioGeneral: number = sumaPromedio / estudiantes.length;


console.log("Promedio general del grupo "+ promedioGeneral);

/* 
  quiero saber el promedio de todos los estudiantes y ver a los estudiantes q esten aprobados
  un estudiante esta aprobado cuando su promedio es mayor a 60


  mateo promedio 65  aprobado
  mariana promedio 35  reprobado
*/

/* ----- Funciones ----*/

//  Funcion que recibe pero no retorna nada

function saludar():void{

  console.log("hola amigos funvaleros");

}
saludar();

// funcion que recibe un dato pero no retorna nada

function saludar2 (nombre:  string): void{
    console.log ("hola buenas tardes amigo "+ nombre);

}
saludar2("santiago");

// funcion que no recibe nada pero retorna un valor

function saludo3( ):string{
    let mensaje ="buenas tardes estoy retornando un string";
    return mensaje;
}
let respuesta = saludo3 ();
console.log(respuesta);

// funciones que reciben parametros o datos y retornan un valor

function promedios(notas: number[]): number {
    let res = 0;
    for (let i = 0; i < notas.length; i++) {
        res += notas[i];
    }
    res /= notas.length;
    return res;
}

console.log(promedios([35, 48, 95]));
console.log(promedios([15, 25, 1, 0]));
console.log(promedios([99, 85, 100, 90]));

// Determinar cuando una palabra es palindroma (es decir que se lee igual de izquiera a derecha que de derecha a izquierda)


let frase = "Anita lava la tina";

//Parte 1 dar la vuelta

function darvuelta (frase: string): string{
    let volteado="";
    for(let i =frase.length-1; i>=0; i--){
        volteado = volteado + frase[i];

}
return volteado;
}
console.log(darvuelta(frase));

// Parte 2 Quitar espacios

function eliminarEspacio (frase:string):string{
    let sinEspacio ="";
    for(let i=0; i>frase.length; i++){
  if (frase[i])
    }
    
}
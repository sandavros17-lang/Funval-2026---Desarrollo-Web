import * as readline from 'readline/promises';

async function main() {
    const rl = readline.createInterface({
        input: process.stdin as any,
        output: process.stdout as any
    });

    //2. Arreglo vacio
    const tareas: string[] = [];
    let continuar = true;

// 3 Funcionamiento  rl.question()
// const answer = await rl.question("¿Cuál es tu nombre? ");
// console.log(`Hola, ${answer}!`);
//  rl.close();


while (continuar) {
        console.log("\n=== MENU DE TAREAS ===");
        console.log("1. Agregar tarea");
        console.log("2. Eliminar ultima tarea");
        console.log("3. Listar tareas");
        console.log("4. Salir");

        const opcion = await rl.question("Selecciona una opción (1-4): ");

if (opcion === "1") {
            const nuevaTarea = await rl.question("Escribe el titulo de la tarea: ");
            if (nuevaTarea.trim() !== "") {
                tareas.push(nuevaTarea);
                console.log(" Su Tarea ha sido agregada");
            } else {
                console.log("El titulo no puede estar vacío.");
            }
        } 
        else if (opcion === "2") {
            if (tareas.length > 0) {
                const eliminada = tareas.pop();
                console.log(`Tarea eliminada: "${eliminada}"`);
            } else {
                console.log("No hay tareas en la lista para eliminar.");
            }
        } 
        else if (opcion === "3") {
            if (tareas.length === 0) {
                console.log("La lista de tareas esta vacia.");
            } else {
                console.log("\nTus tareas:");
                for (let i = 0; i < tareas.length; i++) {
                    console.log(`${i + 1}. ${tareas[i]}`);
                }
            }
        } 
        else if (opcion === "4") {
            console.log("Adios que tenga buen dia!");
            continuar = false;
        } 
        else {
            console.log("Opcion invalida.   Por favor, escoge un número entre 1 y 4.");
        }
    }

rl.close();
}

main();


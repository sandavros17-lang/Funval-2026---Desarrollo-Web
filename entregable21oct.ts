const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

// 1. Interfaz Tarea
interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
}

// 3. Arreglo principal y contador de IDs únicos
let tareas: Tarea[] = [];
let siguienteId: number = 1;

// 4. Arrow functions para cada acción
const agregarTarea = (titulo: string): void => {
  const nuevaTarea: Tarea = {
    id: siguienteId++,
    titulo: titulo,
    completada: false
  };
  tareas.push(nuevaTarea);
  console.log(" Tarea "+ titulo + " agregada correctamente (ID: " + nuevaTarea.id );
};

const listarTareas = (): void => {
  if (tareas.length === 0) {
    console.log("No hay tareas en la lista");
    return;
  }

  console.log('\n--- Lista de Tareas ---');
  for (const tarea of tareas) {
    const estado = tarea.completada ? " completada" : " pendiente ";
    console.log('[' + tarea.id + '] ' + tarea.titulo + ' - ' + estado);
  }
};

const eliminarTarea = (id: number): void => {
  const indiceTarea = tareas.findIndex((tarea) => tarea.id === id);

  if (indiceTarea === -1) {
    console.log("No se encontró ninguna tarea con el ID: " + id);
    return;
  }

  const tareaEliminada = tareas[indiceTarea];
  tareas.splice(indiceTarea, 1);
  console.log("Tarea eliminada: " + tareaEliminada.titulo  );
};

// Ciclo principal del menú
const principal = async () => {
  const lector = readline.createInterface({ input, output });
  let ejecutando = true;

  while (ejecutando) {
    console.log("--- Menú de Gestión de Tareas ---");
    console.log("1. Agregar tarea");
    console.log("2. Listar tareas");
    console.log("3. Eliminar tarea");
    console.log("4. Salir");

    const opcion = await lector.question("Selecciona una opción: ");

    switch (opcion.trim()) {
      case "1": {
        const titulo = await lector.question("Ingresa el título de la tarea: ");
        if (titulo.trim()) {
          agregarTarea(titulo.trim());
        } else {
          console.log("El título no puede estar vacío");
        }
        break;
      }
      case "2": {
        listarTareas();
        break;
      }
      case"3": {
        if (tareas.length === 0) {
          console.log("No hay tareas para eliminar");
          break;
        }
        
        listarTareas();
        const entradaId = await lector.question("Ingresa el ID de la tarea a eliminar: ");
        const id = parseInt(entradaId.trim(), 10);

        if (isNaN(id)) {
          console.log("Ingresa un número de ID válido");
        } else {
          eliminarTarea(id);
        }
        break;
      }
      case "4": {
        console.log("Hasta luego");
        ejecutando = false;
        break;
      }
      default: {
        console.log("Opción no válida. Intenta de nuevo");
        break;
      }
    }
  }

  lector.close();
};

principal();
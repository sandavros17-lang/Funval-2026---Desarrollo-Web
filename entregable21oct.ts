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
  const nuevaTarea:Tarea = {
    id: siguienteId++,
    titulo: titulo,
    completada: false
  };
  tareas.push(nuevaTarea);
  console.log(" Tarea "+ titulo + " agregada correctamente (ID: " + nuevaTarea.id+" ) ");
};

const listarTareas = (arregloDeTareas: Tarea[] = tareas): void => {
  if (arregloDeTareas.length === 0) {
    console.log("No hay tareas en la lista");
    return;
  }

  console.log('\n--- Lista de Tareas ---');
const tareasFormateadas = arregloDeTareas.map(tarea => {
    const { id, titulo, completada } = tarea; // Desestructuración
    const estado = completada ? " completada" : " pendiente ";
    return '[' + id + '] ' + titulo + ' - ' + estado;
  });

  tareasFormateadas.forEach(tareaString => {
    console.log(tareaString);
  });


};

const eliminarTarea = (id: number): void => {
  const indiceTarea = tareas.findIndex((tarea) => tarea.id === id);

  if (indiceTarea === -1) {
    console.log("No se encontro ninguna tarea con el ID: " + id);
    return;
  }

  const tareaEliminada = tareas[indiceTarea];
  tareas.splice(indiceTarea, 1);
  console.log("Tarea eliminada: " + tareaEliminada.titulo  );
};

const marcarCompletada = (id: number): void => {
  const tarea = tareas.find(t => t.id === id);

  if (tarea) {
    tarea.completada = true;
    console.log(`¡Tarea "${tarea.titulo}" marcada como completada!`);
  } else {
    console.log(`No se encontro ninguna tarea con el ID: ${id}`);
  }
};

const filtrarPendientes = (): Tarea[] => {
  return tareas.filter(t => !t.completada);
};

const filtrarCompletadas = (): Tarea[] => {
  return tareas.filter(t => t.completada);
};

// Ciclo principal del menú
const principal = async () => {
  const lector = readline.createInterface({ input, output });
  let ejecutando = true;

  while (ejecutando) {
    console.log("--- Menu de Gestion de Tareas ---");
    console.log("1. Agregar tarea");
    console.log("2. Listar tareas");
    console.log("3. Eliminar tarea");
    console.log("4. Marcar tarea como completada");
    console.log("5. Ver tareas pendientes");
    console.log("6. Ver tareas completadas");
    console.log("7. Salir");


    const opcion = await lector.question("Selecciona una opcion: ");

    switch (opcion.trim()) {
      case "1": {
        const titulo = await lector.question("Ingresa el titulo de la tarea: ");
        if (titulo.trim()) {
          agregarTarea(titulo.trim());
        } else {
          console.log("El titulo no puede estar vacio");
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
        const entradaId = await lector.question("Ingresa el ID de la tarea que deseas eliminar: ");
        const id = parseInt(entradaId.trim(), 10);

        if (isNaN(id)) {
          console.log("Ingresa un número de ID valido");
        } else {
          eliminarTarea(id);
        }
        break;
      }case "4": {
        if (tareas.length === 0) {
          console.log("No hay tareas en la lista");
          break;
        }
        listarTareas();
        const entradaId = await lector.question("Ingresa el ID de la tarea que quieres marcar como completada: ");
        const id = parseInt(entradaId.trim(), 10);

        if (isNaN(id)) {
          console.log("Ingresa un número de ID valido");
        } else {
          marcarCompletada(id);
        }
        break;
      }
      case "5": {
        const pendientes = filtrarPendientes();
        listarTareas(pendientes);
        break;
      }
      case "6": {
        const completadas = filtrarCompletadas();
        listarTareas(completadas);
        break;
      }
      case "7": {
        console.log("Hasta luego");
        ejecutando = false;
        break;
      }
      default: {
        console.log("Opcion no valida porfavor Intenta de nuevo");
        break;
      }
    }
  }

  lector.close();
};

principal();    
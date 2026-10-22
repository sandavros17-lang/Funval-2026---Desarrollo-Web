var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var tareas = [];
var siguienteId = 1;
var agregarTarea = function (titulo) {
    var nuevaTarea = {
        id: siguienteId++,
        titulo: titulo,
        completada: false
    };
    tareas.push(nuevaTarea);
    console.log('\nTarea "' + titulo + '" agregada correctamente (ID: ' + nuevaTarea.id + ').');
};
var listarTareas = function () {
    if (tareas.length === 0) {
        console.log('\nNo hay tareas registradas.');
        return;
    }
    console.log('\n--- Lista de Tareas ---');
    for (var _i = 0, tareas_1 = tareas; _i < tareas_1.length; _i++) {
        var tarea = tareas_1[_i];
        var estado = tarea.completada ? 'completed' : 'pending';
        console.log('[' + tarea.id + '] ' + tarea.titulo + ' - ' + estado);
    }
};
var eliminarTarea = function (id) {
    var indiceTarea = tareas.findIndex(function (tarea) { return tarea.id === id; });
    if (indiceTarea === -1) {
        console.log('\nNo se encontró ninguna tarea con el ID: ' + id);
        return;
    }
    var tareaEliminada = tareas[indiceTarea];
    tareas.splice(indiceTarea, 1);
    console.log('\nTarea eliminada: "' + tareaEliminada.titulo + '"');
};
// Ciclo principal del menú
var principal = function () { return __awaiter(_this, void 0, void 0, function () {
    var lector, ejecutando, opcion, _a, titulo, entradaId, id;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                lector = readline.createInterface({ input: input, output: output });
                ejecutando = true;
                _b.label = 1;
            case 1:
                if (!ejecutando) return [3 /*break*/, 11];
                console.log('\n--- Menú de Gestión de Tareas ---');
                console.log('1. Agregar tarea');
                console.log('2. Listar tareas');
                console.log('3. Eliminar tarea');
                console.log('4. Salir');
                return [4 /*yield*/, lector.question('Selecciona una opción: ')];
            case 2:
                opcion = _b.sent();
                _a = opcion.trim();
                switch (_a) {
                    case '1': return [3 /*break*/, 3];
                    case '2': return [3 /*break*/, 5];
                    case '3': return [3 /*break*/, 6];
                    case '4': return [3 /*break*/, 8];
                }
                return [3 /*break*/, 9];
            case 3: return [4 /*yield*/, lector.question('Ingresa el título de la tarea: ')];
            case 4:
                titulo = _b.sent();
                if (titulo.trim()) {
                    agregarTarea(titulo.trim());
                }
                else {
                    console.log('\nEl título no puede estar vacío.');
                }
                return [3 /*break*/, 10];
            case 5:
                {
                    listarTareas();
                    return [3 /*break*/, 10];
                }
                _b.label = 6;
            case 6:
                if (tareas.length === 0) {
                    console.log('\nNo hay tareas para eliminar.');
                    return [3 /*break*/, 10];
                }
                listarTareas();
                return [4 /*yield*/, lector.question('Ingresa el ID de la tarea a eliminar: ')];
            case 7:
                entradaId = _b.sent();
                id = parseInt(entradaId.trim(), 10);
                if (isNaN(id)) {
                    console.log('\nIngresa un número de ID válido.');
                }
                else {
                    eliminarTarea(id);
                }
                return [3 /*break*/, 10];
            case 8:
                {
                    console.log('\n¡Hasta luego!');
                    ejecutando = false;
                    return [3 /*break*/, 10];
                }
                _b.label = 9;
            case 9:
                {
                    console.log('\nOpción no válida. Intenta de nuevo.');
                    return [3 /*break*/, 10];
                }
                _b.label = 10;
            case 10: return [3 /*break*/, 1];
            case 11:
                lector.close();
                return [2 /*return*/];
        }
    });
}); };
principal();

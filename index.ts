import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

// 🚫 No eliminar las líneas de arriba ⬆️
// ✍️ Escribe tu código aquí 👇

let systemName: string = "Funval System";
let version: number = 1.0;
let userName: string = "Santiago";

console.log("==================================");
console.log(systemName + "  v" + (version + 0.1));
console.log("¡Bienvenido, " + userName + "!");
console.log("==================================");

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();
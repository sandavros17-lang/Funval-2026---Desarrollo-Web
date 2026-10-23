/*console.log("buenos dias amigos de funval"); //juan
console.log("vamos a empezar la clase"); //maria
console.log("creamos un ejemplo"); //charlie
console.log("explicamos el ejemplo"); //pedro
console.log("hacemos ejercicios"); //judas

//---------------- set time out--------------

setTimeout(()=> {
    console.log("kevin llego 2 segundos tarde");

}, 3000);
*/
//------------asincronia-------------

setTimeout(()=> {
    console.log("kevin llego a la taqueria");

}, 3000);
setTimeout(()=> {
    console.log("jorge llego a la taqueria");

}, 2000);
setTimeout(()=> {
    console.log("belen llego a la taqueria");

}, 20000);

setTimeout(()=> {
    console.log("jeremy llego a la taqueria");

}, 10000);
// ------------problema de la asincronia

interface Estudiante{
    id:number;
    nombre:string;
    pais: string;
    celular: number;
}

let listaEstudiantesFunvaleros: Estudiante[] = [
  { id: 1, nombre: "Kevin", pais: "Bolivia", celular: 71234567 },
  { id: 2, nombre: "María", pais: "Perú", celular: 987654321 },
  { id: 3, nombre: "Carlos", pais: "Colombia", celular: 301234567 },
  { id: 4, nombre: "Lucía", pais: "Argentina", celular: 1123456789 },
  { id: 5, nombre: "Andrés", pais: "Chile", celular: 912345678 },
  { id: 6, nombre: "Valentina", pais: "Ecuador", celular: 991234567 },
  { id: 7, nombre: "Diego", pais: "México", celular: 5512345678 },
  { id: 8, nombre: "Camila", pais: "Paraguay", celular: 981234567 },
  { id: 9, nombre: "Mateo", pais: "Uruguay", celular: 99123456 },
  { id: 10, nombre: "Sofía", pais: "Venezuela", celular: 4121234567 },
  { id: 11, nombre: "Gabriel", pais: "Brasil", celular: 11987654321 },
  { id: 12, nombre: "Isabella", pais: "Costa Rica", celular: 88881234 },
];



function traerData (){
    setTimeout(() =>{
            return listaEstudiantesFunvaleros;

    
}, 2000);
}
console.log(traerData());


//----------Promesas----------

function traerData (): Promise < Estudiante[]>{
    return new Promise ((resolve, reject)=>{
        setTimeout( ()=> {
            const conexionExitosa= true;
            if(conexionExitosa){
                resolve (listaEstudiantesFunvaleros);

            }else{
                reject (new Error ("error 500: fallo la conexion a la base de datos"));
            }
        },2000);
    });
}

/* -----------------CONSUMIR PROMESA----------------- */
traerData()
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });

/* -------------------- async y await -------------------- */
async function ejecutarConsulta(): Promise<void> {
    try {
        //si la promesa se cumple
        console.log("Cargando datos.....");
        const listaFunval = await traerData();
        console.log(listaFunval);
    } catch (error) {
        //si la promesa falla
        console.log(error);
    }
}
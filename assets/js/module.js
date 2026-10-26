import pelota from "./json.json" with { type: "json" };
import {asincronia, promesa, intento} from './async.js'


// MANEJO DE JSON
// console.log(pelota);
// console.log(pelota.peso);
// console.log(pelota.fabricante.direccion)


// MANEJO DE PROMESAS

// funcion asincrona simple
const objeto= await asincronia(pelota)

console.log(objeto.textura)


// lectura de promesas

promesa()
.then(response=>{
    console.log(response)
})
.catch(err=>{
    console.error(err)
})
.finally(
    console.log("finalmente")
)

// TRY/CATCH, el try intenta ejecutar todo lo que esta dentro y si algo sale mal se salta todo y va directo al catch, para evitar que el codigo se rompa y controlar el error, parecido a la forma en la que usamos el "then/catch"
intento(pelota)

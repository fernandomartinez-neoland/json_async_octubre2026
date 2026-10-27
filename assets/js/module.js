import pelota from "./json.json" with { type: "json" };
import { asincronia, promesa, intento, pokefuncion } from "./async.js";

// MANEJO DE JSON
// console.log(pelota);
// console.log(pelota.peso);
// console.log(pelota.fabricante.direccion)

// MANEJO DE PROMESAS

// funcion asincrona simple
const objeto = await asincronia(pelota);

console.log(objeto.textura);

// lectura de promesas

// promesa()
// .then(response=>{
//     console.log(response)
// })
// .catch(err=>{
//     console.error(err)
// })
// .finally(
//     console.log("finalmente")
// )

// // TRY/CATCH, el try intenta ejecutar todo lo que esta dentro y si algo sale mal se salta todo y va directo al catch, para evitar que el codigo se rompa y controlar el error, parecido a la forma en la que usamos el "then/catch"
// intento(pelota)
 
// consulta FETCH

const resultado = document.getElementById("result");
// const img = document.createElement("img");
// const esperar = (ms) => new Promise(resolve=>setTimeout(resolve, ms));

for (let i =1; i <= 151; i++) {
 fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
      // resultado.innerHTML+=`<img src="${response.sprites.other['official-artwork'].front_shiny}">`
      // console.log(response.sprites.other["official-artwork"].front_shiny);
      // img.src = response.sprites.other["official-artwork"].front_shiny;
      // resultado.appendChild(img);
    })

    .catch((error) => {
      // img.src =
      //   "https://as1.ftcdn.net/v2/jpg/05/12/16/70/1000_F_512167072_tfte9ElGy4DSyaIRtRoOtLcDe7LIot4c.jpg";
      // resultado.appendChild(img);
    });
    // await esperar(1000)
}


pokefuncion();

// console.log(pokeapi)

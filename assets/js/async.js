// funcion asincrona simple
export async function asincronia(pelota) {
  return pelota;
}

// PROMESA
export async function promesa() {
  const validado = false;
  return new Promise((response, reject) => {
    if (validado != false) {
      response("todo bien");
    } else {
      reject("todo mal");
    }
  });
}

export function intento(pelota) {
  try {
    // codigo
    console.log(pelota);
    console.log(pelotas.direccion);
    console.log(pelota.fabricante.direccion);
  } catch (e) {
    // freno de emergencia
    throw new Error(e);
  }
}

export async function pokefuncion() {
  const resultado = document.getElementById("result");

  for (let i = 1; i <= 151; i++) {
    const pokelista = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokemon = await pokelista.json();

    resultado.innerHTML += `<p>${pokemon.name} - Nº ${pokemon.id}</p>
    <img src="${pokemon.sprites.other["official-artwork"].front_shiny}">
    `;
    console.log(pokemon);
  }
}

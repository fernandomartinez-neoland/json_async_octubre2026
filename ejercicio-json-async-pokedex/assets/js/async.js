const resultado = document.getElementById("result");

let card = document.getElementById("card");
let card__img = document.getElementById("card_img");
let card__nombre = document.getElementById("card__nombre");
let card__tipo = document.getElementById("card__tipo");
let dialogo = document.getElementById("dialogo");

export async function pokefuncion() {
  for (let i = 1; i <= 10; i++) {
    const pokelista = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokemon = await pokelista.json();

    resultado.innerHTML += `<div class="card" name="${pokemon.name}">
      <p >${pokemon.name} ${pokemon.id < 10 ? "#00" : pokemon.id >= 10 && pokemon.id < 100 ? "#0" : "#"}<span>${pokemon.id}</span></p>
      <img src="${pokemon.sprites.other["official-artwork"].front_shiny}">
      </div>
      `;
  }
  const pokeModal = document.getElementById("modal-pokemon");
  resultado.addEventListener("click", (event) => {
    // console.log("werwer")
    const tarjeta = event.target.closest(".card");

    if (!tarjeta) {
      return;
    }
    // console.log(tarjeta.target)
    const titulo = tarjeta.querySelector("span").textContent;
    const id = titulo.trim().split(" #00").pop();

    console.log("ID del Pokémon:", id);

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json()) // <- ESTO FALTABA
      .then((response) => {
        // Ahora 'response' sí tiene los datos del Pokémon
        const tipos = response.types.map((tipo) => tipo.type.name).join(" / ");

        // CREAR LA TARJETA
        // 2. Cambiar 'id' por 'data-id' en el div principal
        console.log(response.id);

        pokeModal.style.display = "block";
        const pokedetalle = document.getElementById("detalle-pokemon");
        pokedetalle.innerHTML = `<img src="${response.sprites.other["official-artwork"].front_shiny}">
        <p >${response.name} ${response.id < 10 ? "#00" : response.id >= 10 && response.id < 100 ? "#0" : "#"}<span>${response.id}</span></p>
        <p>${tipos}</p>
        
        `;

        
      })
      .catch((error) => {
        console.error("Error al cargar el Pokémon:", error);
      });
  });

  const modalClose = document.getElementById("cerrar-modal");

  modalClose.addEventListener("click", () => {
    pokeModal.style.display = "none";
  });
}

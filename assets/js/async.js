// funcion asincrona simple
export async function asincronia(pelota) {
  return pelota;
}

// PROMESA
export async function promesa() {
  const validado = false;
  return new Promise((response, reject) => {
    if (validado!=false) {
      response("todo bien");
    } else {
      reject("todo mal");
    }
  });
}

export function intento(pelota){
    try{
        // codigo
        console.log(pelota)
        console.log(pelotas.direccion)
        console.log(pelota.fabricante.direccion)
    }catch(e){
        // freno de emergencia
        throw new Error(e);
    }
}
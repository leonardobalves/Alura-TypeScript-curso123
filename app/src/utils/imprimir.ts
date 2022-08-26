import { Imprimivel } from "./imprimivel.js";

export function imprimir(...obejetos: Imprimivel[]) {
    for(let objeto of obejetos) {
        console.log(objeto.paraTexto());
    }
}
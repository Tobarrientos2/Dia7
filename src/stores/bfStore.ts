import { readable } from "svelte/store";
import { bf } from "../data/bf.json"

//Crear Readable
export const bfReadable = readable({}, (set) => {
    set(bf)

});

let iADBeneficios_arr;
export const bfUnsubscribe = bfReadable.subscribe((data) => {
    iADBeneficios_arr = data;
});



console.log(iADBeneficios_arr);
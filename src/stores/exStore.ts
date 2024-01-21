import { readable } from "svelte/store";
import ex from "../data/ex.json"


//Crear Readable
export const exReadable = readable({}, (set) => {
    set(ex);
});


export function getExperiences(){
    let iACExperiences_arr;

    let iACExperiences = exReadable.subscribe((data) => {
        iACExperiences_arr =  data[0];
    });
    console.log(iACExperiences_arr);
    // let pACTitle_txt = pACFirstExperience_obj.ex_1;
    // let pACDLightDescription_txt = pACFirstExperience_obj.ex_2;
return 
};




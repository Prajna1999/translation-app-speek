import { countries } from "../src/countries.js";

const selectTag=document.querySelectorAll("select");

selectTag.forEach((tag,id)=>{
    
  
    for(let country_code in countries){
        
        let option=`<option value="${country_code}">${countries[country_code]}</option>`
        tag.insertAdjacentHTML("beforeend", option);
    }
    
});


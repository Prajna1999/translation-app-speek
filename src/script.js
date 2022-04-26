import { countries } from "../src/countries.js";

const selectTag=document.querySelectorAll("select");

selectTag.forEach((tag,id)=>{
    
  
    for(let country_code in countries){
        
        let selected;
        if(id==0){
            selected=country_code=="en-GB"?"selected":"";
        }else if(id==1){
            selected=country_code=="hi-IN"?"selected":""
        }


        let option=`<option value="${country_code}" ${selected}>${countries[country_code]}</option>`
        tag.insertAdjacentHTML("beforeend", option);
    }
    
});


import { countries } from "../src/countries.js";

const selectTag=document.querySelectorAll("select");
const fromText=document.querySelector(".from-text");
const toText=document.querySelector(".to-text");
const translateBtn=document.querySelector("button");

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

translateBtn.addEventListener("click", ()=>{
    const url="https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it";

    fetch(url)
        .then(response=>{
            if(!response.ok){
                throw new Error("Error: something went wrong!")
            }
            return response.json();
            
        }).then(result=>{
            console.log(result);
        })
})

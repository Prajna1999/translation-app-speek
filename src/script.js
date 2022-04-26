import { countries } from "../src/countries.js";

const selectTag=document.querySelectorAll("select");
const fromText=document.querySelector(".from-text");
const toText=document.querySelector(".to-text");
const translateBtn=document.querySelector("button");
const exchangeBtn=document.querySelector(".exchange");
const iconBtn=document.querySelectorAll(".icons i");

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
    
    const fromTextValue=fromText.value.trim();
    const translateFrom=selectTag[0].value;
    const translateTo=selectTag[1].value;
    const url=`https://api.mymemory.translated.net/get?q=${fromTextValue}&langpair=${translateFrom}|${translateTo}`;
    fetch(url)
        .then(response=>{
            if(!response.ok){
                throw new Error("Error: something went wrong!")
            }
            return response.json();
            
        }).then(result=>{
            // console.log(result);
            if(result.responseData.translatedText==="nan"){
                alert("Something is Wrong");
            }else{
                toText.value=result.responseData.translatedText;
                result.matches.forEach(data => {
                    if(result.id ==0) {
                        toText.value = result.translation;
                    }
                });
                toText.setAttribute("placeholder", "Translation...");
            }
            
        })
        
});
exchangeBtn.addEventListener("click", ()=>{
    // swap both text area and language values.
    let temp=fromText.value;
    fromText.value=toText.value;
    toText.value=temp;

    let templang=selectTag[0].value;
    selectTag[0].value=selectTag[1].value;
    selectTag[1].value=templang;
    

});

iconBtn.forEach(icon=>{
    icon.addEventListener("click", (e)=>{
       console.log(e.target.classList)
    })
})

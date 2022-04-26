const selectTag=document.querySelectorAll("select");



selectTag.forEach(tag=>{
    
    for(let country_code in countries){
        console.log(countries[country_code])
        let option=`<option value="${country_code}">${countries[country_code]}</option>`
        tag.insertAdjacentHTML("beforebegin", option);
    }
    
});


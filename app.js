const names=document.querySelector("#name")
const input=document.querySelector('#input')
const capital=document.querySelector('#capital')
const region=document.querySelector('#region')
const lang=document.querySelector('#lang')
const currence=document.querySelector('#currence')
const population=document.querySelector('#population')
const area=document.querySelector('#area')

input.addEventListener('change',(e)=>setValue(e.target.value))
function setValue(value){
    fetch(`https://restcountries.com/v2/name/${value}`)
.then((response)=>response.json())
.then((data)=>setDatas(data))
.catch((err)=>alert("Bunaqa davlat topilmadi."))
}
function setDatas(e){
    names.innerHTML=`${e[0].name}`,
    capital.innerHTML=`${e[0].capital}`,
    region.innerHTML=`${e[0].region}`,
    lang.innerHTML=`${e[0].languages[0].nativeName}`,
    currence.innerHTML=`${e[0].currencies[0].symbol}`,
    population.innerHTML=`${e[0].population}`,
    area.innerHTML=`${e[0].area}`,
    document.querySelector('#img').src=`${e[0].flag}`;
} 

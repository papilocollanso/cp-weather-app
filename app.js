

document.addEventListener("DOMContentLoaded",(e)=>{
    

 document.getElementById("search").addEventListener("change",(e)=>{

   values=e.target.value;


 });

 document.getElementById("submit").addEventListener("click",(e)=>{
     const api=`https://api.openweathermap.org/data/2.5/weather?id=524901&lang=en&q=${values}&appid=4223da40a79bd1bd66ed30bea41117c7`

    fetch(api).then(x=>x.json()).then(y=>fullDetails(y));

   function fullDetails(data){
   
     const  {country} = data.sys;
     const  {name} = data;
     


       const countryShortName=document.getElementById("short");
       const countryFullName=document.getElementById("name");
       const number=document.getElementById("number");
    //image


       const descriptions=document.getElementById("desc");
       countryShortName.innerText=country;
       countryFullName.innerText=name + " "
       number.innerText=Math.floor(`${data.main.temp}`) ;
       descriptions.innerText=data.weather[0].description;
       var skycons = new Skycons({"color": "white"});
   const iconID=document.querySelector("#icon1")
       skycons.play();
   return skycons.set(iconID,Skycons.RAIN);
   }

  
e.preventDefault();
 });






});


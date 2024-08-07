const btn =document.getElementById("btn");
const cty =document.getElementById("cityname");
const ctyinfo = document.getElementById("displaycity");
const tempinfo = document.getElementById("tmpinfo");
const timeinfo = document.getElementById("localtime");

async function getdata( cityname){
     const  promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=23dc27e2cd36408ca75130328240708&q=${cityname}&aqi=yes
`);

     return await promise.json();

}
btn.addEventListener("click",async ()=>{
    const input = cty.value;
    const value =  await getdata(input);
  
     ctyinfo.innerText = ` Location: ${value.location.name},${value.location.region},${value.location.country}`;

     tempinfo.innerText =`Temp(degree c): ${value.current.temp_c};`
     timeinfo.innerText = `Time:${value.location.localtime};`
}
);


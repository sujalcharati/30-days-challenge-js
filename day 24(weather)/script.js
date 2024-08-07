const btn =document.getElementById("btn");
const cty =document.getElementById("cityname");
const ctyinfo = document.getElementById("displaycity");
const tempinfo = document.getElementById("tmpinfo");
const timeinfo = document.getElementById("localtime");

async function getdata( cityname){
     const  promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=23dc27e2cd36408ca75130328240708&q=${cityname}&aqi=yes
`);
// async function getdata1( cityname1){
//  const promise1 = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=23dc27e2cd36408ca75130328240708&q=${cityname1}&days=5&aqi=no&alerts=no
// `)
     return await promise.json();

}
btn.addEventListener("click",async ()=>{
    const input = cty.value;
    const value =  await getdata(input);
    // console.log(value);
   
    // document.getElementById("displayinfo").textContent=JSON.stringify(value.location.name);
     ctyinfo.innerText = ` Location: ${value.location.name},${value.location.region},${value.location.country}`;

     tempinfo.innerText =`Temp(degree c): ${value.current.temp_c};`
     timeinfo.innerText = `Time:${value.location.localtime};`
}
);


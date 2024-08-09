const button = document.getElementById("btn");
const displayinfo = document.getElementById("displayinfo ");
const inputs = document.getElementById("inputs");


async function getfilmdata(filmname){
    const promise =await fetch(`https://www.omdbapi.com/?s= ${filmname}&apikey=e5a1dde5`);
    return await promise.json();
    
}


button.addEventListener("click", async ()=>{
 const input =inputs.value;
 const datashow = await getfilmdata(input);
 displayinfo.innerText=`${datashow.Title}`;

})
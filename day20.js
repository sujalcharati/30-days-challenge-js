// task 1
localStorage.setItem("college","pmec");
let val =localStorage.getItem("college");
console.log(val);
 
// task 2
 const myobj ={
    name:"sujal",
    class:"grad"
 }
  const retobj =JSON.stringify(myobj);
  localStorage.setItem("myobj",retobj);
 const retriveobj =localStorage.getItem("myobj");
 let val1 =JSON.parse(retriveobj);
 console.log(val1);
//  task3 
const buttonaccess =document.getElementById("#btn");
buttonaccess.addEventListener("onclick",displayinfo());
function displayinfo(){

    const userinput ={
        name:name,
        email:email
    };
    const email =document.getElementById("#email").Value;
    const name =document.getElementById("#name").Value;
    localStorage.setItem("userinput",JSON.stringify(userinput));
    gettingItem();
}
 

function gettingItem(){
    const displaypara =document.getElementById("#displaypara");
    
const saveinput =localStorage.getItem(userinput);
if(saveinput){
    const saveinput1 =JSON.parse(saveinput);
    displaypara.textContent=`name:${saveinput1.name},
    email:${saveinput1.email}`;
}
    else{
    displaypara.textContent="no data saved";

    }

}
// task 5
sessionStorage.setItem("college","pmec");
let val3 =sessionStorage.getItem("college");
console.log(val3);


// task 6
const myobj1 ={
    name:"sujal",
    class:"grad"
 }
  const retobj11 =JSON.stringify(myobj);
  sessionStorage.setItem("myobj",retobj);
 const retriveobj1 =sessionStorage.getItem("myobj");
 let val4 =JSON.parse(retriveobj);
 console.log(val4);


//  task 7
const buttonaccess1 =document.getElementById("#btn");
buttonaccess1.addEventListener("onclick",displayinfo());
function displayinfo(){

    const userinput ={
        name:name,
        email:email
    };
    const email =document.getElementById("#email").Value;
    const name =document.getElementById("#name").Value;
    sessionStorage.setItem("userinput",JSON.stringify(userinput));
    gettingItem();
}
 

function gettingItem(){
    const displaypara =document.getElementById("#displaypara");
    
const saveinput =sessionStorage.getItem(userinput);
if(saveinput){
    const saveinput1 =JSON.parse(saveinput);
    displaypara.textContent=`name:${saveinput1.name},
    email:${saveinput1.email}`;
}
    else{
    displaypara.textContent="no data saved";

    }

}

// task 9
function comparision(){
localStorage.setItem("college","pmec");
let val =localStorage.getItem("college");
console.log(val);
sessionStorage.setItem("college","pmec");
let val3 =sessionStorage.getItem("college");
console.log(val3);

}
console.log(comparision());
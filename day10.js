// task1
const button =document.querySelector('#mybutton');
button.addEventListener("click",addCli);
function addCli(){
    
    document.getElementById("item").innerHTML="after";
}
// task2
const img = document.querySelector("img");
img.addEventListener("dblclick",()=>{
    img.style.visibility="hidden";
});
// task3 and task 4
const button1 =document.querySelector('#mybutton1');
button1.addEventListener("mouseover",mouse);
function mouse(){
    
  button1.style.backgroundColor="blue"
}

button1.addEventListener("mouseout",mouse1);
function mouse1(){
    
  button1.style.backgroundColor="white"
}

// task 5
// const key1 =document.querySelector('#key');
// key1.addEventListener("keydown",mouse);
// function mouse(){
    
// console.log("key is pressed");
// }
// task 6
 const input = document.querySelector("#key");
 const para = document.querySelector("#item");

 input.addEventListener("keyup",mouse);
function mouse(){
    console.log(para.textContent=input.value);
}
// task 7
 const form = document.querySelector("#form1");

 form.addEventListener("submit",mouse);
function mouse(){
     var val = document.querySelector("#fname").value;
    console.log(val);
}
// task8
const car = document.querySelector("#cars");
const paras = document.querySelector("#para");

 car.addEventListener("change",mouse);
function mouse(){
  paras.textContent=car.value;
}
// task9
// task10 
const form2 =document.querySelector("form1");
form2.addEventListener("submit",mouse);
function mouse(){
    let val =document.createElement("button");
    form2.document.querySelector("#input").style.backgroundColor="blue";

}






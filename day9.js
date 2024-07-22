// task1
const val = document.getElementById('texting');
console.log(val);
val.innerHTML="it's day 9";
// task2
const val1 = document.getElementsByClassName('colour');
val1.style.backgroundColor="blue";
// task3
const val2 = document.createElement('div');
const newdiv =document.createTextNode("this is the third task");
val2.appendChild(newdiv);
// task4
const val3 =document.createElement('li');
const newli =document.createTextNode("one item");
val3.appendChild('newli');
document.getElementById('myul').appendChild(val3);
// task5
const elem =document.querySelectorAll("p");
elem.remove();
// task6
const elem1=document.querySelectorAll("p");
elem.lastElementchild.remove();
// task7
let elements = document.getElementById( "myul" );
elements.setAttribute( "id", "myli" );
// task8
document.getElementById("intro").className = "newClass";
// task9
const btn = document.querySelector("#btn1");
btn.addEventListener("click",btns);
function btns(){
    document.querySelector("#texting").innerHTML="it's day 10";
}
// task10
const mouse1 = document.querySelector("#mouse");
mouse1.addEventListener("mouseover",mouse);
function mouse(){
    mouse1.style.borderColor="blue";
}







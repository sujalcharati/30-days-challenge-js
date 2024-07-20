// task1
Name =`sujal`;
age= `20`;
console.log(`${Name},${age}`);
// task2
multilineString = `sujal is trying to be the 
servant of god `;
console.log(multilineString);
// task3 
const arr = [1,2,3,4,5]
const [a1,a2] =arr;
console.log(a1,a2);
// task4
const bookobj1 = {
    title: "my gold medal",
    authour: "jesse owens",
    year: "2000"
}
 const {title,authour}=bookobj1;
 console.log(title,authour);
//  task5
 const existarr =[1,2,3,4]
 console.log([5,6,7,...existarr]);
//  task6
function restoperator(...[a,b,c]){
return a+b+c;

}
console.log(restoperator9(1,2,3));
// task7
function multiply(a,b=1){
    return a*b;
}
console.log(multiply(5,3));
console.log(multiply(5));
// task8 and task9
var name = "sujal"; 
var gender="male"; 
var age = 20;  
var speak = function(){
    console.log("hey im sujal");
}
var human = {name, gender, age,speak}; 
human.speak();






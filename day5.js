// task1
function evenOdd(num) {
    if (num % 2 == 0)
        console.log("even number");
    else
        console.log("odd number");
}
const final = evenOdd(7);
// task2
function square(num) {
    return num * num
}
const result = square(6);
console.log(result);
// task3
function ismaximum(num1, num2) {
    return Math.max(num1, num2);
}
const res = ismaximum(6, 8);
console.log(res);
// task4
function stringConcatenate(String1, String2) {
    return String1 + " " + String2;
}
const ans = stringConcatenate("sujal", "charati");
console.log(ans);
// task5
const sum = (a, b) => {
    return a + b;

}

console.log(sum(5, 6));
// task6
const ispresent = (name) => {
    let val = name.includes('u');
    return val;
}
console.log(ispresent("sujal"));
// task7
const product = (a, b) => {
    return a * b;
}
let val = product(3, 4);
console.log(val);
task8
const student=()=>{
    Name="sujal"
    age=20;

      return "you are"`${Name}` ,"and you are age is "`${age}` ;
}
let info = student();
console.log(info)
task9
const outerfxn = (num,innerfxn) => {
    
    for (i = 0; i <= num; i++) {
         innerfxn();
    }
    

const hello=()=>{
    console.log("hello !")
 }
 }
 outerfxn(hello,4);
// task10
 function stepfxn(f1,f2,val){
    return f2(f1(val))

 }
 function addfive(x){
    return x+5;
 }
 function thrice(x){
    return x*3;
 }
 const results =stepfxn(addfive,thrice,4);
 console.log(results);







// task1
function err() {
    throw "msg delete"
}
try {
    err();
}
catch (ex) {
    console.log("sujal error", ex);
}
// task2
function dividing(a, b) {
    return a / b;

}
try {
     throw dividing(1, 0);
}
catch (val) {
    console.log("error occured",val);

}
// task3
try {
    throw "this is first error"
}
catch (val) {
   console.log("this is second\n ",val);

}
finally{
    console.log("this is third ");
}
// task4
// task5
// task6
let Promises =new Promise(function(reject){
console.error("hi im using catch fxn");
});
Promises.catch(()=>{
console.log(Promises);
})
// task7
let Promise1 =new Promise(function(reject){
console.error("hi im using try catch with async function fxn");
});
async function mypromise(){
    try{
throw "error"
    }
    catch(val){
console.log(val);
    }
}
mypromise();
// task8
let p=fetch("http://dog-api.kinduff.com/api/fa");
p.then(function(){
    return p.json();
});
p.catch(console.log("the api request was invalid"));
// task9
async function mypromise(){
    let p=fetch("http://dog-api.kinduff.com/api/fa");
try{
    throw("error is with link")
}
catch(val){
console.error("the llink depriciated",val);
}
}





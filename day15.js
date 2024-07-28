//task1
function outerfxn(){
    let name="sujal";
    return function innerfxn(){
         return name;

    }
    
}
const val=outerfxn();
console.log(val());
// task2 
    let counter =0;

// function outerfxn(){
//     counter+=1
//     console.log(`counting${counter}`)
//      let fin =setInterval(counter,1000);
    
//    return function innerfxn(){
//          return fin;

//     }
    
// }
// const finalCounter =outerfxn();
// console.log(finalCounter());
 
// task3
 function generateUniqueid(){
    let id =0;
    return function Uniqueid(){
        id+=1;
        return id;
        
    }
 }
 const val1 =generateUniqueid();
console.log(val1());


//  task4
function userName(){
     let user="sujal";
     return function greeting(){
        return `hey ${user}!`
         }
}
const naming = userName();
console.log(naming());
// task 5
const arr = [1,2,3,4]
for(i=0;i<arr.length;i++){
    function loop(){
        return function innerloop(){
            return i=1;
        }
    }
}
const looping =loop();
console.log(looping());
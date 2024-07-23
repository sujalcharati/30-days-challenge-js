// task1
let time = new Promise(function (resolve) {

    setTimeout(() => {

        resolve("hi i'm sujal charati");
    }, 2000);
})
time.then(function () {
    console.log(time);
})
// task2
let time1 = new Promise(function (reject) {

    setTimeout(() => {

        console.error("hi sujal charati");
    }, 2000);
})
time1.catch(function () {
    console.log(time);
})
// task3
let time2 = new Promise(function (resolve) {

    setTimeout(() => {

        resolve("hi i'm sujal charati");
    }, 2000);
})
time2.then(function () {
    console.log(time);
}).then(function () {
    console.log("my name is krishna");
}).then(function () {
    console.log("my name is radha");
}
)
// tas4 
let time3 = new Promise(function (resolve) {


    resolve("hi i'async charati");

});
async function main() {
    const val = await time3;
    console.log(val);

}
main();
// task5  
let time4 = new Promise(function (reject) {


    console.error("hi charati");

});
async function main() {
    try {

        const val = await time3;
    }
    catch {

        console.log(val);
    }

}
main();
// task6 
let pro = fetch(" http://dog-api.kinduff.com/api/facts");
pro.then((val1)=>{
    return val1.json()
}).then((val2)=>{
console.log(val2);
}
)
// task7
const apiCall = async () => {
    const apiCallPromise  = await 
    fetch('https://api.example.com/data');
    const apiCallObj = await apiCallPromise.json();
    return apiCallObj;
 };
 




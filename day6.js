// task1
const arr = [1, 2, 3, 4, 5]
console.log(arr)
// task2
const arr1 = [1, 2, 3, 4, 5]
console.log(arr1[0]);
console.log(arr1[4]);
// task3
const arr2 = [1, 2, 3, 4, 5]
arr2.push(6);
console.log(arr2);
// task4
const arr3 = [1, 2, 3, 4, 5]
arr3.pop;
console.log(arr3);
// task5
const arr4 = [1, 2, 3, 4, 5]
arr4.shift(1);
console.log(arr4);
// task6
const arr5 = [1, 2, 3, 4, 5]
arr5.unshift(0);
console.log(arr5);
// task7
const arr6 = [1, 2, 3, 4, 5];
let newarr = arr6.map(func);
function func(num) {
    return num * 2;
}
console.log(newarr);
// task8
let arr7 = [1, 2, 3, 4, 5, 6];
let newarr1 = arr7.filter(even);
function even(num) {
    return num % 2 == 0;

}
console.log(newarr1);
// task9
let arr8 = [1, 2, 3, 4, 5, 6];
let newarr2 = arr7.reduce(sum);
function sum(num) {
    sum = 0;
    for (i = 1; i <= arr8.length; i++) {
        sum += arr8[i]
    }
    return sum;

}
console.log(newarr2);
// ṭask10
const iteration =[1,2,3,4,5]
for(i=0;i<=5;i++){
    console.log(iteration[i]);
}
// task11
const iteration1 =[1,2,3,4,5]
iteration1.forEach(myfunc);

function myfunc(){
    let val =iteration1(i);
    return val
}
// task12
const twodiarray=[[1,2,3,4,5,6]]
for(i=0;i<=twodiarray.length;i++){
    console.log(twodiarray);
}
// task13
const twodiarray1=[[1,2,3,4,5,6]]

console.log(twodiarray1[2]);









const { functions } = require("lodash");

// task 1
function twoSum(arr,target){
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[i]+arr[j]==target){
            return `the required indices are ${i} and ${j}`;
        }
    }
}
}
let target =5;
const arr =[1,2,3,4,5];
const requiredindices = twoSum(arr,5);
console.log(requiredindices);

// task 2
 function reverseInteger(int){
     let str =int.toString();
     let strsplit = str.split('');
     let revstr = strsplit.reverse();
     
     if(int<0){
         return `-${revstr}`;
        }
        return revstr;

 }
 console.log(reverseInteger(35));

//  task 3
function isPalindrome(num){
    const str = num.toString();
    if(num<0)
        return false;
    let left =0;
    let right = str.length-1;
    while(left<right){
        if(str[left]!==str[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome(132));

// task 4
// task 5
function validparentheses(string){
let openbra =" ";
for( let char of string){
    if(char==='(' || char==='{' || char==='['){

        openbra += char;
    }

    else{
        const closingbra = openbra(openbra.length-1);
        if((char===')')&& (closingbra==='(')||(char==='}')&& (closingbra==='{') || (char===']')&& (closingbra==='['));
    }
}

}


// task 1
const factorial = (x)=>{
    if(x==0){
        return 1;
    }
    else{

        return x* factorial(x-1);
    }

}
console.log(factorial(3));

// task 2
const fibonaci =(n)=>{
if(n<=2){
    return 1;
}
else{
    return fibonaci(n-1) + fibonaci(n-2);
}
}
console.log(fibonaci(5));

// task 3
 const sumArray =(i)=>{
 const arr =[1,2,3,4,5]
 if(i< arr.length){

     return arr[i] + sumArray(i+=1);
 }
 }

console.log(sumArray(0))

// task 4 
const arr =[1,2,3,6,4,5];
const maximumElement =(i)=>{
    if(i>=arr.length){
        return 1;

    }
    else{
        return Math.max(arr[i],maximumElement(i+=1));

    }
}
console.log(maximumElement(0));

// task 5
const str = "sujal";
const reverseString=(i)=>{
    if(i>=str.length){
        return 1;
 }
    else{
          return str[i] ,reverseString( i-=1)
}
}
console.log(reverseString(4));
// task 6
function isPalindrome(str){
    if(str.length <=1){
        return  true;
    }

     if(str[0] === str[str.lenght-1]) {
          return isPalindrome(str.slice(1,str.length-1));
        }
    else{
        return false;
    }
}
 console.log(isPalindrome("radar"));
//  task7 
function findBinaryelement(beg,end,target,arr){
    while(beg<=end){
        mid= beg+end/2;
        if(arr[mid]==target)
        {
            return 'element found'
        }
        else if (arr[mid]> target) {
            return findBinaryelement(beg,mid-1,target,arr);
            
        } else {
            return findBinaryelement(mid+1,end,target,arr);

        }
    }
}
console.log(findBinaryelement(0,arr.length-1,3, [1,2,3,4,5]))
// task8 
function frequencyCounter(i,target){
    const arr = [1,2,3,3,4]
       if(arr[i]== target){
         return i;
         
       }
       if(i<arr.length){
        return frequencyCounter(i+=1,target);
       }
}
console.log(frequencyCounter(0,2));

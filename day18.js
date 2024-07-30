// task 2
function swap(arr,first,second){
    var temp= arr[first];
    arr[first]=arr[second];
    arr[second]=temp;
}
function selectionSort(arr,n){
    for(let i=0;i<n;i++){
        min=i;
        for(j=i+1;j<n;j++){
            if(arr[j]<arr[min]){
                min=j;
                swap(arr,min,i)
            }
        }
    }
}
 const arr=[5,4,3,2,1];
 const out =selectionSort(arr,5);
 console.log("the sortred array is:",out);

//  task 4
function linearSearch(arr1,n,target){
    for(i=0;i<n;i++){
       if(arr1[i]==target){
         var got =1;
         break;
       }
           }
           if(got==1){
            return `the elementis found at index${i}`
           }
           else{
            return `the element is not found`
           }
    }

const arr1 = [1,2,3,4,5];
const target =4

console.log(linearSearch(arr1,5,target));
//  task 5
function findBinaryelement(beg,end,target,arr){
    while(beg<=end){
        mid= beg+end/2;
        if(arr[mid]==target)
        {
            return "element found at index"+ `${mid}`
        }
        else if (arr[mid]> target) {
            return findBinaryelement(beg,mid-1,target,arr);
            
        } else {
            return findBinaryelement(mid+1,end,target,arr);

        }
    }
}
console.log(findBinaryelement(0,arr.length-1,3, [1,2,3,4,5]));

// task6 
function frequencyCounter(target,string){
    for(i=0;i<string.length;i++){
        var got=0
        if(string[i]==target){
            got+=1;
          
          
        }
    }
    if(got!=0){
        return "the character's frequency is"+ `${got}`;
    }
    else{
        return "the element is not found ";
    }
}
console.log(frequencyCounter("a","sujalcharati"));

// task 9


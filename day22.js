// task 2
var lengthOfLongestSubstring = function (s) {
    
    let currentString = [];
    let longestStringLength = 0;

    for (let i = 0; i < s.length; i++) {
        const currentCharacterPosition = currentString.indexOf(s[i]);

        if (currentCharacterPosition !== -1) {
            currentString.splice(0, currentCharacterPosition + 1);
        }

        currentString.push(s[i]);

        longestStringLength = Math.max(
            longestStringLength,
            currentString.length
        );
    }

    return longestStringLength;
};
console.log(lengthOfLongestSubstring("my name is sujal"));

// task 4
function threeSum(arr){
 for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        for(let k=j+1;k<arr.length;k++){
            if(arr[i]+arr[j]+arr[k]==0){
                return `${i},${j} and ${k}`;
            }
        }
    }
 }
}
const arr =[1,4,0,-1,5];
console.log(threeSum(arr));

// task 5
function groupAnagrams(array){
    const anagram = {};
   for(str of array){
    let sorted =str.split("").sort().join("");
        if(!anagram[sorted]){
            anagram[sorted]=[];
         }
         anagram[sorted].push(str);
   }
   return Object.values(anagram);
}
const array = ["dog","god","odg","sujal"];
console.log(groupAnagrams(array));

// task 1
function getMedian(ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
 
    
    for (count = 0; count <= n; count++)
    {
    
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
 
        
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}
 

var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2)
   console.log("Median is ", getMedian(ar1, ar2, n1));
else
    console.log("Doesn't work for arrays of unequal size");
 

// task 3
function maxWater(arr, n)
{
    
    let res = 0;

    
    for(let i = 1; i < n - 1; i++)
    {

       
        let left = arr[i];
        for(let j = 0; j < i; j++)
        {
            left = Math.max(left, arr[j]);
        }

        let right = arr[i];
        for(let j = i + 1; j < n; j++)
        {
            right = Math.max(right, arr[j]);
        }

        res += Math.min(left, right) - arr[i];
    }
    return res;
}

let arr = [ 0, 1, 0, 2, 1, 0,
            1, 3, 2, 1, 2, 1 ];
let n = arr.length;

console.log(maxWater(arr,n));
// Maximum sub array sum
// [34, -50, 42, 14, -5, 86] → 137.


//1.Kadane’s Algorithm approach

function MaximumSubArraySum(arr){
  const len = arr.length;
  let maxSum = arr[0];
  let currSum = arr[0];
  
  for(let i=1;i<len;i++){
    currSum = Math.max(arr[i], currSum+arr[i]);
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
}

//2. prefixSum approach
function MaximumSubArraySumSumPrefix(arr){
  const len = arr.length;
  let minPrefix = 0;
  let prefixSum=0;
  let maxSum = -Infinity;
  for(let num of arr){
    
    prefixSum+=num;
    maxSum = Math.max(maxSum, prefixSum-minPrefix);
    minPrefix=Math.min(prefixSum, minPrefix);
    console.log(num, prefixSum, minPrefix, prefixSum-minPrefix, maxSum);
  }
  return maxSum;
}



const arr = [34, -50, 42, 14, -5, 86];

const r1 = MaximumSubArraySum(arr);
console.log(r1);
MaximumSubArraySumSumPrefix(arr);
// Dry prefixSum-minPrefix
// Pass1: 34 34 0 34 34
// Pass2: -50 -16 -16 0 34
// Pass3: 42 26 -16 42 42
// Pass4:  14 40 -16 56 56
// Pass5:  -5 35 -16 51 56
// Pass6:  86 121 -16 137 137

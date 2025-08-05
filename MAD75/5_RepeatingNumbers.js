

function RepeatingNumbers(arr){
  const seen = new Set();
  const duplicates = new Set();
  
  const result = [];
  
  for(let i=0;i<arr.length;i++){
    const curr = arr[i];
    if(seen.has(curr)){
      duplicates.add(curr);
    }else{
      seen.add(curr);
    }
  }
  return Array.from(duplicates);
}


const arr = [1, 2, 2, 1,3, 1]
const test1 = RepeatingNumbers(arr);
console.log(test1);
// INPUT: [1, 2, 2, 3, 1
//  OUPUT: [1,2]


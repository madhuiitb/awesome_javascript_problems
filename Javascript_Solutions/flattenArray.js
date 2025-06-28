const result = [];
const flattenArray = (arr)=>{
  for(let i=0;i<arr.length;i++){
    const key = arr[i];
    if(Array.isArray(key)){
      flattenArray(key);
    }
    else{
      result.push(key);
    }
  }
}




const arr = [[[1, [1.1]], 2, 3], [4, 5]];
flattenArray(arr)
console.log(result)

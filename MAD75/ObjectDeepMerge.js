


const obj1 = {
 a: 1,
 b: { c: 2, d: 4 },
 e: [1, 2, 3]
};
const obj2 = {
 b: { c: 3, f: 5 },
 e: [4, 5]
};


// Expected Output:


function deepMerge(obj1, obj2){

  
  let result = {...obj1};
  
  for(let key in obj2){
    const o1 = obj1[key];
    const o2 = obj2[key];
    const type1 = typeof o2;
    const type0 = typeof o1;
    
    if(type0==='object' && !Array.isArray(o1)  && type1==="object" && !Array.isArray(o2)){
      result[key] = deepMerge(o1,o2);
    }else{
      result[key] = o2;
    }
    
  }
  return result;
}


console.log(deepMerge(obj1, obj2));
// {
// a: 1,
// b: { c: 3, d: 4, f: 5 },
// e: [4, 5]
// }

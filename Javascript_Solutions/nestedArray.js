

const result = [];

const flattenArray = (arr, parentKey='', resultObj={})=>{
  if(arr===null || arr===undefined || typeof arr!=='object'){
    return resultObj;
  }
  const keys = Object.keys(arr);
  for(let key of keys){
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    const value = arr[key];
    if(value!==null && typeof value==='object' && !Array.isArray(value)){
      flattenArray(value, newKey, resultObj);
    }else{
      resultObj[newKey] = value;
    }
  }
  return resultObj;
}

const nestedObject = {
    ab:null,
    cd:undefined,
    a: 1,
    g:[1,2,3],
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
            h:4,
            i:5,
            j:[5,6,7]
            }
        }
    },
};

const res = flattenArray([1,2,3]);
console.log(res)

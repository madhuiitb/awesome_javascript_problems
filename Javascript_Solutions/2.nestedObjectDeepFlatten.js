// Example
const nestedObject = {
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

const nestedObjectDeepFlatten = (nestedObject, parentKey='', resultObject={})=>{
const keys = Object.keys(nestedObject);
  for(let key of keys){
    if(nestedObject.hasOwnProperty(key)){
			const newKey = parentKey ? `${parentKey}.${key}`:key;
      // This step is cruicial because it is dealing with the array values. 
      // Whenever we see the array values just adding them to the result object.
      if(typeof nestedObject[key]==='object' && !Array.isArray(nestedObject[key])){
        nestedObjectDeepFlatten(nestedObject[key], newKey, resultObject)
      }
      else{
      resultObject[newKey] = nestedObject[key];
      }
    }
  }
	return resultObject;
}


console.log(nestedObjectDeepFlatten(nestedObject))
// OUTPU
{
  a: 1,
  b.c: 2,
  b.d.e: 3,
  b.d.f.h: 4,
  b.d.f.i: 5,
  b.d.f.j: [5, 6, 7],
  g: [1, 2, 3]
}

Get object value from string path


// Input:


function get(obj, path){
  const regExp = /\[(\w+)\]/g
  const keys = path.replace(regExp, '.$1').split('.');
  // console.log(keys);
  let current=obj;
  
  
  for(let key of keys){
    if(current=== undefined || current===null){
      return undefined;
    }
   current = current[key];
  }
  return current;
}


const obj = {
  a: {
    b: {
      c: [1,2,3]
    }
  },
  d:10,
  e:{
    f:11,
    g:{
      h:[12,13,14],
      i:15
    }
  }
};

console.log(get(obj, 'a.b.c')); 
console.log(get(obj, 'a.b.c.0')); 
console.log(get(obj, 'a.b.c[1]')); 
console.log(get(obj, 'e.f[1]')); 
console.log(get(obj, 'e.g.h[2]')); 


// Output:
// [1,2,3]
// 1
// 2
// undefined
//14

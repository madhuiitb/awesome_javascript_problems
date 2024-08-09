// Example usage:
const obj1 = {
    name: "Sachin",
    age: 30,
    details: {
        hobbies: ["cricket", "gaming"],
        address: { city: "New York", zip: "10001" }
    }
};

const obj2 = {
    name: "Sachin",
    age: 30,
    details: {
        hobbies: ["cricket", "gaming"],
        address: {  street:'road1' , 
                    state:{
                        zip: "10002", city: "New York",
                    }
        }
    }
};

const obj3 = {
    name: "Sachin",
    age: 30,
    details: {
        hobbies: ["cricket", "gaming"],
        address: {  street:'road1' , 
                    state:{
                        zip: "10002", city: "New York",
                    }
        }
    }
};


const customObjectDeepEqual = (obj1, obj2)=>{
  // You can verify the typeof objects by console.log
  //console.log(typeof obj1, obj1, typeof obj2, obj2)
  if(obj1===obj2){
    return true;
  }
  if(typeof obj1 !=='object' || obj1===null || typeof obj2!=='object' || obj2===null){
    return false;
  }
const keys1 = Object.keys(obj1);
const keys2 = Object.keys(obj2);

//console.log(keys1, keys2);
 if(keys1.length !== keys2.length){
    return false;
  }

  for(let key of keys1){
    //console.log(key)
    if(!keys2.includes(key) || !customObjectDeepEqual(obj1[key],obj2[key])){
      return false;
    }
  }
  return true;
}

console.log(customObjectDeepEqual(obj1, obj2)); // False ( it will fail in the line #51 because no.of.keys are different in 2nd iteration )
console.log(customObjectDeepEqual(obj1, obj3)); // False ( it will fail in the line #51 because no.of.keys are different in 2nd iteration )
console.log(customObjectDeepEqual(obj2, obj3)); // True

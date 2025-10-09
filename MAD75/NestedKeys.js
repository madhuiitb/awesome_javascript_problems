



function getNestedKeys(obj, parentKey=""){
  
  let resultKeys = [];
  
  for(let key in obj){
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if(typeof obj[key]==="object"){
      resultKeys.push(...getNestedKeys(obj[key], newKey));
    }else{
      resultKeys.push(newKey); 
    }
  }
  return resultKeys;
}



const input = { a:{
                    b:1, 
                    c:{ d:'dec', e:"fff" }, 
                    f:"121"
                  }, 
                g:"ddd"
              }

console.log(getNestedKeys(input))
//output [ 'a.b', 'a.c.d', 'a.c.e', 'a.f', 'g' ]

const input3 = {
  teams: [
    { name: "Alpha", members: 3 },
    { name: "Beta", members: 5 }
  ],
  company: "IBM"
};
console.log(getNestedKeys(input3));
/* output [ 'teams.0.name', 'teams.0.members',
  'teams.1.name', 'teams.1.members', 'company' ] 
*/

const input4 = [1, {a:2,b:[3,4]},5];
console.log(getNestedKeys(input4));
// output: [ '0', '1.a', '1.b.0', '1.b.1', '2' ]


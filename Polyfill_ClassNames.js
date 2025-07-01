

function classNames(...args){
  
  let result = "";
  
  args.forEach((item)=>{
    const type = typeof item;
    if(!item ){
      return;
    }
    else if(type==='string' || type ==='number'){
      result = result+" "+item;
    }
    else if(Array.isArray(item)){
       result = result+ " "+classNames(...item);
    }
    else if(type==='object'){
      for(let key in item){
        if(item.hasOwnProperty(key) & item[key]){
          result = result+" "+key;
        }
      }
    }
   
  })
  return result.trim();
}



console.log(classNames('foo', 'bar')); // => 'foo bar'
console.log(classNames('foo', { bar: true })); // => 'foo bar'
console.log(classNames({ 'foo-bar': true })); // => 'foo-bar'
console.log(classNames({ 'foo-bar': false })); // => ''
console.log(classNames({ foo: true }, { bar: true })); // => 'foo bar'
console.log(classNames({ foo: true, bar: true })); // => 'foo bar'

// lots of arguments of various types
console.log(classNames('foo', { bar: true, duck: false }, 'baz', { quux: true })); // => 'foo bar baz quux'

// other falsy values are just ignored
console.log(classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, '')); // => 'bar 1'

const arr = ['b', { c: true, d: false }];
console.log(classNames('a', arr)); // => 'a b c'

let buttonType = 'primary';
console.log(classNames({ [`btn-${buttonType}`]: true }));



function mySetTimeoutMinimal(callback, delay, args=[]){
  const start = Date.now();
  (function check(){
    if(Date.now()-start>=delay){
      callback(...args);
    }else{
      setImmediate(check);
    }
  })();
}


function mySetTimeout(callback, delay, args=[]){
  let timerId = Symbol('timerId');
  let active = true;
 
  const promise = new Promise((resolve, reject)=>{
    const startTime = Date.now();
     const check = ()=>{
       if(!active) return;
        if(Date.now()-startTime>=delay){
          resolve();
        }else{
          setImmediate(check);
        }
     }
     
     check();
  });
  
  promise.then(()=>callback(...args));
  
  return {
    id:timerId,
    clear: ()=>(active=false),
  }
};

const timers = new Map();
function mySetTimeoutAPI(callback, delay, args){
  const id = Symbol();
  let active = true;
  
  const promise = new Promise((resolve, reject)=>{
    const startTime = Date.now();
    const check=()=>{
      if(!active) return;
      if(Date.now()-startTime>=delay){
        resolve();
      }else{
        setImmediate(check);
      }
    };
    check();
  })
  
  promise.then(()=>{
      callback(...args)
     timers.delete(id);
  });
  timers.set(id, ()=>(active=false))
  return id;
}

function myClearTimeout(id){
    if(timers.has(id)){
      timers[id]();
      timers.delete(id);
    }
  }

const test = (...msg) => console.log('working setTimeout polyfill', ...msg);

const ms1 = mySetTimeout(test, 4000, ['JUST', 1, 2, 3, { a: '123' }]);
console.log(ms1); // { id: Symbol(timerId), clear: [Function] }

const ms2 = mySetTimeoutAPI(test, 3000, ['API Version']);
console.log(ms2); // Symbol()

// Cancel example:
// myClearTimeout(ms2);
// ms1.clear();



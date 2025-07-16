console.log("Hello, World!");


const throttle = (fn, limit)=>{
  
  let wait=0;
  return (...args)=>{
    const latestTime = Date.now();
    if(latestTime - wait >=limit){
      console.log('present time-> ', latestTime, wait);
      wait =latestTime;
       fn.call(this, ...args);
    }
  }
}


const debounce = (fn, delay)=>{
  let timer;
  return (...args)=>{
    if(timer){
      clearTimeout(timer);
    }
    timer = setTimeout(()=>{
      fn.apply(this, args);
    },delay)
  }
}

const fun=(x)=>console.log("called with", x);

const test = debounce(fun, 100);
test(1);
test(2);
test(3);
test(4);
test(11);
test(21);
test(31);
test(41);
test(101);
test(12);
test(13);
test(14);
setTimeout(() => test(2), 500);   // Will be throttled
setTimeout(() => test(3), 1200);  // Will execute
setTimeout(() => test(4), 2500);  // Will execute

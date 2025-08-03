// Debounce pollyfill function
// Input :- callback func, delay
// Output:- output will be printed after the delay.


// 1️⃣ Problem
// You want to control how frequently a function is executed, especially for events that trigger rapidly (e.g., input typing, window resize, button clicks).
// Without control, these functions execute too many times, leading to:
//     Performance issues
//     Repeated API calls
//    Unnecessary UI updates
// The debounce function ensures that the provided function runs only after a specified delay from the last call.




function debounce(func, delay){
  let timerId=null;
  
  return function (...args){
     const context = this;
    if(timerId){
      clearTimeout(timerId);
    }
    timerId = setTimeout(function() {
      func.apply(context, args);
    }, delay);
  }
};


const multiply = (a, b)=>{
  console.log(a*b);
};

const multiplyWithDebounce = debounce(multiply, 3000);
multiplyWithDebounce(20,3);



// 2. Real-World Use Cases

//     Search boxes → Delay API calls until user stops typing.

//     Window resize events → Recalculate layout only after resizing stops.

//     Form validation → Validate only after user finishes typing.

//     Button click prevention → Prevent double-clicking rapidly.

// 3. Key Interview Points

//     Debounce delays execution until no further calls occur within the delay period.

 //    Throttle limits execution to once every given interval (difference from debounce).

 //    Mention edge cases like immediate execution option (leading debounce).

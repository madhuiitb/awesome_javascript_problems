const closures = ()=>{
	let previousSum = 0;
  
  return (value=0)=>{
  	previousSum+=value;
    return previousSum;
  }
}

let sum = closures();

console.log(sum(5)); // output 5
console.log(sum());  // output 5
console.log(sum(3)); // output 8
console.log(sum(10)); // output 18
console.log(sum());   // output 18




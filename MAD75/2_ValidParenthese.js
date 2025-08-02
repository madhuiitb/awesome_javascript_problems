// 2.Check if a String with Parentheses, Brackets, and Curly Braces is Valid
// Input: ({[[]]}()[]);
// Output: true;

function ValidParenthese(str){
  
  const objParenthese = {
    "}":'{',
    ')':'(',
    ']':'['
  };
  
  const stack = [];
  const len = str.length;
  for(let i=0;i<len;i++){
    const curr = str[i]; 
    if(curr==='(' || curr==='{' || curr==='['  ){
      stack.push(curr);
    }else{
      const top = stack[stack.length-1];
      if(objParenthese[curr]!==top){
        return false;
      }else{
        stack.pop();
      }
    }
  }
  if(stack.length!==0){
    return false;
  }
  return true;
}

console.log(ValidParenthese("({[[]]}()[])")); // ✅ true
console.log(ValidParenthese("({[[]}()[]);")); // ✅ false
console.log(ValidParenthese("()[]{}")); // ✅ true
console.log(ValidParenthese("(]")); // ✅ false
console.log(ValidParenthese("{[]}")); // ✅ true

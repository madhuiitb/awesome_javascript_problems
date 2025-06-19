Implementing the stack with array in Javascript

class Stack{
  constructor(){
    this.items = [];
    this.top=0;
  }
  
  push(element){
    this.items[this.top++]=element;
  }
  pop(){
    if(this.isEmpty()){
      return undefined;
    }
    this.top--;
    return this.items[this.top];
   
  }
  peek(){
   return  this.items[this.top-1];
  }
  isEmpty(){
    return this.top===0;
  }
}

function StackImplementation(){
  const stack = new Stack();
  
  stack.push(1);
  stack.push(2);
  console.log(stack.pop())
   console.log(stack.pop())
    console.log(stack.pop())
    stack.push(1);
  stack.push(2);
  stack.push(11);
  stack.push(21);
  stack.push(111);
  stack.push(121);
  console.log(stack)
  console.log(stack.isEmpty());
}

StackImplementation();


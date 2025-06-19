Queue implementation.

class Queue{
  
  constructor(){
    this.items = [];
    this.frontPointer = 0;
    this.rearPointer = -1;
    this.count = 0;
  }
  
  enqueue(element){
    this.items[++this.rearPointer]=element;
    this.count++;
  }
  
  front(){
    let temp = this.items[this.frontPointer];
    return temp;
  }
  
  rear(){
    let temp = this.items[this.rearPointer];
    return temp;
  }
  
  size(){
    return this.count;
  }
  isEmpty(){
    return this.count===0;
  }
  
  dequeue(){
    if(this.isEmpty()){
      return undefined;
    }
    let temp = this.items[this.frontPointer];
    this.count--;
    this.frontPointer++;
    return temp;
  }
}

function QueueImplementation(){
      const queue = new Queue();
      
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.enqueue(4);
      queue.enqueue(5);
      console.log(queue);
      const fr = queue.front();
      console.log(fr);
      const re = queue.rear();
      console.log(re);
      const si = queue.size();
      console.log(si)
      const em = queue.isEmpty();
      console.log(em)
      const dq = queue.dequeue();
      console.log(dq)
       const fr1 = queue.front();
      console.log(fr1);
      const re1 = queue.rear();
      console.log(re1);
      const si1 = queue.size();
      console.log(si1)
}

QueueImplementation();

class Move{
  constructor(){
    this.observers = [];
  }
  
  subscribe(sub){
    this.observers.push(sub);
  }
  unsubscribe(sub){
   this.observers =  this.observers.filter((obs)=>obs!==sub);
  }
  
  fire(o,thisObj){
    const scope = thisObj || global;
    this.observers.forEach((item)=> item.call(scope,o));
  }
}

const move = new Move();

const moveHandler = (item)=>console.log('move 1',item);

const sum = (value)=>console.log(value*2);

move.subscribe(moveHandler);
console.log(move.fire('moveHandler'));
console.log(move.fire('moveHandler 2'));
move.subscribe(sum);
move.fire('sum');
console.log(move);
move.unsubscribe(sum);




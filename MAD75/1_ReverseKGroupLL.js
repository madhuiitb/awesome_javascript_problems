class Node {
  constructor(value, next=null){
    this.value=value;
    this.next=next;
  }
};


function printLL(root){
  if(!root){
    console.log('No nodes');
  }
  let temp="";
  while(root!==null){
    temp = temp+root.value+"->"
     root = root.next;
     
  }
  console.log(temp.slice(0, temp.length-2));
}


function reverseKGroup(root, k){
  if(!root){
    console.log("No nodes");
    return null;
  }
  if(k<=1){
    return root;
  }
  let node = root;
  let count=0;
  while(node!==null && count < k){
    node = node.next;
    count++;
  }
  if(count < k){
    return root;
  }
  
  let prev = null;
  let curr = root;
  let nxt = null;

  
  let i=0;
  while(i<k && curr!==null){
    nxt = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nxt;
    i++;
  }
  
  if(nxt!==null){
    root.next =  reverseKGroup(nxt, k);
  }
  
  return prev;
}


const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;
const node3= new Node(3);
node2.next = node3;
const node4 = new Node(4);
node3.next = node4;
const node5 = new Node(5);
node4.next = node5;
const node6 = new Node(6);
node5.next = node6;

printLL(node1); // 1->2->3->4->5->6
let rev4 = reverseKGroup(node1, 4);
printLL(rev4);      // 4->3->2->1->5->6

let rev104 = reverseKGroup(rev4, 104);
printLL(rev104);    // 4->3->2->1->5->6

let rev0 = reverseKGroup(rev104, 4);
printLL(rev0);      // 1->2->3->4->5->6

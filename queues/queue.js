'use strict';

class _Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

//data structure queue operates in first in first out basis
class Queue {
  constructor(){
    this.first = null;
    this.last = null;
  }

  //two major fns => enqueue & dequeue 

  //enqueue will take a value and create a new node
  enqueue(value){
    const node = new _Node(value);

    //if the queue is empty then set the value to the first node
    if(this.first === null){
      this.first = node;
    } 
    
    //if there's something in the queue, 
    //making sure the pointers (next, last, prev) is taken care of first
    if (this.last){
      node.next = this.last;
      this.last.prev = node;
    }
    //then add the newly made node (w/ our values) as the last on the queue
    this.last = node;
  }

  dequeue(){
    if(this.first === null){
      return null;
    } 
    const node = this.first;
    this.first = node.prev;

    if(node === this.last){
      this.last = null;
    }
    return node.value;
  }

  //peek will return the animal who is next in the beginning of the queue
  peek(){
    if(!this.first){
      return null;
    } 
    return this.first.value;
  }
  
  display(){
    let currentQueue = this.first;
    if(currentQueue === null){
      throw new Error('The queue is empty');
    }
    while(currentQueue){
      console.log(currentQueue.value);
      currentQueue = currentQueue.prev;
    }
  }
  
  isEmpty(){
    return this.peek() === null ? true : false;
  }
}

// const testQueue = new Queue();
// testQueue.enqueue('John Snow');
// testQueue.enqueue('Daenarys');
// testQueue.enqueue('Cersei Lannister');
// testQueue.enqueue('Sansa Stark');

// console.log(testQueue);
//testQueue.display();
// console.log(testQueue.peek());
// console.log(testQueue.isEmpty());

module.exports = Queue;
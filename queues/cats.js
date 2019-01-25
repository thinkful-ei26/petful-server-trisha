'use strict';

const { Queue } = require('./queue');

const cats = [
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  }, {
    imageURL:'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60', 
    imageDescription: 'Brown Scottish fold cat',
    name: 'Ymir',
    sex: 'Female',
    age: 3,
    breed: 'Scottish Fold',
    story: 'Owner moved away'
  }, {
    imageURL:'https://images.unsplash.com/photo-1516978101789-720eacb59e79?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80', 
    imageDescription: 'Orange tabby cat yawning',
    name: 'Melisandre',
    sex: 'Female',
    age: 10,
    breed: 'Tabby',
    story: 'Too sleepy for her own good'
  }
];

const catQueue = new Queue();

for(let i=0; i<cats.length; i++){
  catQueue.enqueue(cats[i]);
}

console.log(catQueue);

module.exports = catQueue;
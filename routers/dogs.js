'use strict';

const express = require('express');
const router = express.Router();

const dogs = [{
  imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
  imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
  name: 'Zeus',
  sex: 'Male',
  age: 3,
  breed: 'Golden Retriever',
  story: 'Owner Passed away'
},{
  imageURL: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60',
  imageDescription: 'A handsome golden retrievier puppy with red collar',
  name: 'Brutus',
  sex: 'Male',
  age: 1,
  breed: 'Golden Retriever',
  story: 'Owner moved away'
},{
  imageURL: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60',
  imageDescription: 'A very hipster black pug',
  name: 'Shakespeare',
  sex: 'Male',
  age: 4,
  breed: 'Pug',
  story: 'Too hipster for his own good'
}
];

router.get('/', (req, res, next) => {
  return res.json(dogs[0]);
});

router.delete('/', (req,res,next)=> {
  dogs.shift();
  return res.sendStatus(204).json(dogs);
});

module.exports = router;
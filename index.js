'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { PORT, CLIENT_ORIGIN } = require('./config');
const { dbConnect } = require('./db-mongoose');
// const {dbConnect} = require('./db-knex');

const app = express();

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

const cat = [{
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
  imageURL:' https://unsplash.com/photos/b079C-_tUbM', 
  imageDescription: 'Orange tabby cat yawning',
  name: 'Melisandre',
  sex: 'Female',
  age: 10,
  breed: 'Tabby',
  story: 'Too sleepy for her own good'
}
];

const dog = [{
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

app.get('/api/cat', (req, res, next) => {
  return res.json(cat[0]);
});

app.get('/api/dog', (req, res, next) => {
  return res.json(dog[0]);
});

app.delete('/api/dog', (req, res, next) => {
  res.sendStatus(204);
});

app.delete('/api/dog', (req, res, next) => {
  dog.remove()
    .then(() => {
      res.sendStatus(204);
    })
    .catch(err => next(err));
});


function runServer(port = PORT) {
  const server = app
    .listen(port, () => {
      console.info(`App listening on port ${server.address().port}`);
    })
    .on('error', err => {
      console.error('Express failed to start');
      console.error(err);
    });
}

if (require.main === module) {
  dbConnect();
  runServer();
}

module.exports = { app };

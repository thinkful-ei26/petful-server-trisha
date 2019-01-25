'use strict';

const express = require('express');
const router = express.Router();
const dogsQueue = require('../queues/dogs');
const { peek } = require('../queues/queue');

router.get('/', (req, res, next) => {
  return res.json(dogsQueue.peek());
});

router.delete('/', (req,res,next)=> {
  dogsQueue.dequeue();
  return res.sendStatus(204).json(dogsQueue);
});

module.exports = router;
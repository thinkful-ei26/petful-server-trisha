'use strict';
const express = require('express');
const router = express.Router();
const catsQueue = require('../queues/cats');
const { peek } = require('../queues/queue');

router.get('/', (req, res, next) => {
  return res.json(catsQueue.peek());
});

router.delete('/', (req,res,next)=> {
  catsQueue.dequeue();
  return res.sendStatus(204).json(catsQueue);
});

module.exports = router;
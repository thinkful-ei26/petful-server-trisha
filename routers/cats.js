'use strict';
const express = require('express');
const router = express.Router();
const catQueue = require('../queues/cats');
const { peek } = require('../queues/queue');

router.get('/', (req, res, next) => {
  return res.json(catQueue.peek());
});

router.delete('/', (req,res,next)=> {
  catQueue.dequeue();
  return res.sendStatus(204).json(catQueue);
});

module.exports = router;